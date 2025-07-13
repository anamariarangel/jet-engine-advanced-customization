<?php
/**
 * Plugin Name: Audiências API Integrator
 * Description: A plugin to create posts for hearings from a protected API.
 * Version: 1.0.0
 * Author: Ana Maria Rangel
 * Author URI: https://portfolio.anamariarangel.com.br/
 */

// Function to create posts for hearings from the API
function create_audiencia_posts_from_api() {
    // API URL and token stored in constants or environment variables
    $api_url = ''
    $bearer_token = ''

    if (!$api_url || !$bearer_token) {
        error_log('API credentials are not configured.');
        return;
    }

    $args = [
        'headers' => ['Authorization' => 'Bearer ' . $bearer_token],
        'sslverify' => false,
    ];

    $response = wp_remote_get($api_url, $args);

    if (is_wp_error($response)) {
        add_action('admin_notices', function() use ($response) {
            $error_message = $response->get_error_message();
            echo "<div class='notice notice-error is-dismissible'><p>" . esc_html__('Error fetching API data:', 'audiencias-plugin') . " $error_message</p></div>";
        });
        return;
    }

    $audiencias_data = json_decode(wp_remote_retrieve_body($response), true);

    if (!empty($audiencias_data)) {
        foreach ($audiencias_data as $audiencia) {
            $existing_post = get_posts([
                'post_type' => 'audiencias-api',
                'meta_key' => 'numero_processo',
                'meta_value' => sanitize_text_field($audiencia['numero_processo']),
            ]);

            if (!$existing_post) {
                $post_id = wp_insert_post([
                    'post_title'    => 'Processo ' . sanitize_text_field($audiencia['numero_processo']),
                    'post_type'     => 'audiencias-api',
                    'post_status'   => 'publish',
                    'post_content'  => 'Audiência do tipo ' . sanitize_text_field($audiencia['tipo']) . ' julgada por ' . sanitize_text_field($audiencia['orgao_julgador']),
                ]);

                if ($post_id) {
                    $date_initial = DateTime::createFromFormat('d/m/Y H:i', $audiencia['data_hora_inicial']);
                    $data_hora_inicial = $date_initial ? $date_initial->getTimestamp() : '';
                    $date_final = DateTime::createFromFormat('d/m/Y H:i', $audiencia['data_hora_final']);
                    $data_hora_final = $date_final ? $date_final->getTimestamp() : '';

                    update_post_meta($post_id, 'data_hora_inicial', $data_hora_inicial);
                    update_post_meta($post_id, 'data_hora_final', $data_hora_final);
                    update_post_meta($post_id, 'tipo', sanitize_text_field($audiencia['tipo']));
                    update_post_meta($post_id, 'classe', sanitize_text_field($audiencia['classe']));
                    update_post_meta($post_id, 'orgao_julgador', sanitize_text_field($audiencia['orgao_julgador']));
                    update_post_meta($post_id, 'magistrado', sanitize_text_field($audiencia['magistrado']));
                    update_post_meta($post_id, 'relator', sanitize_text_field($audiencia['relator']));
                    update_post_meta($post_id, 'link_pje', esc_url($audiencia['link_pje']));
                    update_post_meta($post_id, 'numero_processo', sanitize_text_field($audiencia['numero_processo']));
                }
            }
        }
    }
}

add_action('audiencia_api_event', 'create_audiencia_posts_from_api');

// Schedule the function execution
function schedule_audiencia_check() {
    if (!wp_next_scheduled('audiencia_api_event')) {
        wp_schedule_event(time(), 'hourly', 'audiencia_api_event');
    }
}
register_activation_hook(__FILE__, 'schedule_audiencia_check');

// Cancel the cron job when the plugin is deactivated
function unschedule_audiencia_check() {
    $timestamp = wp_next_scheduled('audiencia_api_event');
    wp_unschedule_event($timestamp, 'audiencia_api_event');
}
register_deactivation_hook(__FILE__, 'unschedule_audiencia_check');

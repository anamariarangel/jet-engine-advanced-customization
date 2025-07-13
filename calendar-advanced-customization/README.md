<<<<<<< HEAD
### JetEngine Calendar Customization with JavaScript

This project demonstrates advanced customization of a JetEngine calendar listing in WordPress using JavaScript. It dynamically fetches and displays detailed post data in a popup when interacting with calendar events.

=======
### JetEngine Calendar Customization with JavaScript 

This project demonstrates advanced customization of a JetEngine calendar listing in WordPress using JavaScript. It dynamically fetches and displays detailed post data in a popup when interacting with calendar events.

See this project in https://www.tjmsp.jus.br/audiencias-e-sessoes-de-julgamento/

>>>>>>> 3df7859c8fdedaa669a27b8ba58225db6bf425c1
---

## Overview

This script is part of a WordPress customization project designed to enhance the default functionality of the JetEngine calendar. By integrating JavaScript with the JetEngine REST API, users can interact with calendar events and view detailed information dynamically within a popup.

### Key Skills Demonstrated
- Advanced WordPress development using JetEngine.
- Integration of JavaScript with REST API for data fetching.
- DOM manipulation and dynamic content rendering.
- Handling asynchronous API requests and error management.
- Multi-instance support for complex calendar listings.

---

## Installation & Setup

### Prerequisites:
1. **Custom Post Type**: Create a custom post type with fields corresponding to the API you want to fetch data from.
2. **Custom Plugin**: Install and configure the custom plugin `plugin-import-api-data.php`.
3. **API Data as Posts**: Each record from the API will be registered as a separate post in the custom post type.
<<<<<<< HEAD
4. **Popup Setup**: Create a popup container on the page where the calendar will be displayed. Keep the popup container hidden (`display: none`), using the CSS class `.popup-manual-event`.
5. **Empty Listing Grid**: Create a listing grid with an empty container, and set it as non-clickable.
6. **Calendar Listing**: Configure a JetEngine calendar listing on the page, using the created listing to display the dates of events.
=======
4. **Popup Setup**: Create the popup on the page where the calendar will be displayed. Keep the popup container hidden (`display: none`), using the CSS class `popup-manual-audiencia`. Refer to **Image 3**.
5. **Empty Listing Grid**: Create a listing grid with an empty container, and set it as non-clickable. See **Image 4**.
6. **Calendar Listing**: Configure a calendar listing on the page, using the previously created listing to display the dates of events.
>>>>>>> 3df7859c8fdedaa669a27b8ba58225db6bf425c1
7. **Custom Calendar CSS**: Use the following CSS to customize the calendar:

```css
.has-events {
    width: 100%;
    height: 100%;
}

.calendario-listing .has-events .jet-calendar-week__day-header {
    z-index: 99;
    padding: 0;
    border: 2px solid #25779C !important;
    background-color: #EFF3F6 !important;
}

.calendario-listing td {
    padding: 0;
    border: none;
}

.jet-calendar-week__day .has-events {
    width: 100%;
    height: 100%;
}

.jet-calendar-week__day-header {
    margin: 0;
}
<<<<<<< HEAD
=======
```

---

## How to Use

1. **Add the Script**:
   - Copy the JavaScript code into the **Custom Code** section of Elementor Pro or a similar plugin that supports adding JavaScript to WordPress pages.

2. **Ensure API Endpoint Availability**:
   - The script uses the WordPress REST API to fetch post data. Verify that the endpoint `/wp-json/wp/v2/events/{postId}` is configured and accessible.

3. **Activate the Script**:
   - Enable the script on pages with the JetEngine calendar to trigger the popup functionality when events are clicked.

---

## How It Works

1. **Detect Click Events**:
   - The script listens for clicks on calendar events and identifies the event’s `data-post-id` attribute.

2. **Fetch Data via REST API**:
   - When an event is clicked, the script sends a request to the WordPress REST API using the event's post ID.
   - It retrieves information such as process number, start and end dates, type, category, and more.

3. **Display Data in a Popup**:
   - The data is dynamically rendered inside a popup, providing detailed information about the event without leaving the calendar view.

4. **Support Multiple Calendars**:
   - The code handles multiple calendars on the same page, distinguishing between different popups.

---

## Features & Benefits

- **Real-Time Data Interaction**: Dynamically displays event details by integrating JavaScript with the WordPress REST API.
- **Enhanced User Experience**: Provides an intuitive interface for viewing event details without page reloads.
- **Scalable Customization**: The script can be adapted to display additional fields, making it flexible for various use cases.

---

## Why This Matters

This project showcases how the JetEngine plugin can be customized using JavaScript to extend WordPress functionality beyond standard configurations. 

### Ideal Use Case
This project demonstrates the following:
- Advanced customization of WordPress functionalities with JetEngine.
- Seamless integration of JavaScript for real-time data fetching and display.
- User-focused solutions that improve interaction and functionality.

---

## Customization Potential

Developers can extend this functionality by:
- Fetching and displaying additional fields in the popup.
- Customizing the layout and styling to fit specific design needs.
- Modifying the API endpoint to work with other custom post types or external data sources.

---

## About the Developer

I am Ana Maria Rangel, a WordPress developer with experience in customizing advanced features using tools like JetEngine, Elementor Pro, and JavaScript. This project demonstrates my ability to enhance WordPress functionality with dynamic JavaScript integrations.

---

## License

This project is shared under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to contact me with any questions about this project or my development skills. I’m open to opportunities involving advanced WordPress customization and front-end development.
>>>>>>> 3df7859c8fdedaa669a27b8ba58225db6bf425c1

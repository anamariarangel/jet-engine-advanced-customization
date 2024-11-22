<script>

///popup commands

    var closeBtn = document.getElementById('close-audiencia');
    var closeBtn1 = document.getElementById('close-audiencia1');

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            var popupManualAudiencia = document.querySelector('.popup-manual-audiencia');
            if (popupManualAudiencia) {
                popupManualAudiencia.style.display = 'none';
            }
        });
    }

    if (closeBtn1) {
        closeBtn1.addEventListener('click', function () {
            var popupManualAudiencia1 = document.querySelector('.popup-manual-audiencia1');
            if (popupManualAudiencia1) {
                popupManualAudiencia1.style.display = 'none';
            }
        });
    };


</script>
<script>
<<<<<<< HEAD
    // Comandos para fechar popups

    var closeBtn = document.getElementById('close-event');
    var closeBtn1 = document.getElementById('close-event1');

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            var popupManualEvent = document.querySelector('.popup-manual-event');
            if (popupManualEvent) {
                popupManualEvent.style.display = 'none';
=======

///popup commands

    var closeBtn = document.getElementById('close-audiencia');
    var closeBtn1 = document.getElementById('close-audiencia1');

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            var popupManualAudiencia = document.querySelector('.popup-manual-audiencia');
            if (popupManualAudiencia) {
                popupManualAudiencia.style.display = 'none';
>>>>>>> 3df7859c8fdedaa669a27b8ba58225db6bf425c1
            }
        });
    }

    if (closeBtn1) {
        closeBtn1.addEventListener('click', function () {
<<<<<<< HEAD
            var popupManualEvent1 = document.querySelector('.popup-manual-event1');
            if (popupManualEvent1) {
                popupManualEvent1.style.display = 'none';
            }
        });
    }
</script>
=======
            var popupManualAudiencia1 = document.querySelector('.popup-manual-audiencia1');
            if (popupManualAudiencia1) {
                popupManualAudiencia1.style.display = 'none';
            }
        });
    };


</script>
>>>>>>> 3df7859c8fdedaa669a27b8ba58225db6bf425c1

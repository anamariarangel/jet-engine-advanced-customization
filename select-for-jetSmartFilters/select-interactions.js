<script>
    function alterarStatusElementos() {
        // Get the select element
        var selectAtaRegistro = document.querySelector(".select-ata-registro");

        // Get the selected value
        var valorSelecionado = selectAtaRegistro.value;

        // Get the corresponding elements
        var filtroProcesso = document.querySelector(".buscar-numero-processo");
        var filtroDataAtaRegistro = document.querySelector(".filtro-data-ata-registro");
        var objetoAtaRegistro = document.querySelector(".objeto-ata-registro");
        var buscarNumeroAta = document.querySelector(".buscar-numero-ata");

        // Change the style based on the selected value
        switch (valorSelecionado) {
            case "periodo":
                console.log(valorSelecionado);
                filtroDataAtaRegistro.style.display = "flex";
                objetoAtaRegistro.style.display = "none";
                buscarNumeroAta.style.display = "none";
                filtroProcesso.style.display = "none";
                break;
            case "objeto":
                filtroDataAtaRegistro.style.display = "none";
                objetoAtaRegistro.style.display = "flex";
                buscarNumeroAta.style.display = "none";
                filtroProcesso.style.display = "none";
                break;
            case "numero-da-ata":
                filtroDataAtaRegistro.style.display = "none";
                objetoAtaRegistro.style.display = "none";
                buscarNumeroAta.style.display = "flex";
                filtroProcesso.style.display = "none";
                break;

            case "numero-do-processo":
                filtroDataAtaRegistro.style.display = "none";
                objetoAtaRegistro.style.display = "none";
                buscarNumeroAta.style.display = "none";
                filtroProcesso.style.display = "flex";
                break;

            default:
                filtroDataAtaRegistro.style.display = "none";
                objetoAtaRegistro.style.display = "none";
                buscarNumeroAta.style.display = "none";
                filtroProcesso.style.display = "none";
                break;
        }
    }
</script>

<script>
document.addEventListener('DOMContentLoaded', function() {
    let ultimoItemClicado = null; // Stores the last clicked item

    // Function to remove all elements from carrossel-imagem-div and carrossel-titulo from keyboard navigation, except jet-listing-grid__item and mais-noticias
    function configurarAcessibilidade() {
        // Remove all elements inside carrossel-titulo from keyboard navigation, except jet-listing-grid__item
        const elementosCarrosselTitulo = document.querySelectorAll('.carrossel-titulo *');
        elementosCarrosselTitulo.forEach(item => {
            if (!item.classList.contains('jet-listing-grid__item')) {
                item.setAttribute('tabindex', '-1'); // Remove from keyboard navigation
            } else {
                item.setAttribute('tabindex', '0'); // Include jet-listing-grid__item in keyboard navigation
            }
        });

        // Remove all elements inside carrossel-imagem-div from keyboard navigation, except mais-noticias
        const elementosCarrosselImagem = document.querySelectorAll('#carrossel-imagem-div *');
        elementosCarrosselImagem.forEach(item => {
            if (item.id !== 'mais-noticias') {
                item.setAttribute('tabindex', '-1'); // Remove from keyboard navigation
            }
        });

        // Include #mais-noticias in keyboard navigation, if it exists
        const maisNoticias = document.getElementById('mais-noticias');
        if (maisNoticias) {
            maisNoticias.setAttribute('tabindex', '0');
        }
    }

    // Function to handle click or Enter on jet-listing-grid__item
    function lidarComClique(event) {
        console.log('Click or Enter detected!');
        event.preventDefault(); // Prevent the default link behavior

        const imagem = this.querySelector('img');
        const linkImagem = this.querySelector('.link-post-imagem a[href^="https://"]');
        const carrosselImagem = document.querySelector('#carrossel-imagem-div');

        if (imagem && linkImagem && carrosselImagem) {
            console.log('Elements found to update the image on click.');
            const novoLink = document.createElement('a');
            novoLink.href = linkImagem.getAttribute('href');
            novoLink.setAttribute('tabindex', '0'); // Allow focus on the cloned image
            novoLink.setAttribute('target', '_blank'); // Open in a new tab on click

            const novaImagem = imagem.cloneNode(true);
            novaImagem.style.width = '100%';
            novaImagem.style.height = '100%';
            novaImagem.style.objectFit = 'cover';

            novoLink.appendChild(novaImagem);

            carrosselImagem.innerHTML = '';
            carrosselImagem.appendChild(novoLink);

            // Remove styles from the previously clicked item, if any
            if (ultimoItemClicado) {
                ultimoItemClicado.style.backgroundColor = '';
                ultimoItemClicado.style.borderLeft = '';
            }

            // Add styles to the clicked item
            this.style.backgroundColor = '#E1E7E8';
            this.style.borderLeft = 'solid 3px #2577bc';

            // Update the reference to the last clicked item
            ultimoItemClicado = this;

            // Focus on the new cloned image in the carousel
            novoLink.focus();

            // Add event to return focus to the last clicked item when pressing Esc
            novoLink.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    ultimoItemClicado.focus();
                }
            });
        } else {
            console.log('Elements not found to update the image on click.');
        }
    }

    // Function to add click and keyboard listeners to jet-listing-grid__item elements
    function adicionarOuvintesDeClique() {
        const jetListingGridItems = document.querySelectorAll('.carrossel-titulo .jet-listing-grid__item');
        console.log('Number of items found:', jetListingGridItems.length);

        jetListingGridItems.forEach(jetListingGridItem => {
            jetListingGridItem.setAttribute('tabindex', '0'); // Include in keyboard navigation

            // Add click and Enter events
            jetListingGridItem.addEventListener('click', lidarComClique);
            jetListingGridItem.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    lidarComClique.call(jetListingGridItem, event); // Simulate click on pressing Enter
                }
            });
        });
    }

    // Add a MutationObserver to monitor DOM changes
    const observer = new MutationObserver((mutationsList, observer) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'subtree') {
                // Check if the necessary elements have been added
                if (document.querySelector('#carrossel-imagem-div') && document.querySelector('.carrossel-titulo .link-post-imagem a[href^="https://"]') && document.querySelector('.carrossel-titulo img')) {
                    configurarAcessibilidade(); // Configure element accessibility
                    adicionarOuvintesDeClique(); // Add click listeners
                    observer.disconnect();
                    break;
                }
            }
        }
    });

    // Set the observer to monitor changes in the document body
    observer.observe(document.body, { childList: true, subtree: true });
});
</script>

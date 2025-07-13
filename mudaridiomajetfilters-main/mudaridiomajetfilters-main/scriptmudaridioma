<script>
	
// Function to translate the month name
function traduzirMes(mesEmIngles) {
  var mesesEmPortugues = {
    "January": "Janeiro", "February": "Fevereiro", "March": "Março", "April": "Abril", 
    "May": "Maio", "June": "Junho", "July": "Julho", "August": "Agosto", 
    "September": "Setembro", "October": "Outubro", "November": "Novembro", "December": "Dezembro"
  };

  return mesesEmPortugues[mesEmIngles];
}

// Function to observe changes in the DOM
function observarMudancas(mutationsList, observer) {
  for (var mutation of mutationsList) {
    if (mutation.type === 'childList') {
      // Searches for all elements with the class .ui-datepicker-month
      var spanElements = document.querySelectorAll('.ui-datepicker-month');
      spanElements.forEach(function(spanElement) {
        var mesEmIngles = spanElement.textContent.trim();
        var mesTraduzido = traduzirMes(mesEmIngles);
        if (mesTraduzido) {
          spanElement.textContent = mesTraduzido;
        }
      });
    }
  }
}

// Observer configuration to monitor changes in the DOM
var observer = new MutationObserver(observarMudancas);

// Target node to observe changes - in this case, the document body
var targetNode = document.body;

// Observer configuration to monitor changes in the target's children and subtrees
var config = { childList: true, subtree: true };

// Starts observing the target node with the specified configuration
observer.observe(targetNode, config);
	
</script>

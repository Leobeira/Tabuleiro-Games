function showImage(src) {
    var img = document.getElementById(src.split('/')[2].split('.')[0]);
    img.src = src;
    img.style.display = 'block';
}
// Seleciona todos os elementos com a classe 'tooltip'
var tooltips = document.querySelectorAll('.tooltip');

// Adiciona um listener de evento 'mouseover' a cada tooltip
tooltips.forEach(function(tooltip) {
  tooltip.addEventListener('mouseover', function(e) {
    var tooltiptext = this.querySelector('.tooltiptext');

    // Verifica se a tooltip está perto da parte inferior da página
    if (window.innerHeight - e.clientY < tooltiptext.offsetHeight) {
      // Se estiver, faz a tooltip abrir para cima
      tooltiptext.style.bottom = '100%';
      tooltiptext.style.top = 'auto';
    } else {
      // Se não estiver, faz a tooltip abrir para baixo (como padrão)
      tooltiptext.style.top = '100%';
      tooltiptext.style.bottom = 'auto';
    }
  });
});

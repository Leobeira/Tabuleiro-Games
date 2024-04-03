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

/*// Cria uma nova instância Popper para o Alp
const popperInstanceAlp = Popper.createPopper(
  document.querySelector('#monster-Alp'), // Elemento de referência
  document.querySelector('#tooltip-Alp'), // Tooltip
  {
    // configurações da Popper...
  }
);

// Mostra a tooltip quando o mouse passa sobre o Alp
document.querySelector('#monster-Alp').addEventListener('mouseenter', function() {
  document.querySelector('#tooltip-Alp').style.visibility = 'visible';
  popperInstanceAlp.update(); // Atualiza a posição da tooltip
});

// Esconde a tooltip quando o mouse sai do Alp
document.querySelector('#monster-Alp').addEventListener('mouseleave', function() {
  document.querySelector('#tooltip-Alp').style.visibility = 'hidden';
});*/

/*// Lista de todos os ids dos monstros
var monsters = ['Alp', 'Werewolf', 'Arachas Drone','Archespore', 'Barghest', 'Basilisk', 'Bruxa', 'Cockatrice', 'Erynia', 'Fiend', 'Foglet', 'GhoulGriffin', 'Harpy', 'Katakan', 'Ozzrel', 'Wyvern'];

// Loop sobre cada monstro
monsters.forEach(function(monster) {
  // Cria uma nova instância Popper para o monstro
  const popperInstance = Popper.createPopper(
    document.querySelector('#monster-' + monster), // Elemento de referência
    document.querySelector('#tooltip-' + monster), // Tooltip
    {
      // configurações da Popper...
    }
  );

  // Mostra a tooltip quando o mouse passa sobre o monstro
  document.querySelector('#monster-' + monster).addEventListener('mouseenter', function() {
    document.querySelector('#tooltip-' + monster).style.visibility = 'visible';
    popperInstance.update(); // Atualiza a posição da tooltip
  });

  // Esconde a tooltip quando o mouse sai do monstro
  document.querySelector('#monster-' + monster).addEventListener('mouseleave', function() {
    document.querySelector('#tooltip-' + monster).style.visibility = 'hidden';
  });
});*/

// Seleciona todos os monstros
var monsters = document.querySelectorAll('.monster');

// Adiciona um listener de evento 'mouseover' a cada monstro
monsters.forEach(function(monster) {
  monster.addEventListener('mouseenter', function() {
    // Atualiza a imagem e o texto da tooltip
    document.querySelector('#tooltip-img').src = this.dataset.img;
    document.querySelector('#tooltip-text').textContent = this.dataset.text;

    // Mostra a tooltip
    document.querySelector('#tooltip').style.visibility = 'visible';
  });

  monster.addEventListener('mouseleave', function() {
    // Esconde a tooltip
    document.querySelector('#tooltip').style.visibility = 'hidden';
  });
});

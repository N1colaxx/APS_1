// Verifica o evento de rolagem da página
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    // Se a posição de rolagem for maior que 20 pixels, exibe o botão, caso contrário, oculta
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
      document.getElementById("scrollToTopBtn").style.display = "none";
    }
  }
  
  // Quando o botão é clicado, a página é rolada de volta para o topo
  document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
  });
  
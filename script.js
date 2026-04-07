let slideIndex = 0;
let slideTimer;

// Função principal que mostra os slides
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Esconde todos
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Avança índice
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  // Remove estado ativo dos dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Mostra slide atual
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  // Reinicia timer
  clearTimeout(slideTimer);
  slideTimer = setTimeout(showSlides, 8000); // troca a cada 8s
}

// Botões de navegação manual
function plusSlides(n) {
  slideIndex += n - 1; // ajusta índice para não pular
  showSlides();
}

// Navegação pelos dots
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

// Inicializa
document.addEventListener("DOMContentLoaded", () => {
  showSlides();
});

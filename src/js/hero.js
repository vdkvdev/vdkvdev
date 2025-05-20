const texts = ['vdkv', 'Frontend', 'Developer', 'Techie', 'Maker'];
let currentIndex = 0;
let currentText = '';
let isTyping = true;
const element = document.getElementById('me');

function animate() {
  if (isTyping) {
    const currentWord = texts[currentIndex];
    if (currentText.length < currentWord.length) {
      // Escribe un carácter
      currentText = currentWord.substring(0, currentText.length + 1);
      element.textContent = currentText;
      setTimeout(animate, 100); // 100ms por carácter
    } else {
      // Palabra completa, espera 3500ms
      setTimeout(() => {
        isTyping = false;
        animate();
      }, 3500);
    }
  } else {
    if (currentText.length > 0) {
      // Borra un carácter
      currentText = currentText.substring(0, currentText.length - 1);
      element.textContent = currentText;
      setTimeout(animate, 100); // 100ms por carácter
    } else {
      // Palabra borrada, pasa a la siguiente
      currentIndex = (currentIndex + 1) % texts.length;
      isTyping = true;
      setTimeout(animate, 100);
    }
  }
}

// Inicia la animación al cargar la página
document.addEventListener('DOMContentLoaded', animate);
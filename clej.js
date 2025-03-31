const image = document.createElement('img'); // Crée un élément image
image.src = 'tel.jpg'; // Définit la source de l'image
image.style.position = 'absolute'; // Positionne l'image de manière absolue
image.style.width = '100px'; // Définit la largeur de l'image
image.style.height = '100px'; // Définit la hauteur de l'image
document.body.appendChild(image); // Ajoute l'image au corps du document

function moveImage() {
  const maxX = window.innerWidth - image.offsetWidth; // Calcule la largeur maximale
  const maxY = window.innerHeight - image.offsetHeight; // Calcule la hauteur maximale

  const randomX = Math.floor(Math.random() * maxX); // Génère une position X aléatoire
  const randomY = Math.floor(Math.random() * maxY); // Génère une position Y aléatoire

  image.style.left = randomX + 'px'; // Définit la position X de l'image
  image.style.top = randomY + 'px'; // Définit la position Y de l'image
}

setInterval(moveImage, 1000); // Déplace l'image toutes les 1 secondes

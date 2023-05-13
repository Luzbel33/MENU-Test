function cambiarImagen() {
    let imagen = document.getElementById('foto-1');
    if (imagen.src.endsWith('img1.PNG')) {
      imagen.src = 'images/img2.JPG';
    } else {
      imagen.src = 'images/img1.PNG';
    }
  }
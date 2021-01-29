let palabraSecreta;

const lista = ['amor de manteca',

  'Casa de Papel',
  'la historia sin fin',
  'entrevista con el vampiro',
  'tigre blanco',
  'inteligencia artificial',
  'el laberinto del fauno',
  'kill bill',
  ' la mala educacion',
  'resident evil',
  'the walking dead',
  'soy leyenda']
let palabraGuiones = [];
let errores = 0;
let dibujo = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png']




document.getElementById('btnIngresarPalabra').addEventListener('click', ingresarPalabra);
document.getElementById('btnAdivinar').addEventListener('click', adivinar);
let juegoFinzliado = false;

function adivinar() {

  if (!juegoFinzliado) {


    let error = true;
    let mensaje;
    const letra = (document.getElementById('txtLetra').value).toUpperCase();
    document.getElementById('txtLetra').value = '';

    if (palabraGuiones.indexOf(letra) === -1) {

      for (let i = 0; i < palabraGuiones.length; i++) {
        if (palabraSecreta[i].toUpperCase() === letra) {
          palabraGuiones[i] = letra;
          error = false;
        }
      }


      document.getElementById('txtJuego').textContent = palabraGuiones.join(' ');

      if (error) {
        errores++;
        mensaje = 'Suerte para la proxima';

        document.getElementById('dibujo').innerHTML = `<img width="200px" src="./assets/img/${dibujo[errores]}"/>`

      } else {
        mensaje = 'Haz Acertado';
      }
      juegoFinzliado = palabraGuiones.indexOf('_') === -1 || errores === 5

      if (juegoFinzliado) {
        if (errores === 5) {
          errores = 7


          mensaje = `<h1>Perdiste  La palabra secreta era: ${palabraSecreta} </h1>`

        } else {
          mensaje = '<h1> Haz Ganado </h1>';
          errores = 6


        }

        document.getElementById('dibujo2').innerHTML = `<img width="200px" src="./assets/img/${dibujo[errores]}"/>`

      }
    } else {
      mensaje = 'Ya dijiste la letra' + '  ' + letra
    }
    document.getElementById('mensaje').innerHTML = mensaje

  }

}



function formarPalabraGuiones() {

  for (let i = 0; i < palabraSecreta.length; i++) {


    if (palabraSecreta[i] === ' ') {
      palabraGuiones.push('-')
    } else {
      palabraGuiones.push('_')

    }


  }


}

function ingresarPalabra() {

  palabraSecreta = lista[Math.trunc(Math.random() * lista.length)]

  formarPalabraGuiones();
  document.getElementById('titulo').innerText = 'En el Juego...'
  document.getElementById('btnIngresarPalabra').style.display = 'none'
  document.getElementById('pantallaJuego').style.display = 'block';
  document.getElementById('txtJuego').textContent = palabraGuiones.join(' ');


}




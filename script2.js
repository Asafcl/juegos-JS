
var arrPreguntas = [];
var ContRespCorrecta = 0;
var contRespIncorrecta = 0;
var preguntaActual = 0;
var countPreg = 0;



function ingresoDatos(){

  countPreg +=1
  
  var pregunta1 = document.getElementById('pregunta1')
  var respuesta1 = document.getElementById('respuesta11')
  var respuesta2 = document.getElementById('respuesta22')
  var respuesta3 = document.getElementById('respuesta33')
  var respuesta4 = document.getElementById('respuestaCorrecta')
  
  
  var preg = pregunta1.value;
  console.log ('preg: ' + preg)
  var resp1 = respuesta1.value;
  console.log ('resp1: ' + resp1)
  var resp2 = respuesta2.value;
  console.log ('resp2: ' + resp2)
  var resp3 = respuesta3.value;
  console.log ('resp3: ' + resp3)
  var respCorrecta = respuesta4.value;
  console.log ('respuestaCorrecta: ' + respCorrecta)
  // Creamos un objeto nuevo con los datos de la preguntaa
  const pregunta = {
    pregunta: preg,
    respuestas: {
      1: resp1,
      2: resp2,
      3: resp3
    },
    respuestaCorrecta: parseInt(respCorrecta)
  };
  
  // Agregamos el objeto al array
  arrPreguntas.push(pregunta);
  //dejamos los textos vacios para ingresar mas datos
  pregunta1.value = ''
  respuesta1.value = ''
  respuesta2.value = ''
  respuesta3.value = ''
  respuesta4.value = ''
}

function mostrarBtnPreguntas(){
  document.getElementById('pregunta').style.display ='block'
}



function mostrarPregunta() {
  respuesta11.style.display ='none'
  respuesta22.style.display ='none'
  respuesta33.style.display ='none'
  pregunta1.style.display ='none'

  
  document.getElementById('label1').style.display = 'none'
  document.getElementById('label2').style.display = 'none'
  document.getElementById('label3').style.display = 'none'
  document.getElementById('label4').style.display = 'none'
  document.getElementById('label5').style.display = 'none'
  document.getElementById('respuestaCorrecta').style.display = 'none'
  document.getElementById('buttonIngresoDatos').style.display = 'none'
  document.getElementById('buttonGame').style.display = 'none'
  document.getElementById('pregunta').style.display ='block'
  document.getElementById('allButton').style.display = 'block'
    
  
  console.log(arrPreguntas)
  var pregunta = document.getElementById('pregunta');

  pregunta.textContent = arrPreguntas[preguntaActual].pregunta; 
  respuesta1.textContent = arrPreguntas[preguntaActual].respuestas[1];
  respuesta2.textContent = arrPreguntas[preguntaActual].respuestas[2];
  respuesta3.textContent = arrPreguntas[preguntaActual].respuestas[3];

 
  
  respuesta1.onclick = function() {
    if (arrPreguntas[preguntaActual].respuestaCorrecta === 1) {
      ContRespCorrecta += 1;
      preguntaActual +=1;
     
    } else {
      contRespIncorrecta += 1;
      preguntaActual +=1;
      
    }
    if (preguntaActual < arrPreguntas.length) {
      mostrarPregunta();
    } else {
      // hemos llegado al final de las preguntas, mostramos los resultados
       
      document.getElementById('headerChampinon').style.display = 'none'
      document.getElementById('respuesta1').style.display = 'none'
      document.getElementById('respuesta2').style.display = 'none'
      document.getElementById('respuesta3').style.display = 'none'
      document.getElementById('pregunta').style.display = 'none'
      document.getElementById('finalResult').style.display = 'block'
      
      document.getElementById('resp2Final').textContent = ('Respuestas correctas: ' + ContRespCorrecta);
      document.getElementById('resp3Final').textContent = ("Respuestas incorrectas: " + contRespIncorrecta);
      tiempo();
      
    }
  };

  respuesta2.onclick = function() {
    
    
    if (arrPreguntas[preguntaActual].respuestaCorrecta === 2) {
      ContRespCorrecta += 1;
      preguntaActual +=1;
      
    } else {
      contRespIncorrecta += 1;
      preguntaActual +=1;
      
      
    }
    if (preguntaActual < arrPreguntas.length) {
      mostrarPregunta();
    } else {
      // hemos llegado al final de las preguntas, mostramos los resultados
      
      document.getElementById('headerChampinon').style.display = 'none'
      document.getElementById('respuesta1').style.display = 'none'
      document.getElementById('respuesta2').style.display = 'none'
      document.getElementById('respuesta3').style.display = 'none'
      document.getElementById('finalResult').style.display = 'block'
            
      document.getElementById('resp2Final').textContent = ('Respuestas correctas: ' + ContRespCorrecta);
      document.getElementById('resp3Final').textContent = ("Respuestas incorrectas: " + contRespIncorrecta);
      tiempo();
    }
  };
  respuesta3.onclick = function() {
    if (arrPreguntas[preguntaActual].respuestaCorrecta === 3) {
      ContRespCorrecta += 1;
      preguntaActual +=1;
      } else {
      contRespIncorrecta += 1;
      preguntaActual +=1;
      
      
    }
    if (preguntaActual < arrPreguntas.length) {
      mostrarPregunta();
    } else {
      // hemos llegado al final de las preguntas, mostramos los resultados
      
      document.getElementById('headerChampinon').style.display = 'none'
      document.getElementById('respuesta1').style.display = 'none'
      document.getElementById('respuesta2').style.display = 'none'
      document.getElementById('respuesta3').style.display = 'none'
      document.getElementById('finalResult').style.display = 'block'
      
      document.getElementById('resp2Final').textContent = ('Respuestas correctas: ' + ContRespCorrecta);
      document.getElementById('resp3Final').textContent = ("Respuestas incorrectas: " + contRespIncorrecta);
      tiempo();
      
      

    }
  };

}
function tiempo(){
setTimeout(() => {
  window.location.replace('index.html')
}, "10000");
}
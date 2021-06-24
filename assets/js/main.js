const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return ;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getIMC(peso, altura);

  const nivelImc = getNivelImc(imc);

  const imsg = `Seu IMC é de ${imc}. Seu peso é considerado ${nivelImc}`

  setResultado(imsg, true)
});


 
function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado')
  resultado.innerHTML = '';

  const p = criaP();
  resultado.appendChild(p);
  p.innerHTML = msg;

  if (!isValid) {
    p.classList.add('paragrafo_resultado_negativo')
  }else {
    p.classList.add('paragrafo_resultado')
  }
}

function getNivelImc (imc) {
  const nivel = ['abaixo do peso', 'normal', 'sobrepeso', 'obesidade grau 1', 
  'obesidade grau 2', 'obesidade grau 3' ];

  if (imc >= 39.9) return nivel[5]; 

  if (imc >= 34.9) return nivel[4];

  if (imc >= 29.9) return nivel[3];
   
  if (imc >= 24.9) return nivel[2]; 
  
  if (imc >= 18.5) return nivel[1];
  
  if (imc < 18.5)  return nivel[0];
  
}

function getIMC (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP () {
  const p = document.createElement('p');
  return p;
}

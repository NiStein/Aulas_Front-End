/*Uso de document.write() para escrever no HTML*/
document.write('<h1>Bem-Vindo ao Site</h1>');

/*Imprimir as propriedades title e URL*/
document.write('Título: ' + document.title + '<br>');
document.write('URL: ' + window.location.href);

/*Escrever tags com document.write()*/
document.write('<h1>Título<h1><h2>Subtítulo</h2><p>Parágrafo<p>');

/*Criar um botão que gere um alerta*/

/*Obter um elemento pelo id e escrever em sua propriedade innerHTML*/
document.getElementById("texto").innerHTML  = "Texto alterado com JavaScript"

/*Trocar o atributo de algum elemento*/
document.getElementById("paragrafo").style.color = "blue"

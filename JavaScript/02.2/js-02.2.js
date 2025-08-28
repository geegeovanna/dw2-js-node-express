// MÉTODOS DE MANIPULAÇÃO DE VETORES

let vetor = ['Laranja', 'Maçã', 'Banana'];
document.write(`<p>Nosso vetor é o: ${vetor}</p>`);

vetor[3] = 'Morango';
document.write(`<p>Nosso vetor é o: ${vetor}</p>`);

// PUSH - Insere um novo elemento no FINAL do vetor:

vetor.push('Abacaxi');
document.write(`<p>Nosso vetor é o: ${vetor}</p>`);

// Só adiciona quando não existe o indice da lista, caso contrario ele substitui

vetor[0] = 'Pera';
document.write(`<p>Nosso vetor é o: ${vetor}</p>`);

// UNSHIFT - Insere um novo elemento no INICIO do vetor:

vetor.unshift(`Laranja`);
document.write(`<p>Nosso vetor é o: ${vetor}</p>`);

// LENGTH - Retorna o número de elementos no vetor

let numbers = [6, 8, 2, 9, 3, 800, 200];
document.write(`<p>Nosso vetor agora é o: ${numbers}</p>`);
document.write(`<p>O número de elementos desse vetor  é: ${numbers.length}</p>`);

// SORT - Ordena o vetor - pode utilizar em string 

document.write(`<p>O primeiro elemento do vetor  é: ${numbers[0]}</p>`);

let numbersOrdenado = numbers.sort();
document.write(`<p>O vetor ordenado é: ${numbersOrdenado}</p>`);

document.write(`<p>A lista de frutas ordenado é: ${vetor.sort()}</p>`);

//Ordenando um vetor númerico em ordem crescente:

document.write(`<p>${numbers.sort((a, b) => a - b)}</p>`);

//Ordenando um vetor númerico em ordem decrescente:

document.write(`<p>${numbers.sort((a, b) => b - a)}</p>`);
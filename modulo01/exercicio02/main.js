const usuarios = [
	{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
	{ nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
	{ nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

/* 2.1 */
const map = usuarios.map(({ idade }) => idade);

/* 2.2 */
const filter = usuarios.filter(({ idade, empresa }) => idade > 18 && empresa === 'Rocketseat');

/* 2.3 */
const find = usuarios.find(({ empresa }) => empresa === 'Google');

/* 2.4 */
const novaIdade = duplicaIdade(usuarios);
const novaIdadeFilter = novaIdade.filter((value) => value.idade <= 50);

function duplicaIdade(arr) {
	return arr.map((value) => {
		value.idade *= 2;
		return value;
	});
}

console.log(map);
console.log(filter);
console.log(find);
console.log(novaIdade);
console.log(novaIdadeFilter);
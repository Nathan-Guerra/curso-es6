import axios from 'axios';

/* 1.1 */
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
	const umS = await delay();
	console.log('1s');
	const doiss = await delay();
	console.log('2s');
	const tress = await delay();
	console.log('3s');
}
umPorSegundo();


/* 1.2 */
async function getUserFromGithub(user) {
	try {
		const usuario = await axios.get(`https://api.github.com/users/${user}`);
		console.log(usuario.data);
	} catch (err) {
		console.log('Usuário não existe');
	}
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

/* 1.3 */
class Github {
	static async getRepositories(repo) {
		try {
			const repos = await axios.get(`https://api.github.com/repos/${repo}`);
			console.log(repos.data);
		} catch (err) {
			console.log('Repositório não existe');
		}
	}
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

/* 1.4 */
const buscaUsuario = async usuario => {
	try {
		const user = await axios.get(`https://api.github.com/users/${usuario}`);
		console.log(user.data);
	} catch (err) {
		console.log('Usuário não existe');
	}
}
buscaUsuario('diego3g');

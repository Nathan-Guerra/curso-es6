class Usuario {
	constructor(mail, pass) {
		this.email = mail;
		this.senha = pass;
		this.admin = false;
	}

	isAdmin() {
		return this.admin;
	}
}

class Admin extends Usuario {
	constructor(mail, pass) {
		super(mail, pass);

		this.admin = true;
	}
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());
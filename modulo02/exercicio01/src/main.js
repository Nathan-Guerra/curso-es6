import classeUsuario, {idade as idadeUsuario} from './functions';

/* 1.1 */
classeUsuario.info();

/* 1.2 */
const pElem = document.createElement('p');
const textElem = document.createTextNode(idadeUsuario);
pElem.appendChild(textElem);
document.querySelector('body').appendChild(pElem);

/* 1.3 */
console.log(idadeUsuario);
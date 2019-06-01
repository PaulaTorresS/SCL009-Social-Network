import { signOut } from './../js/auth.js';

export const templateHome = () =>{
	document.getElementById('root').innerHTML = `<p>Home</p>
												<button id="btn-logout">logout</button>
												`
	document.getElementById('btn-logout').addEventListener('click', () => {
		signOut();
	})
}
import { signOut } from './../js/auth.js';

export const templateHome = () =>{
	document.getElementById('root').innerHTML = `
		<header id="home">
			<a href="#"><img  src="./../assets/img/mamasabe2.png" alt="logo"></a>			
			<nav id="site-nav" class="site-nav">
				<ul>
					<li>
						<a href="">
							perfil
						</a>
					</li>
					<li>
						<a href="">
							tabla de tía
						</a>
					</li>
					<li>
						<a href="">
							tabla de directora
						</a>
					</li>
					<li>
						<a href="">
							tabla de papas
						</a>
					</li>
					<li>
						<a href="" id="btn-logout">
							cerrar sesión
						</a>
					</li>
				</ul>
			</nav>
			<div id="menu-toggle" class="menu-toggle">
				<div class="hamburger"></div>
			</div>
		</header>
												`
	document.getElementById('btn-logout').addEventListener('click', () => {
		signOut();
	})
}
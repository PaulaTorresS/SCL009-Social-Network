
	document.getElementById('menu-toggle').addEventListener('click', ()=>{
	  let siteNav = document.getElementById('site-nav');
	  siteNav.classList.toggle('site-nav-open');
	  let menuOpen = document.getElementById('menu-toggle');
	  menuOpen.classList.toggle('menu-open');
	})

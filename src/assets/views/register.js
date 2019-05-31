let Register = {

	render: async () => {
		return /*html*/ `
		<div class="form col-4 col-6-sm">
			<form action="">
				email 
				<br>
				<input type="email">
				<br>
					contraseña 
				<br>
				<input type="password">
				<br>
				<input type="submit" value="entrar">
			</form>
		</div>
		`
	}
	// All the code related to DOM interactions and controls go in here.
    // This is a separate call as these can be registered only after the DOM has been painted
    , after_render: async () => {
    	
    }
}


// <!-- <div class="form col-4 col-6-sm">
// 			<form action="">
// 					email 
// 				<br>
// 				<input type="email">
// 				<br>
// 					contraseña 
// 				<br>
// 				<input type="password">
// 				<br>
// 				<input type="submit" value="entrar">
// 			</form>
// 		</div> -->
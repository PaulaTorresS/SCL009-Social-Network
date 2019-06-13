
import { addEvents, printPost } from '../views/templateWall.js';
import { validatePost} from './validation.js';
// Crear Post
export const createPost = (post, count, liked) =>{
	let db = firebase.firestore();
	let date = Date.now();
	

	 firebase.auth().onAuthStateChanged(user => {
	 	console.log(user);
	 	getName(user.email);
	 	db.collection('users').doc(user.uid).get().then(doc => {
	 		if(validatePost(post)){
		 		db.collection('post').add({

		 			uid: user.uid,
		 			author: user.email,
		 			
		 			authorname:user.name,
		 			date: date,
		 			message: post,
		 			like: count,
		 			liked: liked
		 		}).then(function(doc){
		 			console.log("Document written with ID: ", doc.id);

		 			document.getElementById('text-post').value ='';
		 			document.getElementById('text-post').focus();
		 			window.location.hash='/wall';
		 			readPost();

		 		}).catch(function(error) {
	            console.error("Error adding document: ", error);
				});

			}else{
				console.log('error de validacion del post')
				//return "error de validacion del post";

			}
	 	})
	 })

}
// read post
export const readPost = () => {
  let db = firebase.firestore();

  db.collection('post').orderBy("date", "desc").onSnapshot((querySnapshot) =>{

  	if(document.getElementById('posts')){
        document.getElementById('posts').innerHTML = '';
	}
  	querySnapshot.forEach((doc) =>{	
  		printPost(doc);
   		});
  	querySnapshot.forEach((doc) => {
        addEvents(doc);
  	})
 });
  	  
}

// obtener nombre de usuario para colocarlo en post


const getName = (email) =>{
    //consulta para obtener los datos del usuario, cuyo correo que se envia es igual al correo de la BD
    let db = firebase.firestore();
    let users = db.collection("users").where("email","==",email);
    users.get().then((querySnapshot) => {
        querySnapshot.forEach((doc)=>{
            firebase.auth().currentUser.name = doc.data().name;
        })
        
    });
}

//delete post

export const deletePost = (id) =>{
    let db = firebase.firestore();
    if(confirm("¿Seguro que quieres borrar tu publicación?")){
        db.collection("post").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
           //readPost();
                    
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
}
// editar post

export const editPost =(id)=>{
	let db = firebase.firestore();
	db.collection('post').doc(id).get().then(doc=>{
		document.getElementById(`inp${doc.id}`).value = doc.data().message;
		document.getElementById(`inp${doc.id}`).style.display = "block";
		document.getElementById(`msg${doc.id}`).style.display = "none";
		document.getElementById(`edit${doc.id}`).style.display = "none";
		document.getElementById(`save${doc.id}`).style.display = "inline";

		document.getElementById('save'+doc.id).addEventListener('click', ()=>{
			let post = document.getElementById(`inp${doc.id}`).value;
			let docRef = db.collection('post').doc(id);
			return docRef.update({
				message: post
			})
			.then(()=>{
				console.log("Documento actualizado")
			})
			.catch((error)=>{
				console.error(error);
			})
		})
	})
}
//creamos collection likes
// export const createLike = (id) =>{
// 	let db = firebase.firestore();
// 	db.collection('post').doc(id).get().then(doc =>{
// 		db.collection('likes').add({
// 			uid: doc.data().uid,
// 			postid: id
// 		}).then(function(doc){
//  			console.log("Document written with ID: ", doc.id);
//  		}).catch(function(error) {
//         console.error("Error adding document: ", error);
// 		});
// 	})

// }

// export const  compareLike = (postid, currentUser) =>{
	
// 	let db = firebase.firestore();
// 			db.collection('likes').where("postid","==",postid)
// 			.get()
//			.where("uid","===",currentUser)
//		    .get()
// 			.then(function(querySnapshot){
// 		        querySnapshot.forEach(function(doc) {

// 		        });
// 		    })
// 		    .catch(function(error) {
// 		        console.log("Error getting documents: ", error);
// 		    });
// }
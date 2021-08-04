document.getElementById("logup").addEventListener("submit",(event)=>{
  event.preventDefault()
})

// firebase.auth().onAuthStateChanged((user)=>{
//   if(user){
//     location.replace("welcome.html")
//   }
// })

function signup(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value; 

  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        window.alert('Signed Up Successfully !');
        location.replace("Home.html");
    })
    .catch(error => {
        document.getElementById("error").innerHTML = error.message;
    });
}
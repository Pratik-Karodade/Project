document.getElementById("login_form").addEventListener("submit",(event)=>{
  event.preventDefault()
})



function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email,password).catch((error)=>{
    document.getElementById("error").innerHTML = error.message;
  })

  firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    location.replace("welcome.html")
  }
  })
}
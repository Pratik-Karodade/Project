firebase.auth().onAuthStateChanged((user)=>{
  if(!user){
    location.replace("Home.html")
  }else{
    document.getElementById("eml").innerHTML = "Hello, "+user.email;
  }
})

function logout(){
firebase.auth().signOut();
}

var firebaseConfig = {
    apiKey: "AIzaSyC8V_h66k-b9vL_5u02TTA1h6LZ-tHhrB0",
    authDomain: "practice-activity-3911e.firebaseapp.com",
    databaseURL: "https://practice-activity-3911e-default-rtdb.firebaseio.com",
    projectId: "practice-activity-3911e",
    storageBucket: "practice-activity-3911e.appspot.com",
    messagingSenderId: "553267580981",
    appId: "1:553267580981:web:465e3d118f3ada7195617c"
  };
  
  
  firebase.initializeApp(firebaseConfig);
    
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
  
  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "Adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}

getData();

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
  });
}
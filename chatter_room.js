
var firebaseConfig = {
      apiKey: "AIzaSyBa8ssM9ixXxdHysaw7DPYATIUzKII4yvQ",
      authDomain: "kwitter-b80d5.firebaseapp.com",
      databaseURL: "https://kwitter-b80d5-default-rtdb.firebaseio.com",
      projectId: "kwitter-b80d5",
      storageBucket: "kwitter-b80d5.appspot.com",
      messagingSenderId: "969195325341",
      appId: "1:969195325341:web:6da64b215a39e76c309174",
      measurementId: "G-6GGYZMDXGS"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    function addRoom(){

            room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding room name"
            });

            localStorage.setItem("room_name", room_name);
            window.location = "chatter_page.html";
    }
    function getData() 
    {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_names);
      row = "<div class = 'room_name' id="+ Room_names+"onclick = 'redirectToRoomName(this.id)'>#" + Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirectToRoomName(name){

      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chatter_page.html";
}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "chatter_login.html";
}
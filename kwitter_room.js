
const firebaseConfig = {
  apiKey: "AIzaSyC6P6sdIVHrvYQ34Gm5nap_O40vXNUAc68",
  authDomain: "kwitter-p2-b922d.firebaseapp.com",
  databaseURL: "https://kwitter-p2-b922d-default-rtdb.firebaseio.com",
  projectId: "kwitter-p2-b922d",
  storageBucket: "kwitter-p2-b922d.appspot.com",
  messagingSenderId: "866192435669",
  appId: "1:866192435669:web:fb314baf36e576f678355c",
  measurementId: "G-TV8D3597YG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";






function addRoom() {

  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}




function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;

      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAc6SAP_dFJoZJfHh6mIxtDw9QJY00Dvy8",
    authDomain: "rps-multiplayer-f0a32.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-f0a32.firebaseio.com",
    projectId: "rps-multiplayer-f0a32",
    storageBucket: "rps-multiplayer-f0a32.appspot.com",
    messagingSenderId: "267120449019"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database
  var database = firebase.database();

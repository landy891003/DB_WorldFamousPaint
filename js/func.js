
const firebaseConfig = {
  apiKey: "AIzaSyClJJSfWUwkKOcTJQUPC5FBQCRBLjOF7c4",
  authDomain: "database2022fall-2b6e4.firebaseapp.com",
  databaseURL: "https://database2022fall-2b6e4-default-rtdb.firebaseio.com",
  projectId: "database2022fall-2b6e4",
  storageBucket: "database2022fall-2b6e4.appspot.com",
  messagingSenderId: "512129637082",
  appId: "1:512129637082:web:2296b25c03079302bc63e3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

function getdata(){
  db.collection("artworks").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});
}

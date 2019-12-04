import firebase from 'firebase/app';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyANpv6Uo1IHY0RRx88WwwKMlWCnEd9UbfE",
    authDomain: "leagueapp-b2402.firebaseapp.com",
    databaseURL: "https://leagueapp-b2402.firebaseio.com",
    projectId: "leagueapp-b2402",
    storageBucket: "leagueapp-b2402.appspot.com",
    messagingSenderId: "849952774709",
    appId: "1:849952774709:web:42cfd125fc20d21760af7c",
    measurementId: "G-BZ5CNL4V7M"
  };

firebase.initializeApp(config);
export let storage = firebase.storage();


/* export let getUrl = (item) => {
    let storageRef = storage.ref();
let itemsRef = storageRef.child('items');
let itemNumb = `${item}.png`;
let itemRef = itemsRef.child(itemNumb);

itemRef.getDownloadURL().then(function(url) {
   return( 
            url
   )
    
  }).catch(function(error) {
      console.log(error)      

    });
} */

/* let gsRef =storage.refFromURL('gs://leagueapp-b2402.appspot.com/items/1001.png');
var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg'); */
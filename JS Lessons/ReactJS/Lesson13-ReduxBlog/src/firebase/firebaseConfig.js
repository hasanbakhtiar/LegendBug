import firebase from 'firebase/app';
import 'firebase/database';


 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAINy-yzQcx2zS2mZ4LkjAubtlWQUuWerA",
    authDomain: "react-app-blog-f5b76.firebaseapp.com",
    databaseURL: "https://react-app-blog-f5b76-default-rtdb.firebaseio.com",
    projectId: "react-app-blog-f5b76",
    storageBucket: "react-app-blog-f5b76.appspot.com",
    messagingSenderId: "462374684888",
    appId: "1:462374684888:web:b96682acdbfe08421c6fad"
  };
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export {database as default};
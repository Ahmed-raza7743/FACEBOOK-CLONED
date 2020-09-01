import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyARt8tqTTt30zzx7uxjVhHwNG3hb1AV3hg",
  authDomain: "fb-clone-af766.firebaseapp.com",
  databaseURL: "https://fb-clone-af766.firebaseio.com",
  projectId: "fb-clone-af766",
  storageBucket: "fb-clone-af766.appspot.com",
  messagingSenderId: "737032863135",
  appId: "1:737032863135:web:1c181f879751b84370d1aa",
  measurementId: "G-N0RJPYQ4YJ"
};

  const firebaseapp =firebase.initializeApp(firebaseConfig)
  const db =firebaseapp.firestore()
  const auth=firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider()

  export default db
  export {auth, provider}
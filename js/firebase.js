  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
  import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"

  const firebaseConfig = {
    apiKey: "AIzaSyA-nBj5wggD_2LaaJfkoSvdjbR5PLkT4lU",
    authDomain: "clothing-brand-67c4f.firebaseapp.com",
    projectId: "clothing-brand-67c4f",
    storageBucket: "clothing-brand-67c4f.appspot.com",
    messagingSenderId: "468156845918",
    appId: "1:468156845918:web:39044477c3a70945a6c9cf"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

const getProducts = async () => {

  const querySnapshot = await getDocs(collection(db, "productos"));

  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
  
}
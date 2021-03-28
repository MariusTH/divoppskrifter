import firebase from 'firebase/app'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
	apiKey: "AIzaSyAT0hEvREDb9BQ8jfFoVPGtTVTxqrJKONs",
	authDomain: "divoppskrifter.firebaseapp.com",
	databaseURL: "https://divoppskrifter-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "divoppskrifter",
	storageBucket: "divoppskrifter.appspot.com",
	messagingSenderId: "638040998748",
	appId: "1:638040998748:web:c6d0bdb774b8a1307bb799",
	measurementId: "G-RBTVFGNZ1N"
  };

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
//const auth = firebase.auth()

// collection references
// const usersCollection = db.collection('users')
// const postsCollection = db.collection('posts')
// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
//  auth,
//   usersCollection,
//   postsCollection,
//   commentsCollection,
//   likesCollection
}
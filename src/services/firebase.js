import firebase from 'firebase'
// firebase.initializeApp(config)
const storage = firebase.storage()
const database = firebase.database()

export default {
  database,
  storage
}

var config = {
  apiKey: 'AIzaSyBN6vDbvspkCmmZs1XhQz84KSDb4kGOu7s',
  authDomain: 'photo-cloud-service.firebaseapp.com',
  databaseURL: 'https://photo-cloud-service.firebaseio.com',
  projectId: 'photo-cloud-service',
  storageBucket: 'photo-cloud-service.appspot.com',
  messagingSenderId: '310429767708'
}
firebase.initializeApp(config)

// export default {
//   database: firebase.database()
// }

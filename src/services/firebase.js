import firebase from 'firebase'

var config = {
  apiKey: '',
  authDomain: 'photo-cloud-service.firebaseapp.com',
  databaseURL: 'https://photo-cloud-service.firebaseio.com',
  projectId: 'photo-cloud-service',
  storageBucket: 'photo-cloud-service.appspot.com',
  messagingSenderId: '310429767708'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}

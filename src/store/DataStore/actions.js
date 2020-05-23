import {firebaseAuth, firebaseDB} from 'boot/firebase'

export function registerUser ({}, formData ) {
  console.log(formData);
  firebaseAuth.createUserWithEmailAndPassword(formData.email, formData.password)
    .then(response => {
      console.log(response);
      let userID = firebaseAuth.currentUser.uid;
      firebaseDB.ref('users/' + userID).set({
        name: formData.name,
        email: formData.email
      })

    })
    .catch(response => {console.log(response)})
}

export function loginUser({}, formData) {
  firebaseAuth.signInWithEmailAndPassword(formData.email, formData.password)
    .then(response => {
      console.log(response);

    })
    .catch(response => {console.log(response)})

}


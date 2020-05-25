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
      }).then(console.log)

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

export function logoutUser() {
  firebaseAuth.signOut().then(x=> {console.log("Signed out: ", x)})
}

export function handleAuthStateChanged({ commit, dispatch, state }) {
  firebaseAuth.onAuthStateChanged(user => {
    if (user) {
      // User is logged in.
      let userId = firebaseAuth.currentUser.uid
      firebaseDB.ref('users/' + userId).once('value', snapshot => {
        let userDetails = snapshot.val()
        commit('setUserDetails', {
          name: userDetails.name,
          email: userDetails.email,
          userId: userId
        })
      })
      dispatch('firebaseUpdateUser', {
        userId: userId,
        updates: {
          online: true
        }
      })
      dispatch('firebaseGetUsers', userId)
      this.$router.push('/')
    }
    else {
      // User is logged out.
      dispatch('firebaseUpdateUser', {
        userId: state.userDetails.userId,
        updates: {
          online: false
        }
      })
      commit('setUserDetails', {})
      this.$router.replace('/auth')
    }
  })
}

export function firebaseUpdateUser({}, payload) {
  firebaseDB.ref('users/' + payload.userId).update(payload.updates)
}



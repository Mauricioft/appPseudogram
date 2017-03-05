import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

class App extends Component {
   constructor(){
      super();
      this.state={
         user: null
      };
      this.handleAuth = this.handleAuth.bind(this);
      this.handlerLogout = this.handlerLogout.bind(this);
   }
   // esta funcion se ejecuta una vez el componente fue renderizado
   componentWillMount(){
      firebase.auth().onAuthStateChanged(user => {
         console.log('onAuthStateChanged', user);
         this.setState({
            user
         });
      });
   }
   handleAuth(){
      // instanciamos el provedor de google
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(result => {
         console.log(`${result.user.email} ha iniciado sesión`)  
      })
      .catch(error => {
         console.log(` Error ${error.code}: ${error.message}`)
      });
   }
   handlerLogout(){
      firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha salido`))
      .catch(error => console.log(` Error ${error.code}: ${error.message}`));
   }
   renderLoginButton(){
      // si el usuario esta logueado 
      if(this.state.user)
         return (
            <div>
               <p>
                  <img width="100" src={this.state.user.photoURL} alt={this.state.user.displayName} />
                  Hola {this.state.user.displayName}!
                  <button onClick={this.handlerLogout}>Salir</button>
               </p>
            </div>
         );
      else{
         // Si no esta 
         return (
            <button onClick={this.handleAuth}>Login con google</button>
         );
      }
   }
   render() {
      return (
         <div className="App">
            <div className="App-header">
               <h2>pseudogram</h2>
            </div>
            <p className="App-intro">
               { this.renderLoginButton() }
            </p>
         </div>
      );
   }
}

export default App;

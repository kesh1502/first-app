import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { provideAuth, getAuth, AuthModule, createUserWithEmailAndPassword , signInWithEmailAndPassword, } from '@angular/fire/auth';
import { sendPasswordResetEmail } from '@firebase/auth';
import { AngularFireModule } from '@angular/fire/compat';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router) { }

  user = {
    email:'',
    password:''
  }



  ngOnInit() {
  }

  
  async logMeIn(){
      //code for loggin in user goes here
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.user.email, this.user.password).then((userCredential) => { const user = userCredential.user;})
      .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
      });
  }

  async register(){
    //code for loggin in user goes here
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.user.email, this.user.password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('registration successful!');
        // .
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    
  }
}




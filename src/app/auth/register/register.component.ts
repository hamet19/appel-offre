import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string='';
  password:string='';
 reapetpassword:string='';


  constructor(private fire:AngularFireAuth,private router:Router) { }

  ngOnInit() {
  }

  registre(){
    if(this.password==this.reapetpassword){
      this.fire.auth.createUserWithEmailAndPassword(this.email,this.password)
      .then(user=>{
        localStorage.setItem('isLoginIn','false')
        this.router.navigate(['liste_appel_offre'])
      }).catch(error=>{
        console.error(error)
      })
    }else console.log("le mot de passes ne correspondent pas")
   
  }

}


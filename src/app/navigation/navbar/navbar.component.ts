import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase  from 'firebase/app';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    marginY=0;
    destination=0;
    speed=1080;
    scroller=null;
    
    user:Observable<firebase.User>;
    private isLoginIn: Boolean=false;
    private email:string;
    
    


  constructor(public db:AngularFireDatabase,public router:Router ,public afAuth: AngularFireAuth) { 
    
    let  status=localStorage.getItem('isLoginIn')
      
    console.log(status)

    if(status==='true'){
      this.isLoginIn=true
    }else{
      this.isLoginIn=false
    }
  }
  

  ngOnInit() {
  }

 onInit(elementId){

   this.destination=document.getElementById(elementId).offsetTop;
   

   this.scroller=setTimeout(function(){
      this.onInit(elementId)
      
    },0);

    this.marginY=this.marginY + this.speed

    if(this.marginY >= this.destination){
      clearTimeout(this.scroller);
      
    }
    
  window.scroll(0,this.destination);
   

  }
  logOut(){
    this.afAuth.auth.signOut()
    this.isLoginIn=false;
    localStorage.setItem('isLoginIn','false')
    this.router.navigate(['home'])
    alert("Vous n'ete plus en ligne")
  }
 

}

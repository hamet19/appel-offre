import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';




@Component({
  selector: 'app-list-appel-offre',
  templateUrl: './list-appel-offre.component.html',
  styleUrls: ['./list-appel-offre.component.css']
})
export class ListAppelOffreComponent implements OnInit {
  itemList:AngularFireList<any>
  itemEntreprise:AngularFireList<any>
  itemListEntreprise:AngularFireList<any>
  itemArray=[]


  
  constructor(public db:AngularFireDatabase, public router:Router ) {
    this.itemList=db.list('creer_appel_offre')
    this.itemEntreprise=db.list('liste_appel_offre')
    this.itemListEntreprise=db.list('entreprises_postules')

     


    this.itemList.snapshotChanges()
    .subscribe(actions=>{
      actions.forEach(action=> {
        let y=action.payload.toJSON()
        y["$key"]=action.key
        this.itemArray.push(y as ListItemClass)
        
      }); 
    })
    console.log(this.itemArray);
   }

  ngOnInit() {
  }
  donne={
    title:'',
    nom:'',
    address:'',
    matricule:'',
    ninea:'',
    capitale:'',
    employe:'',
    image:''
  }
  
  insertEntreprise(){
    this.itemEntreprise.push({
      title:this.donne.title,
      nom:this.donne.nom,
      address:this.donne.address,
      matricule:this.donne.matricule,
      ninea:this.donne.ninea,
      capitale:this.donne.capitale,
      employe:this.donne.employe,
      image:this.donne.image
    })
    this.itemListEntreprise.push({
      title:this.donne.title,
      image:this.donne.image,
      nom:this.donne.nom,
      address:this.donne.address

    })
    
    this.router.navigate(['entreprises_postules'])
   

  }
 
 

}
export class ListItemClass{
  $key:string;
  title:string;
  secteur:string;
  description:string;
  date_creation:string;
  date_debut:string;
  date_fin:string;
  image:string

}

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-appel-offre',
  templateUrl: './creer-appel-offre.component.html',
  styleUrls: ['./creer-appel-offre.component.css']
})
export class CreerAppelOffreComponent implements OnInit {
 
  itemList:AngularFireList<any>

  data={
    title:'',
    secteur:'',
    description:'',
    date_creation:'',
    date_limite:'',
    autorite:'',
    image:''
  }
  constructor(public db:AngularFireDatabase, public router:Router) { 
    this.itemList=db.list('creer_appel_offre')
  }

  ngOnInit() {
  }

  insertOffre(){
    this.itemList.push({
    title:this.data.title,
    secteur:this.data.secteur,
    description:this.data.description,
    date_creation:this.data.date_creation,
    date_limite:this.data.date_limite,
    autorite:this.data.autorite,
    image:this.data.image
    
    })

    this.router.navigate(['liste_appel_offre'])
   

  }

}

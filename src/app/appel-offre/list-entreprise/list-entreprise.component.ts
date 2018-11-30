import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.component.html',
  styleUrls: ['./list-entreprise.component.css']
})
export class ListEntrepriseComponent implements OnInit {
  itemListEntreprise:AngularFireList<any>
  itemArray=[]


  constructor(public db:AngularFireDatabase, public router:Router) {
    this.itemListEntreprise=db.list('entreprises_postules')

    this.itemListEntreprise.snapshotChanges()
    .subscribe(actions=>{
      actions.forEach(action=> {
        let y=action.payload.toJSON()
        y["$key"]=action.key
        this.itemArray.push(y as ListItemClass)
        
      }); 
    })
   }

  ngOnInit() {
  }

}
export class ListItemClass{
  $key:string;
  title:string;
  image:string;
  nom:string;
  address:string
}
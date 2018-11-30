import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CreerAppelOffreComponent } from './appel-offre/creer-appel-offre/creer-appel-offre.component';
import { ListEntrepriseComponent } from './appel-offre/list-entreprise/list-entreprise.component';
import { ListAppelOffreComponent } from './appel-offre/list-appel-offre/list-appel-offre.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {
      path:'',
      redirectTo:'home',
      pathMatch:'full'
  },
  {
    path:'creer-appel-offre',
    component:CreerAppelOffreComponent
},
{
    path:'entreprises_postules',
    component:ListEntrepriseComponent
},
{
    path:'liste_appel_offre',
    component:ListAppelOffreComponent
},
{
    path:'home',
    component:HomeComponent
},





  
    ];
    
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
  })
  
  export class AppRoutingModule {
  
  }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule  } from 'angularfire2/database';
import { AngularFireModule  } from 'angularfire2';
import { environment  } from '../environments/environment';
import { AngularFireAuthModule  } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { SliderComponent } from './navigation/slider/slider.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreerAppelOffreComponent } from './appel-offre/creer-appel-offre/creer-appel-offre.component';
import { AppRoutingModule } from './app-routing';
import { ListAppelOffreComponent } from './appel-offre/list-appel-offre/list-appel-offre.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { ListEntrepriseComponent } from './appel-offre/list-entreprise/list-entreprise.component';
import { HomeComponent } from './home/home.component';
import { PostulerComponent } from './appel-offre/postuler/postuler.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SliderComponent,
    SigninComponent,
    RegisterComponent,
    CreerAppelOffreComponent,
    ListAppelOffreComponent,
    FooterComponent,
    ListEntrepriseComponent,
    HomeComponent,
    PostulerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from 'app/about/about.component';

import { RouterModule, Routes } from '@angular/router';
import { Http } from '@angular/http/src/http';
import { ContactsService } from 'services/contacts.Services';

const appRoutes :Routes=[

  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent},
  {path :'',redirectTo:'/about',pathMatch:'full'}
  


];
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  
  providers: [ContactsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

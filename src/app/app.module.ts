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
import { NewContactsComponent } from './new-contacts/new-contacts.component';
import { Contact } from 'model/contact.model';
import { NouveauContactsComponent } from './nouveau-contacts/nouveau-contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const appRoutes :Routes=[

  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent},
  {path : 'newcontacts',component:NewContactsComponent},
  {path : 'editContact/:id',component:EditContactComponent},
  {path : 'nouveaucontacts',component:NouveauContactsComponent},
  {path :'',redirectTo:'/about',pathMatch:'full'}
  


];
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactsComponent,
    NouveauContactsComponent,
    EditContactComponent
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
  
  providers: [ContactsService,Contact ],
  bootstrap: [AppComponent]
})
export class AppModule { }

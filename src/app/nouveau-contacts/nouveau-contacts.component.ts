import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'services/contacts.Services';
import { error } from 'selenium-webdriver';
import { Contact } from 'model/contact.model';

@Component({
  selector: 'app-nouveau-contacts',
  templateUrl: './nouveau-contacts.component.html',
  styleUrls: ['./nouveau-contacts.component.css']
})
export class NouveauContactsComponent implements OnInit {

  lastname:string=''
  firstname:string=''
  email:string=''
  photo:string=''
  contact :Contact = new Contact();
  constructor(public contactsService:ContactsService) { }

  ngOnInit() {
   
  }


  onSaveContact(dataForm){
    this.contactsService.doSave(this.lastname,this.firstname,this.email,this.photo,this.contact)
    .subscribe(data => {this.contact=data},error=>{console.log(error)})

 console.log(this.contact)
  }


  // enrigistre(){


  // }

}

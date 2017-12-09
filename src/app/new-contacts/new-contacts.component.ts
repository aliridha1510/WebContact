import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { error } from 'util';
import { ContactsService } from 'services/contacts.Services';
import { Contact } from 'model/contact.model';
@Component({
  selector: 'app-new-contacts',
  templateUrl: './new-contacts.component.html',
  styleUrls: ['./new-contacts.component.css']
})
export class NewContactsComponent implements OnInit {
 // contact:Contact = new Contact();
   mode='new';
   lastname:string=''
   firstname:string=''
   email:string=''
   photo:string=''
   contact :Contact = new Contact();
   


  constructor(public http : Http , public  contactsService :ContactsService) { }
 
  ngOnInit() {


  }

 
  saveContact(){
    this.contactsService.doSave(this.lastname,this.firstname,this.email,this.photo,this.contact)
    .subscribe(data =>{this.mode='confirm',this.contact=data}
    ,error=>{console.log(error)})
   
    console.log(this.contact)

    
    console.log(this.email)
  }


  newContact(){
    this.contact=this.contact;
    
    this.mode='new';
   console.log(this.mode)
   console.log(this.email)
    
  }

  

  

}

import { Component, OnInit } from '@angular/core';
import { Contact } from 'model/contact.model';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { ContactsService } from 'services/contacts.Services';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  mode='new';
  contact :Contact = new Contact();
  Currentid:number
  constructor(public activitedRouter:ActivatedRoute, public contactsService: ContactsService) {

   // console.log(activitedRouter.snapshot.params['id'])
    this.Currentid=activitedRouter.snapshot.params['id']
    
    
   }

  ngOnInit() {
    this.contactsService.doUpdate(this.Currentid).subscribe(data =>{ this.contact=data},error=>{
      console.log(error)
           })
      
    
  }
  updateContact(){

    this.contactsService.doSaveUpdate(this.contact).subscribe(data =>{
      alert("Modifiaction this Contact")
     })
    
 
  }
}
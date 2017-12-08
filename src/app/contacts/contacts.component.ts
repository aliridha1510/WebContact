import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { error } from 'util';
import { ContactsService } from 'services/contacts.Services';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})


export class ContactsComponent implements OnInit {
 
  pagecontacts: any
  
  
  constructor(public http:Http , public contactsService :ContactsService) { }



  ngOnInit() {
    this.contactsService.getAllContacts().subscribe(data =>{ this.pagecontacts =data;},err =>{
      console.log(err)
    })
  }

}

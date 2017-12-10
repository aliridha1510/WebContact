import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { error } from 'util';
import { ContactsService } from 'services/contacts.Services';
import { Contact } from 'model/contact.model';
import { Window } from 'selenium-webdriver';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})


export class ContactsComponent implements OnInit {
 
 currentpage :number=0;
  pagecontacts: any
  motcle:String="www";
  page:number =0;
  size:number=4;
  pages :Array<number>;
  constructor(public http:Http , public contactsService :ContactsService,public router:Router) { }

  ngOnInit() {
  
  }

  doSearch(){

    this.contactsService.getAllContacts(this.motcle,this.currentpage,this.size)
    .subscribe(data =>{ 
      this.pagecontacts =data;
      this.pages = new Array(data.totalPages)
      console.log(data)
    },err =>{
      console.log(err)
    })
    
  }

  recherche(){
    this.doSearch();
    console.log(this.motcle)
  }


  gotoPage(i:number){
    this.currentpage=i;
    this.doSearch();
    console.log(i);
  }


  onDelete(c:Contact){

    let confirm=window.confirm("Sind Sie Sicher ???");
this.contactsService.doDeleteContact(c.id)
.subscribe(data =>
  this.pagecontacts.content.splice(this.pagecontacts.content.indexOf(c),1)),error=>{ console.log(error)}
console.log(this.pagecontacts)
// console.log(this.data)

  }



  onEditContact(id:number){

    this.router.navigate(['editContact',id]);
    console.log(2222222222222)

  }



}

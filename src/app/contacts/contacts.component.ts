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
 
 currentpage :number=0;
  pagecontacts: any
  motcle:String="";
  page:number =0;
  size:number=4;
  pages :Array<number>;
  constructor(public http:Http , public contactsService :ContactsService) { }



  ngOnInit() {
  
  }

  doSearch(){

    this.contactsService.getAllContacts(this.motcle,this.currentpage,this.size)
    .subscribe(data =>{ 
      this.pagecontacts =data;
      this.pages = new Array(data.totalPages)
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
}

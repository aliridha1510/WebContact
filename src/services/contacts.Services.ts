import { Injectable } from "@angular/core";
import { Http } from "@angular/http/src/http";



import "rxjs/add/operator/map";
import { Contact } from "model/contact.model";



@Injectable()
export class ContactsService {

    constructor(public http :Http){

    }

    getAllContacts(motcle:String,page:number,size:number){
        return this.http.get("http://localhost:8080/serachcontacts?/mc="+motcle+"&page="+page+"&size="+size)
        .map(resp => resp.json())
    }
    doSave(lastname:String ,firstname:String,email:String,photo:String,contact:Contact){
         return this.http.post("http://localhost:8080/saveContacts?lastname="+lastname+"&firstname="+firstname+"&email="+email+"&photo="+photo+"",contact)
            .map(resp => resp.json())
            
          }

    doDeleteContact(id:number){
                return this.http.delete("http://localhost:8080/deletecontacts/"+id)
                .map(resp => resp.json())
        
            }

  doUpdate(id:number){
    return this.http.get("http://localhost:8080/contactsEditer/"+id)
    .map(resp => resp.json())
  }


  doSaveUpdate(contact:Contact){
    return this.http.put("http://localhost:8080/contactsUpdate/",+contact.id)
    .map(resp => resp.json())
  }

}
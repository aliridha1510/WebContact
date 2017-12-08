import { Injectable } from "@angular/core";
import { Http } from "@angular/http/src/http";






@Injectable()
export class ContactsService {

    constructor(public http :Http){

    }


    getAllContacts(){

        return this.http.get("http://localhost:8080/serachcontacts")
        .map(resp => resp.json())
    }


}
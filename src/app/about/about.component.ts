import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {



  Info ={name :"ali ridha haouari",mail:"aliridha.haouari@gmail.com"};

  comments =[];
  comment ={date:null,message:''}
  constructor() { }

  ngOnInit() {
  }


  addCommet(){
    if(this.comment.message!=null){
      this.comment.date = new Date();
      this.comments.push({date:this.comment.date,message:this.comment.message});
      this.comment.message='';
    }
    console.log(this.comments)
  }


}

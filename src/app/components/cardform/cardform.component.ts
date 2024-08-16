import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";


@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.scss']
})
export class CardformComponent implements OnInit {
  leaveForm!:FormGroup
  startdate!:number;
  enddate!:number;
  noOfdays!:number;
  approve:boolean=false
  reject:boolean=false

  constructor(private _rout:Router,private _router:ActivatedRoute,private _loginservice:LoginService) { }
  ngOnInit(): void {
    this.createLeaveForm()
    console.log(this.createLeaveForm);
    
  }

  

createLeaveForm(){
this.leaveForm =new FormGroup({
  fName : new FormControl(null,[Validators.required]),
  startDate : new FormControl(null,[Validators.required]),
  endDate : new FormControl(null,[Validators.required]),
  reason : new FormControl(null,[Validators.required])
})
}

onleaveSubmit(){

let obj = this.leaveForm.value;
console.log(obj);
this.startdate=obj.startDate.getDate();
this.enddate=obj.endDate.getDate()
this.noOfdays=this.enddate-this.startdate
let allobj={...obj, numberOfdays:this.noOfdays,isApproved:this.approve,isRejected:this.reject}

this._loginservice.httpcreate(allobj).subscribe(res=>{
  console.log(res);
  this._loginservice.subdata$.next(allobj)
  
  
  
})
this._rout.navigate(['hodlogin'])
this.leaveForm.reset()



}


}
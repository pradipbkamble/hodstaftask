import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Iform } from 'src/app/interface/objinterface';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';
import { UserautheService } from 'src/app/services/userauthe.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  forminputs!:FormGroup;
  formregister!:FormGroup;
  islogin:boolean=false;
  loginarr!:Array<any>
  arryform!:any;
  staf=['staff','HOD']
  constructor(private _rout:Router, private _authser:AuthService, private _loginserv:LoginService, private _user:UserautheService) { }

  ngOnInit(): void {
    this._loginserv.formhttpfetchall().subscribe(res=>{
      console.log(res);
      this.arryform=res
    })
    
    this.regincon();
    this.logincon()
  }
logincon(){
  this.forminputs=new FormGroup({
    status:new FormControl(null),
    username:new FormControl(null),
    password:new FormControl(null),
    
  })
}
regincon(){
  this.formregister=new FormGroup({
    username:new FormControl(null),
    Lname:new FormControl(null),
    gmail:new FormControl(null),
    contact:new FormControl(null),
    department:new FormControl(null),
    status:new FormControl(null)
    
  })
}








  loginform(){


    let obj=this.forminputs.value
this.loginarr=this.arryform.filter((res:any)=>{
if(res.username===obj.username && res.status===obj.status){
  this._authser.islogin(obj.status)
  console.log(obj);
  console.log("loginsuccess");
  console.log(this.loginarr);
  
  
}
else{
  console.log("login not sucess");
  
}


})

this._user.userlogin(obj.username,obj.status).subscribe(res=>{
console.log(res);

})
  }

  signinform(){
    
let objs=this.formregister.value
console.log(objs);
this._loginserv.formhttpcreate(objs).subscribe(res=>{
  console.log(res);
  this.formregister.reset()
}  
)
  }
}

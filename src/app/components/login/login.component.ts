import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Iform } from 'src/app/interface/objinterface';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  forminputs!:FormGroup;
  formregister!:FormGroup;
  islogin:boolean=false;
  arryform!:Array<Iform>;
  staf=['staff','HOD']
  constructor(private _rout:Router, private _authser:AuthService, private _loginserv:LoginService) { }

  ngOnInit(): void {
    this._loginserv.formhttpfetchall().subscribe(res=>{
      console.log(res);
      
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
    name:new FormControl(null),
    Lname:new FormControl(null),
    gmail:new FormControl(null),
    contact:new FormControl(null),
    department:new FormControl(null),
    status:new FormControl(null)
    
  })
}








  loginform(){
    let obj=this.forminputs.value
this._authser.islogin(obj.status)
console.log(obj);
this._rout.navigate(["dashboard"])
  }

  signinform(){
let objs={...this.formregister.value}
console.log(objs);
this._loginserv.formhttpcreate(objs).subscribe(res=>{
  console.log(res);
  
}
 
  
)


  }
}

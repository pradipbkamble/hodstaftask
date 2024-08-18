import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isloginstatus:boolean=false
private loginsub$:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
$loginsubject=this.loginsub$.asObservable()
  constructor(private _rout:Router) {
    localStorage.setItem("Token","JWT-Token")
   }

  isothenticated():Promise<any>{
return new Promise((resolve,resject)=>{
  setTimeout(() => {
    if(localStorage.getItem("Token")){
this.isloginstatus=true
    }
    else{
      this.isloginstatus=false
      this.loginsub$.next(false)
      this._rout.navigate([''])
    }
    resolve(this.isloginstatus)
  }, 1000);
})
  }

islogin(roleuser:any){
  this.isloginstatus=true
  if(roleuser=="staff"){
localStorage.setItem("UserRole","staff")
console.log(localStorage.setItem("UserRole","staff"));

this.loginsub$.next(true)
this._rout.navigate(['dashboard'])
  }
  else if(roleuser=="HOD"){
    localStorage.setItem("UserRole","HOD")
    console.log(localStorage.setItem("UserRole","HOD"));
    
    this.loginsub$.next(true)
    this._rout.navigate(['dashboard'])
      }
}


}

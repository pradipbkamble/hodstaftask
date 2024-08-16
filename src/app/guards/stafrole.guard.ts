import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StafroleGuard implements CanActivate {
  constructor(private _rout:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userrole:string=localStorage.getItem("UserRole")!
let userarey= route.data['UserRole']

if(userarey.includes(userrole)){
  return true
}
else{
  let urlTree:UrlTree=this._rout.createUrlTree([""]);
  return urlTree
}
  }
  
}

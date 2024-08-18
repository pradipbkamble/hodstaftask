import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserautheService {
loginurl=`${environment.baseurl}/login.json`
tokankey=`auth-Token`
  constructor(private _http:HttpClient) { }
userlogin(username:string, status:string){
return this._http.post<any>(this.loginurl, {username,status})
.pipe(
  tap((res: any)=>{
    console.log(res);
    
  })
)
}


}

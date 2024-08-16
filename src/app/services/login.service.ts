import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { Iform, Iproject } from '../interface/objinterface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 leaveurl=`${environment.baseurl}/staff.json`
 formurl=`${environment.baseurl}/form.json`
 
 leavesubject$:Subject<boolean>=new Subject<boolean>()
 countsub$:Subject<Iproject[]>=new Subject<Iproject[]>()
 idsubject$:Subject<string>=new Subject<string>()
  subdata$:Subject<Iproject>=new Subject<Iproject>()
  constructor( private _http:HttpClient) { }


httphodfetchall(){
return this._http.get(this.leaveurl).pipe(
  map((res : any) =>{
    let leaveInfo : Array<Iproject>= [];
   for (const key in res) {
   leaveInfo.push({...res[key], id : key})
   console.log(leaveInfo);
   console.log(res);
   
   };
   return leaveInfo
  })
  
)
}
formhttpfetchall(){
  return this._http.get(this.formurl).pipe(
    map((res:any)=>{
      let formarray:Array<Iform>=[]
      for(const key in res){
formarray.push({...res[key],id:key})
console.log(formarray);
console.log(res)


      }
      return formarray
    })
  )
}


Idforapproval(obj:Iproject):Observable<any>{

  const forid=`${environment.baseurl}/staff/${obj.id}.json`
return this._http.get<any>(forid)
}



httpcreate(obj:Iproject){
  return this._http.post(this.leaveurl,obj)
}

formhttpcreate(formobj:Iform){
  console.log("callll");
  
  return this._http.post<Iform>(this.formurl,formobj)

}


httpupdate(updobj:Iproject){
  return this._http.patch(`${environment.baseurl}/staff/${updobj.id}.json`, updobj)
}


}

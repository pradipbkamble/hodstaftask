import { DialogConfig } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';

import { Iproject } from 'src/app/interface/objinterface';
import { LoginService } from 'src/app/services/login.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-hod-login',
  templateUrl: './hod-login.component.html',
  styleUrls: ['./hod-login.component.scss']
})
export class HodLoginComponent implements OnInit {
  objsarray!: Array<Iproject>
  show!: boolean
  isloginid!: string
  objid!: string
  displayres!: string
  totalcount:number=0
  
approvecount:number=0
rejectcount:number=0
  constructor(private _loginservice: LoginService, private _route:Router) {
    
  }

  ngOnInit(): void {
    this.createcall()
    this._loginservice.subdata$.subscribe(res1=>{
      console.log(res1);
      if(res1){
        this.createcall()
      }
        // this.objsarray.push(res1)
      
      
    })
    
    
    
  }
createcall(){
  this._loginservice.httphodfetchall().subscribe(res => {
    this.objsarray = res

    console.log(res);
    console.log(this.objsarray);
  })
}




  isreject(objs: Iproject) {
    console.log(objs.id);
   let getindex=this.objsarray.findIndex(res=>res.id===objs.id)
console.log(getindex);
this.objsarray[getindex].isRejected=true
console.log(this.objsarray[getindex]);
this._loginservice.httpupdate(this.objsarray[getindex]).subscribe(res=>{
  console.log(res);
  this._loginservice.countsub$.next(this.objsarray)
  
  
})
this._route.navigate(['count'])
  }

  isaccept(objs: Iproject) {
   let getindex=this.objsarray.findIndex(res=>res.id===objs.id)
   this.objsarray[getindex].isApproved=true
   this._loginservice.httpupdate(this.objsarray[getindex]).subscribe(res=>{
    console.log(res);
    this._loginservice.countsub$.next(this.objsarray)
    
   })
this._route.navigate(['count'])
  }


}
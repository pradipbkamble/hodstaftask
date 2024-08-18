import { Component, OnInit } from '@angular/core';
import { Iform } from 'src/app/interface/objinterface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent implements OnInit {
  objsof!:Array<Iform>
  constructor(private _loginser:LoginService) { }

  ngOnInit(): void {
    this._loginser.formhttpfetchall().subscribe(res=>{
      console.log(res);
      this.objsof=res
    })
  }

}

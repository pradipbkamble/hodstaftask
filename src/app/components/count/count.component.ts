import { Component, OnInit } from '@angular/core';
import { Iproject } from 'src/app/interface/objinterface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
  totalcount: number = 0

  approvecount: number = 0
  rejectcount: number = 0
  objsarray!: Array<Iproject>;
  constructor(private _loginser:LoginService) { }
  datecount!:any
  ngOnInit(): void {
    this.chekaccrej()
    this._loginser.httphodfetchall().subscribe(res => {
      console.log(res);
      this.objsarray = res
this._loginser.subdata$.subscribe(res=>{
  console.log(res);
  
})
      this.count()
    })
    
  }
  count() {
    this.totalcount = this.objsarray.length
    this.approvecount = this.objsarray.filter((res: Iproject) => res.isApproved).length
    console.log(this.approvecount);

    this.rejectcount = this.objsarray.filter((res: Iproject) => res.isRejected).length
  }


  chekaccrej() {
    this._loginser.countsub$.subscribe(res => {
      console.log(res);
      this.totalcount = res.length
      this.approvecount = res.filter((res: Iproject) => res.isApproved).length
      console.log(this.approvecount);

      this.rejectcount = res.filter((res: Iproject) => res.isRejected).length
    })

  }

}

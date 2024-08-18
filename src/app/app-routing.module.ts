import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardformComponent } from './components/cardform/cardform.component';
import { HodLoginComponent } from './components/hodlogin/hod-login/hod-login.component';
import { LoginComponent } from './components/login/login.component';
import { CountComponent } from './components/count/count.component';
import { AuthGuard } from './guards/auth.guard';
import { StafroleGuard } from './guards/stafrole.guard';
import { UserdataComponent } from './components/userdata/userdata.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
path:"userdata",
data:{
  UserRole:["HOD"]
},
canActivate:[AuthGuard,StafroleGuard],
component:UserdataComponent
  },
  {
    path:"dashboard",
    data:{
      UserRole:["staff","HOD"]
    },
    canActivate:[AuthGuard,StafroleGuard],
    component:DashboardComponent
  },
  {
    path:"count",
    data:{
      UserRole:["HOD"]
    },
    canActivate:[AuthGuard,StafroleGuard],
    component:CountComponent
  },
  {
    path:'applylive',
    component:CardformComponent
  },
  {
    path:"hodlogin",
    data:{
      UserRole:["HOD"]
    },
    canActivate:[AuthGuard,StafroleGuard],
    component:HodLoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

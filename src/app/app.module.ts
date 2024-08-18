import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HodLoginComponent } from './components/hodlogin/hod-login/hod-login.component';
import { StafLoginComponent } from './components/staf-login/staf-login.component';
import { CardformComponent } from './components/cardform/cardform.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CountComponent } from './components/count/count.component';
import { UserdataComponent } from './components/userdata/userdata.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HodLoginComponent,
    StafLoginComponent,
    CardformComponent,
    DashboardComponent,
    CountComponent,
    UserdataComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,MatFormFieldModule,MatCardModule,MatDialogModule,MatListModule,MatDatepickerModule,MatNativeDateModule,MatIconModule,
    HttpClientModule,MatDialogModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

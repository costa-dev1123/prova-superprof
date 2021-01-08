import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import {NoAccessComponent} from './components/no-access/no-access.component';
import {AuthGuardService} from './services/auth-guard.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
const routes:Routes = [
  {path:'', component:HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'no-access', component: NoAccessComponent},
  {path:'**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

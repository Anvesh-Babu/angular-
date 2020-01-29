import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MediaComponent } from './media/media.component';
import { AuthguardserviceService } from './service/authguardservice.service';
import { ErrorComponent } from './error/error.component';


// array of Route objects
// each route object holds the relation between url and component
const routes: Routes = [
    // Route object
    { path:"", redirectTo : "home", pathMatch: "full"},
    { path:"home", component: HomeComponent},
    { path:"contactus", component: ContactComponent},
    { path:"aboutus", component: AboutComponent},
    { path:"login", component: LoginComponent},
    { path:"logout", component: LogoutComponent,canActivate : [AuthguardserviceService]},
    { path:"media", component: MediaComponent ,canActivate :[AuthguardserviceService]},
    {path:"**", component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // registering routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { FormComponent } from './Component/form/form.component';
import { UserService } from './Service/user.service';
import { NgxUiLoaderModule } from 'ngx-ui-loader'
import { ToastService, AngularToastifyModule } from 'angular-toastify';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxUiLoaderModule, 
    AngularToastifyModule
  ],
  providers: [UserService,ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }

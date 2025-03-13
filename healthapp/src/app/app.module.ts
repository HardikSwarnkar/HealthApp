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
import { AdditionalInfoComponent } from './Component/additional-info/additional-info.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetGeminiDataComponent } from './Component/get-gemini-data/get-gemini-data.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormComponent,
    AdditionalInfoComponent,
    GetGeminiDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxUiLoaderModule, 
    AngularToastifyModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService,ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }

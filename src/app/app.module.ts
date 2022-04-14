import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedComponent } from './shared/shared.component';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SharedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule
],

  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorService } from './vendor.service';  
import { HttpClientModule } from '@angular/common/http';
import { NewvendorformComponent } from './newvendorform/newvendorform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material'; 
import { FormsModule } from '@angular/forms';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import {MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListVendorsComponent } from './list-vendors/list-vendors.component';

const appRoutes: Routes = [ {
  path: '',                     //default component to display
   component: ListVendorsComponent },       {
   path: 'addVendor',         //when vendors added 
   component: NewvendorformComponent
 },  
 {
path: 'editVendor/:_id',    // when vendors edited
component:NewvendorformComponent
 },
 {
   path: 'listVendors',       //when vendors listed
   component: ListVendorsComponent
 },       {
   path: '**',                 //when path cannot be found
   component: NotFoundComponent
 }
];



@NgModule({
  declarations: [
    AppComponent,
    NewvendorformComponent,
    NavigationMenuComponent,
    NotFoundComponent,
    ListVendorsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [VendorService],
  bootstrap: [AppComponent]
})
export class AppModule { }


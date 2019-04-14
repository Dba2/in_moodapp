import { Component, OnInit,Input } from '@angular/core';
import { VendorService } from '../vendor.service'; 
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-newvendorform',
  templateUrl: './newvendorform.component.html',
  styleUrls: ['./newvendorform.component.css']
})
export class NewvendorformComponent implements OnInit {
  [x: string]: any;
  @Input() firstName: string;
  @Input() lastName: string;
  private mode = 'add'; //default mode
  private id: string; //vendor ID
  
  
  
  

onSubmit(){
  console.log("You submitted: " + this.firstName + " " + this.lastName );
  if(this.mode == 'add')
  this._myService.addVendors(this.firstName ,this.lastName);
if(this.mode == 'edit')
  this._myService.updateVendor(this.id,this.firstName ,this.lastName);

  this.router.navigate(['./listVendors'])
}

// initialize the call using VendorService
constructor(private_myService:VendorService,private router:Router,public route:ActivatedRoute) { }
ngOnInit(){
  this.route.paramMap.subscribe((paramMap: ParamMap ) => {
     if (paramMap.has('_id'))
       { this.mode = 'edit'; /*request had a parameter _id */ 
         this.id = paramMap.get('_id');}
     else {this.mode = 'add';
         this.id = null; }
   });
}
}



import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';  

@Component({
  selector: 'app-list-vendors',
  templateUrl: './list-vendors.component.html',
  styleUrls: ['./list-vendors.component.css']
})
export class ListVendorsComponent implements OnInit {
//declare variable to hold response and make it public to be accessible from components.html
public vendors;
//initialize the call using VendorService 
constructor(private _myService: VendorService) { }
ngOnInit() {
  this.getVendors();
}
//method called OnInit
getVendors() {
 this._myService.getVendors().subscribe(
    //read data and assign to public variable students
    data => { this.vendors = data},
    err => console.error(err),
    () => console.log('finished loading')
    
    
  );
  

}
onDelete(vendorId: string) {
  this._myService.deleteVendor(vendorId);

}
}

  
  



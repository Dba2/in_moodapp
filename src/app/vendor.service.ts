import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class VendorService {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data 
    getVendors() {
        return this.http.get('http://localhost:8000/vendors');
    }
    // Uses http.post() to post data 
    addVendors(firstName: string, lastName: string) {
        this.http.post('http://localhost:8000/vendors',{ firstName, lastName })
      .subscribe((responseData) => {
         console.log(responseData);
       }); 
       location.reload();
    }
    deleteVendor(vendorId: string) {
        this.http.delete("http://localhost:8000/vendors/" + vendorId)
          .subscribe(() => {
              console.log('Deleted: ' + vendorId);
          });
          location.reload();
      }

    

}

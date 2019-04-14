const express = require('express');
const app = express();

const mongoose = require('mongoose');
//specify where to find the schema
const Vendor = require('./models/vendor')
// connect and display the status 
mongoose.connect('mongodb://localhost:27017/IT6203', { useNewUrlParser: true })
  .then(() => { console.log("connected"); })
  .catch(() => { console.log("error connecting"); });
  const bodyParser  = require('body-parser');
// use the following code on any request that matches the specified mount path
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
   console.log('This line is always called');
   res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS,DELETE'); //allowable methods
   res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
   next();
   // serve incoming post requests to /vendors

 
});
app.get('/vendors', (req, res, next) => {
   //call mongoose method find (MongoDB db.Vendors.find())
  Vendor.find() 
  //if data is returned, send data as a response 
  .then(data => res.status(200).json(data))
  //if error, send internal server error
  .catch(err => {
  console.log('Error: ${err}');
  res.status(500).json(err);
});


  
    
//send the array as the response 
   res.json(vendors);
 // serve incoming post requests to /vendors
 app.post('/vendors', (req, res, next) => {
    // create a new vendor variable and save request’s fields 
  const vendor = new Vendor({
   firstName: req.body.firstName,
   lastName: req.body.lastName
 });
 //send the document to the database 
 vendor.save()
   //in case of success
   .then(() => { console.log('Success');})
   //if error
   .catch(err => {console.log('Error:' + err);
});
// serve incoming put requests to /vendors
app.put('/vendors/:id', (req, res, next) => {
  console.log("id: " + req.params.id)
  // check that the parameter id is valid 
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    //find a document and set new first and last names
    Vendor.findOneAndUpdate({_id: req.params.id},
      {$set:{firstName : req.body.firstName,
        lastName : req.body.lastName}},{new:true}) 
     .then((vendor) => {
        if (vendor) { //what was updated
          console.log(vendor);
        } else {
          console.log("no data exist for this id");
        }
     })
    .catch((err) => {
      console.log(err);
     });
 } else {
   console.log("please provide correct id");
 }
  
});  




//:id is a dynamic parameter that will be extracted from the URL
app.delete("/vendors/:id", (req, res, next) => {
   Vendor.deleteOne({ _id: req.params.id }).then(result => {
     console.log(result);
     res.status(200).json("Deleted!");
   });
 });
 

   const vendors = req.body;
   console.log(vendor.firstName + " " + vendor.lastName);
   //sent an acknowledgment back to caller 
   res.status(201).json('Post successful');
 
});

//to use this middleware in other parts of the application
module.exports=app;
})

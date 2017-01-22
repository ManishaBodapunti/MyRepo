import React, { Component } from 'react';
import {Link} from 'react-router';
// webpack.config.js specifies index.js as the entry point, and
// index.js imports and renders this `App` component.

class AddRest extends Component {
  constructor() {
    // In a constructor, call `super` first if the className extends another className
    super();
  }

  // `render` is called whenever the component's props OR state are updated.
  render() {
    // console.log('The App component was rendered')
 	 	return(
<div  className="container" >
 <div className="form-group row">
  <label for="example-text-input" className="col-2 col-form-label">Name</label>
  <div className="col-6">
    <input className="form-control" type="search" placeholder="Restaurant Name" id="example-text-input"/>
  </div>
</div>
<div className="form-group row">
  <label for="example-text-input" className="col-2 col-form-label">Area</label>
  <div className="col-6">
    <input className="form-control" type="search" placeholder="ex: Banjara Hills" id="example-search-input"/>
  </div>
</div>
<div className="form-group row">
  <label for="example-text-input" className="col-2 col-form-label">Address</label>
  <div className="col-6">
    <input className="form-control" type="search" placeholder="ex: Road 3,Banjara Hills, Hyderabad" id="example-search-input"/>
  </div>
</div>
 <div className="form-group row">
  <label for="example-text-input" className="col-2 col-form-label">cuisine</label>
  <div className="col-6">
    <input className="form-control" type="search" placeholder="ex: American, Desserts, Cafe" id="example-text-input"/>
  </div>
</div>
<div className="form-group row">
  <label for="example-text-input" className="col-2 col-form-label">Collection</label>
  <div className="col-6">
<select className="custom-select">
  <option selected>Open this select collection</option>
  <option value="1">Breakfast</option>
  <option value="2">Sunday Brunch</option>
  <option value="3">Fine Dine</option>
  <option value="3">Barbeque</option>
  <option value="3">Frozen Delight</option>
  <option value="3">Street Food</option>
</select>
</div>
</div>
<div className="form-group row">
  <label for="example-url-input" className="col-2 col-form-label">Home Page URL</label>
  <div className="col-6">
    <input className="form-control" type="url" placeholder="ex: http://www.hotelexample.com" id="example-url-input"/>
  </div>
</div>
<div className="form-group row">
  <label for="example-url-input" className="col-2 col-form-label">Facebook Page URL</label>
  <div className="col-6">
    <input className="form-control" type="url" placeholder="ex :https://www.facebook.com/exaple" id="example-url-input"/>
  </div>
</div>
<div className="form-group row">
  <label for="example-tel-input" className="col-2 col-form-label">Telephone</label>
  <div className="col-6">
    <input className="form-control" type="tel" placeholder="ex: 1-(555)-555-5555" id="example-tel-input"/>
  </div>
</div>
<div className="form-group row">
  <label for="example-text-input" className="col-2 col-form-label">Opening Hours</label>
  <div className="col-6">
    <input className="form-control" type="search" placeholder="ex: 9AM to 9PM" id="example-text-input"/>
  </div>
</div>
<div className="form-group row">
    <label for="exampleInputFile" className="col-2 col-form-label">Image</label>
    <div className="col-6">
       <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
       <small id="fileHelp" className="form-text text-muted">Browse Image file location </small>
    </div>
  </div>
<div className="form-group-row">
    <div className="col-6">
      <button type="button" className="btn btn-warning">Submit</button>
    </div>
</div>
</div>
 	 		 );
   }
 }

export default AddRest;
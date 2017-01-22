import React, { Component } from 'react';
import {Link} from 'react-router';
// webpack.config.js specifies index.js as the entry point, and
// index.js imports and renders this `App` component.

class ViewRest extends Component {
  constructor() {
    // In a constructor, call `super` first if the className extends another className
    super();
  }

  // `render` is called whenever the component's props OR state are updated.
  render() {
   return( // console.log('The App component was rendered')
 <ul className="list-unstyled">
  <li className="media">
    <img className="d-flex mr-3" src={require('./images/bf.jpg')} height="70px" width="90px" alt="Generic placeholder image"/>
    <div className="media-body">
      <h5 className="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
    <button type="button" className="btn btn-warning btn-sm">Update</button>&nbsp;<button type="button" className="btn btn-danger btn-sm">Delete</button>
  </li>
  <li className="media my-4">
    <img className="d-flex mr-3" src={require('./images/bf.jpg')} height="70px" width="90px" alt="Generic placeholder image"/>
    <div className="media-body">
      <h5 className="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
    <button type="button" className="btn btn-warning btn-sm">Update</button>&nbsp;<button type="button" className="btn btn-danger btn-sm">Delete</button>
  </li>
  <li className="media">
    <img className="d-flex mr-3" src={require('./images/bf.jpg')} height="70px" width="90px" alt="Generic placeholder image"/>
    <div className="media-body">
      <h5 className="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
    <button type="button" className="btn btn-warning btn-sm">Update</button>&nbsp;<button type="button" className="btn btn-danger btn-sm">Delete</button>
  </li>
</ul>
);
   }
 }

export default ViewRest;
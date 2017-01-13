import React, { Component } from 'react';
import { Link } from 'react-router';

class Collection extends Component {
  constructor() {
    // In a constructor, call `super` first if the classNameName extends another classNameName
    super();
  }

  // `render` is called whenever the component's props OR state are updated.
  render() {

    let collections = [
    {
     name:'Sunday Brunch',
     image:require('./images/sb.jpg')

   },
   {
    name:'Frozen Delight',
    image:require('./images/fd1.jpg')
  },
  {
    name:'Street Food',
    image:require('./images/street1.jpg')
  },
  {
    name:'Fine Dine',
    image:require('./images/dinner.jpeg')
  },
  {
    name:'Barbeque & Grills',
    image:require('./images/bb.jpg')
  },
  {
    name:'Breakfast',
    image:require('./images/bf.jpg')
  }
  ]
return (
  <div id="tf-collection">
        <div className="container"> 

            <div className="section-title text-center center">
                <h2>Take a look at our <strong>Collections</strong></h2>
                <div className="line">
                    <hr />
                </div>
                <div className="clearfix"></div>
                
            </div>
            <div className="space"></div>

            <div id="lightbox" className="row">

                <div className="col-sm-6 col-md-4 col-lg-4 branding">
                    <div className="portfolio-item">
                        <div className="hover-bg">
                            <Link to="/home">
                                <div className="hover-text">
                                    <h4>Sunday Brunch</h4>
                                    
                                    <div className="clearfix"></div>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <img src={require('./images/sb.jpg')} className="img-responsive" alt="..." />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4 photography app">
                    <div className="portfolio-item">
                        <div className="hover-bg">
                            <Link to="/home">
                                <div className="hover-text">
                                    <h4>Frozen Delight</h4>
                                    
                                    <div className="clearfix"></div>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <img src={require('./images/fd1.jpg')} className="img-responsive" alt="..." />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4 branding">
                    <div className="portfolio-item">
                        <div className="hover-bg">
                            <Link to="/home">
                                <div className="hover-text">
                                    <h4>Best Breakfast</h4>
                                    
                                    <div className="clearfix"></div>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <img src={require('./images/bf.jpg')} className="img-responsive" alt="..." />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4 branding">
                    <div className="portfolio-item">
                        <div className="hover-bg">
                            <Link to="/home">
                                <div className="hover-text">
                                    <h4>Fine Dine</h4>
                                    
                                    <div className="clearfix"></div>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <img src={require('./images/dinner.jpeg')} className="img-responsive" alt="..." />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4 web">
                    <div className="portfolio-item">
                        <div className="hover-bg">
                            <Link to="/home">
                                <div className="hover-text">
                                    <h4>Barbeque n Grill</h4>
                                    
                                    <div className="clearfix"></div>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <img src={require('./images/bb.jpg')} className="img-responsive" alt="..." />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4 app">
                    <div className="portfolio-item">
                        <div className="hover-bg">
                            <Link to="/home">
                                <div className="hover-text">
                                    <h4>Street Food</h4>
                                    
                                    <div className="clearfix"></div>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <img src={require('./images/street1.jpg')} className="img-responsive" alt="..." />
                            </Link>
                        </div>
                    </div>
                </div>

                

            </div>
        </div>
    </div>

 );
 }
}
export default Collection;



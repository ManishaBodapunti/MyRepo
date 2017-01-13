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

            <div id="lightbox" className="row">{
              collections.map(function(item, index){
               return (
                <div className="col-sm-6 col-md-4 col-lg-4 branding">                   
                    <div className="portfolio-item">
                        <div className="hover-bg">
                            <Link to="/home">
                                <div className="hover-text">
                                    <h4>{item.name}</h4>
                                    
                                    <div className="clearfix"></div>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <img src={item.image} className="img-responsive" alt="..." />
                            </Link>
                        </div>
                    </div>
                  </div>)
                })
              }
                
            }
                
                

            </div>
        </div>
    </div>

 );
 }
}
export default Collection;



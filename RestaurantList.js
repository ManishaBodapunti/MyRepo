import React, { Component } from 'react';
import { Link } from 'react-router';


class RestaurantList extends Component {
  constructor() {
    // In a constructor, call `super` first if the classNameNameNameName extends another classNameNameNameName
    super();
  }

  // `render` is called whenever the component's props OR state are updated.
  render() {
    // console.log('The App component was rendered')
  return (
      <div>
        <div className="alert alert-warning" role="alert">
         <h2><strong> Sunday Bruches</strong></h2>
        </div>
        <div className ="card-deck">
           <div className="card card-outline-warning mb-3 text-center" >
            <img className="card-img-left" src={require('./images/bf.jpg')} alt="Card image cap"/>
            <Link to="/near">
                <div className="card-block">
                    <h5 className="card-subtitle">Olive Bistro</h5>
                    <p className="card-text">Mediterranean, Italian, European</p>
                    <p className="card-text">Jubilee Hills</p>
                </div>     
           </Link>
           </div>
           
            <div className="card card-outline-warning mb-3 text-center" >
                <img className="card-img-top" src={require('./images/bf.jpg')} alt="Card image cap"/>
                <Link to="#">
                <div className="card-block">
                    <h5 className="card-subtitle">Feast- Sheraton Hotel</h5>
                    <p className="card-text">North Indian, South Indian, Chinese</p>
                    <p className="card-text">Gachibowli</p>
                </div>
            </Link>
             </div>
            <div className="card card-outline-warning mb-3 text-center" >
                <img className="card-img-top" src={require('./images/bf.jpg')} alt="Card image cap"/>
                <Link to="#">
                <div className="card-block">
                    <h5 className="card-subtitle">Mekong-Marigold</h5>
                    <p className="card-text">Chinese, Thai, Burmese, Vietnamese, Tibetan, Japanese</p>
                    <p className="card-text">Begumpet</p>
                </div>
            </Link>
            </div>
              
            <div className="card card-outline-warning mb-3 text-center" >
                <img className="card-img-top" src={require('./images/bf.jpg')} alt="Card image cap"/>
            <Link to="#">  
                <div className="card-block">
                    <h5 className="card-subtitle">Exotica</h5>
                    <p className="card-text">Mughlai, North Indian, Chinese</p>
                    <p className="card-text">Banjara Hills</p>
            </div>
            </Link>
            </div>
            
            <div className="card card-outline-warning mb-3 text-center" >
                <img className="card-img-top" src={require('./images/bf.jpg')} alt="Card image cap"/>
                <Link to="#">
                <div className="card-block">
                    <h5 className="card-subtitle">Prego-The Westin</h5>
                    <p className="card-text">Italian</p>
                    <p className="card-text">Madhapur</p>
                
            </div>  
            </Link> 
          </div>     
        </div>

    </div>
    

              


    );
    
   }
 }

export default RestaurantList;
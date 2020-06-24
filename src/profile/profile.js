import React from 'react';
import propTypes from 'prop-types';
import '../App.css';


const user = (props) =>{
    console.log(props);
    return (
        <div> 
               <p className="Name">Name :<span> {props.x[0].fullName}</span> </p>
               <p className="bio">Bio : <span>{props.x[0].bio}</span></p>
               <p className="Profession"> Profession : <span>{props.x[0]. profession}</span></p>
               <img src={props.x[0].image}/>
        </div>
    )

}
export default user ;

user.propTypes ={
    Type :propTypes.string
  }
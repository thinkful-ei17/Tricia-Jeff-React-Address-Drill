import React from 'react';

import './contact.css';


// The Contact component goes here.  It should be the default export.

export default function Contact(props) {

    return (<div className = 'contact'>
              <h2 className = 'contact-name' > { props.name }</h2>  
              <img className = 'contact-photo'src = { props.photo }></img>
              <div className = 'contact-address' > { props.address }</div> 
            </div> 
          );
}
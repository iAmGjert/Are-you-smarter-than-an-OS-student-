import React from 'react';
import axios from 'axios';

export const App = () => {
  const persons = [];
  axios.get('/users')
    .then(()=>{
      //do stuff here
    });
  return (
    <div>
      <h1>We made it! { new Date().toString() }</h1>
    </div>
  );
};

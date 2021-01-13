import React from 'react';
import './App.css';
import Card from "./Card.js";

function App() {
  return (
    <div className="App">
   
    <Card
    title="Starter"
    price="0"
    service1="Centralized Teams"
    service2="Version History"
    service3="Plugin Adminstration"
    buttonname="Go Starter"
   
    />
    <Card
    title="Professional"
    price="25"
    service1="Centralized Teams"
    service2="Version History"
    service3="Plugin Adminstration"
    service4="Facebook & Instagram Ads"
    buttonname="Go Professional"

    
    />    
    <Card
    title="Organization"
    price="50"
    service1="Centralized Teams"
    service2="Version History"
    service3="Plugin Adminstration"
    service4="Facebook & Instagram Ads"
    service5="Design System Analytics"
    buttonname="Go Organization"
    />
     
    

      
    </div>
  );
}

export default App;

import React from 'react'; import { Image } from 'react-native';
 export default class SantaAnimation extends React.Component
 { render() 
  { return ( <Image source={require('../assets/Santa.png')}
  style={{width:"40%", height: "100%"}} /> ) } }
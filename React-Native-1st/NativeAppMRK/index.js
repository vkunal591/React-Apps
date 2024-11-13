/**
 * @format
 */

import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';



export default function index() {
  return (


  
      <App />
   


  );
}

AppRegistry.registerComponent(appName, () => index);

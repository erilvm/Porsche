
  import * as React from 'react';

  import {NavigationContainer} from '@react-navigation/native';

  import Navigation from './src/Navigation';
  
  export default function App() {
    // isAuthenticated = is...
    return (
      <NavigationContainer>
        {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
        <Navigation/>
      </NavigationContainer>
    );
  };


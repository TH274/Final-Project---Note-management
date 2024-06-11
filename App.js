import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import * as screens from './screens';
import { NotesProvider } from './context/context';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={screens.Home} options={{ headerShown: false }}/>
    <Stack.Screen name="NewNote" component={screens.NewNote} options={{ headerShown: false }} />
    <Stack.Screen name="EditNote" component={screens.EditNote} options={{ headerShown: false }}/>
  </Stack.Navigator>
);

const App = () => {
  return (
    <NotesProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="HomeStack">
          <Drawer.Screen name="HomeStack" component={HomeStack} options={{ title: 'Home' }} />
          <Drawer.Screen name="Labels" component={screens.LabelsScreen} />
          <Drawer.Screen name="Folders" component={screens.Folders} />
          <Drawer.Screen name="Trash" component={screens.Trash} /> 
        </Drawer.Navigator>
      </NavigationContainer>
    </NotesProvider>
  );
};


export default App;

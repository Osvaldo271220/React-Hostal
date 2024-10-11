import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import finalizar_pago from './screens/finalizar_pago';



// enrutamiento 
export default function App() {

  const Stack = createNativeStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="finalizar_pago"
          component={finalizar_pago}
          options={{
            title: 'Welcome',
            headerTitleAlign: 'center',
            headerStyle:{backgroundColor: 'red'},
            headerTintColor : 'black'
          }}
        />
        
      </Stack.Navigator>
    );
  }

  return (
    //contenedor de la navegacion
    <NavigationContainer>
        //funcion de navegacion entre paginas
        <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

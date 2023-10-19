import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';

const Stack = createStackNavigator();

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiURL = 'https://fakestoreapi.com/products';

    // Solicitud GET API
    axios
      .get(apiURL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='ProductList'
          options={{ title: 'Lista de productos' }}
        >
          {({ navigation }) => (
            <ProductList data={data} navigation={navigation} />
          )}
        </Stack.Screen>
        <Stack.Screen name='ProductDetail' component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

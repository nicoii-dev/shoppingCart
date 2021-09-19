import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ElectronicsScreen from "../screens/ElectronicsScreen";
import BooksScreen from "../screens/BooksScreen";
import ShoppingCartIcon from "../screens/ShoppingCartIcon";
import CartScreen from "../screens/CartScreen";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();


    function ShoppingCart(props) {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Electronics" component={ElectronicsScreen} />
                    <Stack.Screen name="Books" component={BooksScreen} 
                        options={({ navigation }) => ({
                            headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate("Cart")} > 
                                <ShoppingCartIcon/>
                            </TouchableOpacity>
                            ),
                        })}
                    />
                    <Stack.Screen name="Cart" component={CartScreen}     
                    />
                </Stack.Navigator>
          </NavigationContainer>
        );
      }
      
    export default ShoppingCart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
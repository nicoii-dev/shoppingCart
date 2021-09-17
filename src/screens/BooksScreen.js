import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,FlatList,TouchableOpacity
} from "react-native";

import Products from "../components/Products";
import { connect } from 'react-redux'
import { PROPERTY_TYPES } from "@babel/types";
// import { useDispatch } from 'react-redux';

// const dispatch = useDispatch();

const books = [
    {
        id: 4,
        name: 'How to Kill a Mocking Bird',
        price: 10
    },
    {
        id: 5,
        name: 'War of Art',
        price: 7
    },
    {
        id: 6,
        name: 'Relentless',
        price: 5.99
    }
]

function BooksScreen(){
        return (
            <View style={styles.container}>
                <FlatList
                    data={books}
                    keyExtractor = {(item) => item.id}
                    renderItem={({ item }) =>(
                        <TouchableOpacity
                            onPress={()=>mapDispatchToProps.addItemToCart(item)}
                        >
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
    
                    )}
                />
            </View>
        );

}

const mapDispatchToProps = (dispatch) =>{
    return {
        addItemToCart: item => dispatch({ type: 'ADD_TO_CART', payload: item })
    }
    
}

// function mapDispatchToProps(dispatch,item) {
//     console.log(item)
//     return {    
//         addItemToCart: item => dispatch({ type: 'ADD_TO_CART', payload: item })
//     }
// }

export default connect(null, mapDispatchToProps)(BooksScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
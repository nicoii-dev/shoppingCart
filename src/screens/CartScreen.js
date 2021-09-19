  
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
    ,FlatList,TouchableOpacity
} from "react-native";
import Products from '../components/Products'
import { connect } from 'react-redux'
import { REMOVE_FROM_CART } from "../redux/actionType";
import cartItems from "../redux/cartReducer";

function CartScreen(props){
    console.log(props.cartItems)
    return (
        <View>
            <FlatList 
                data={props.cartItems}
                keyExtractor = {(item) => item.id}
                renderItem={({ item }) =>(
                    <TouchableOpacity
                        onPress={()=>props.removeFromCart(item)}
                    >
                        <Text>{item.name}</Text>
                    </TouchableOpacity>

                )}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: item => dispatch({ type: REMOVE_FROM_CART, payload: item })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
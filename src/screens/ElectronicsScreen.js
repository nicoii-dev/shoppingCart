import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Products from "../components/Products";
import { connect } from 'react-redux'
import { ADD_TO_CART } from "../redux/actionType";

const electronics = [
    {
        id: 1,
        name: 'Fifa 19',
        price: 49.99
    },
    {
        id: 2,
        name: 'Amazon Echo',
        price: 199
    },
    {
        id: 3,
        name: 'Bose QC 35 Headphones',
        price: 300
    }
]

class ElectronicsScreen extends Component {

    
    static navigationOptions = {
        headerTitle: 'Electronics'
    }
    render() {
        return (
            <View style={styles.container}>
                <Products products={electronics} onPress={this.props.addItemToCart} />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: ADD_TO_CART, payload: product })
    }
}

export default connect(null, mapDispatchToProps)(ElectronicsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
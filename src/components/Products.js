import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { addToCart, removeFromCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

const Products = (props) => {

    const item = props.item;
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.reducer);
    const [isAdded, setIsAdded] = useState(false);

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item.id));
    }

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    }

    useEffect(() => {
        let result = cartItems.filter((ele) => {
            return ele.id === item.id
        });
        if(result.length) {
            setIsAdded(true);
        }
        else {
            setIsAdded(false);
        }
    },[cartItems]);

    return (
        <View style={styles.con}>
            <Text style={styles.text}>Company : {item.name}</Text>
            <Text style={styles.text}>Color : {item.color}</Text>
            <Text style={styles.text}>Price : Rs {item.price}</Text>
            <Image 
                source={{uri: item.image}} 
                style={styles.image}
            />
            {
                isAdded ? 
                    <TouchableOpacity 
                        style={[styles.btn, {backgroundColor: 'red'}]}
                        onPress={() => handleRemoveFromCart(item)}
                    >
                        <Text style={styles.btnText}>Remove to Cart</Text>
                    </TouchableOpacity> 
                :
                    <TouchableOpacity 
                        style={[styles.btn, {backgroundColor: 'blue'}]}
                        onPress={() => handleAddToCart(item)}
                    >
                        <Text style={styles.btnText}>Add to Cart</Text>
                    </TouchableOpacity>
            }
        </View>
    );
};

export default Products;

const styles = StyleSheet.create({
    con: {
        alignItems: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        padding: 10
    },
    text: {
        fontSize: 25
    }, 
    image: {
        height: 150,
        width: 150
    },
    btn: {
        // backgroundColor: 'blue',
        width: 120,
        height: 40,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
    }
});
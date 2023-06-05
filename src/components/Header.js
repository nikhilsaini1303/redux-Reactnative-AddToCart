import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {

    const cartData = useSelector((state) => state.reducer);
    const [cartItems, setCartItems] = useState(0);

    useEffect(() => {
        setCartItems(cartData.length);
    },[cartData]);

    return (
        <View style={styles.header}>
            <View style={styles.con}>
                <Text style={styles.text}>{cartItems}</Text>
            </View>
        </View>  
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'red',
        padding: 10,
        alignItems: 'flex-end',
        justifyContent: 'center'
        // height: 50
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    con: {
        height: 40,
        width: 40,
        backgroundColor: '#000',
        borderRadius: 20,
        
    }
});
import React from "react";
import {StyleSheet, View, Text} from "react-native";

const Header = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Ma Todo</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        border: 'solid',
        padding:16,
        justifyContent:'space-around',
    },
    text: {
        textAlign:"center",
    }
})


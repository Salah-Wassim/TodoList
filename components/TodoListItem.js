import React from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';

const TodoListItem = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text, props.done === true && styles.textDone}>{props.title}</Text>
            <Button title="X" onPress={() => {
                console.log("test", props.list)
                let list = [...props.list]; 
                list.splice(props.index, 1);
                props.setList(list);
            }}/>
            <Button style={styles.buttonTerminer} title="terminer" onPress={() => {
                let list = [...props.list];

                list[props.index].done = true;

                props.setList(list);
            }}/>
        </View>
    )
}                       

export default TodoListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'flex-end',
    },
    text: {
        borderStyle: 'solid',
        borderWidth:1,
        flex: 1,
    },
    textDone: {
        textDecorationLine: "line-through",
        textDecorationStyle: 'solid',
    },
    buttonTerminer: {
        
    }
    
})
import React, { useState } from 'react';
import {StyleSheet, View, Button, Text, TextInput, ProgressViewIOSComponent} from 'react-native';


const TodoAdd = (props) => {

    const [inputValue, setInputValue] = useState()

    return (
        <View style={styles.container}>
            <TextInput placeholder="Entrez une tâche" value={inputValue} onChangeText={(value) => {
                //console.log(value)
                setInputValue(value);
            }}/>
            <Button title="Valider" onPress={() => {
                let newList = [...props.list]

                newList.push({
                    title: inputValue,
                    done: false,
                });
                props.setList(newList)
                inputValue('')
            }}/>
        </View>
    )
}

export default TodoAdd;

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
    }
})
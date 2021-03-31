import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';

import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const Todo = () => {

    const[list, setList] = useState([
        {
            title: "Ranger les courses",
            done: false
        },
        {
            title: "Laver la voiture",
            done: false
        },
        {
            title: "Faire le ménage",
            done: false
        },
    ])

    return(
        <View style={styles.container}>
            <TodoList list={list} setList={setList}/>
            <TodoAdd list={list} setList={setList}/>
        </View>
    )
}

export default Todo;

const styles = StyleSheet.create({
    container: {

    }
})
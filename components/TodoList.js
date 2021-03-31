import React from 'react';
import {StyleSheet, View} from 'react-native';

import TodoListItem from './TodoListItem';

const TodoList = (props) => {
    return (
        <View style={styles.container}>
            {
                props.list.map((item, index) => {
                    return <TodoListItem title={item.title} done={item.done} index={index} list={props.list} setList={props.setList}/>
                })
            }
        </View>
    )   
}

export default TodoList;

const styles = StyleSheet.create({
    container: {
        
    }
})
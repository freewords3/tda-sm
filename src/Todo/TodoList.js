import React from 'react';
import TodoItem from './Todo/TodoItem';
import PropTypes from 'prop-types';

function TodoList(props) {
    const styles = {
        ul: {
            listStyle: 'none',
            margin: 0,
            padding: 0
        }
    }

    return (
        <ul style={styles.ul}>
            {props.todos.map((todo, index)=>{
                return (
                    <TodoItem 
                        todo={todo} 
                        index={index} 
                        key={todo.id} 
                        onChange={props.onToggle}
                    />
                )
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList
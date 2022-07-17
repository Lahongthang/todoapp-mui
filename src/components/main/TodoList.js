import {useSelector} from 'react-redux'
import TodoListItem from './TodoListItem'
import { selectTodoIds } from '../../features/todos/todosSlice'

import List from '@mui/material/List'

const TodoList = () => {
  const todosIds = useSelector(selectTodoIds)
  return (
    <List>
        {todosIds.map(todoId => (
          <TodoListItem key={todoId} id={todoId}/>
        ))}
    </List>
  )
}

export default TodoList
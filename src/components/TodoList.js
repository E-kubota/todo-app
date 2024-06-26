import { TodoTitle } from "./TodoTitle";

// TodoItem コンポーネントを import
import { TodoItem } from "./TodoItem";

// TodoList コンポーネントを作成
export const TodoList = ({ todoList, toggleTodoListItemStatus, deleteTodoListItem, title, as }) => {
  return (
    <>
      { todoList.length !== 0 && (
        <>
          <TodoTitle title = { title } as = { as } />
          <ul>
            {todoList.map((todo) => (
              <TodoItem
                todo = { todo }
                key = { todo.id }
                toggleTodoListItemStatus = { toggleTodoListItemStatus }
                deleteTodoListItem = { deleteTodoListItem }
              />
            ))}
          </ul>
        </>
      ) }
    </>
  )
}

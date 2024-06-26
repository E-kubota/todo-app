import { useRef } from "react";
import { useTodo } from "../hooks/useTodo";
import { TodoTitle } from "./TodoTitle";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";



function App() {

  // useTodo()カスタムフックで定義した todoList を利用する
  const {
    todoList,                   // TODO の現在の状態
    addTodoListItem,            // 新規TODOを追加する関数
    toggleTodoListItemStatus,   // done(完了/未完了)を反転させて更新する関数
    deleteTodoListItem          // TODO を削除する関数
  } = useTodo();

  //useRef で refオブジェクトを作成（TODO入力フォームで利用）
  const inputEl = useRef(null);

  // TODO入力フォームで入力された文字列を新しいTODOに登録するための handleAddTodoListItem 関数を宣言
  const handleAddTodoListItem = () => {
    if (inputEl.current.value === '') return;

    // テキストエリアに入力されたテキストを新規TODOとして追加
    // 追加したら、テキストエリアを空の文字列にする
    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  }

  // filter() を利用して「todoの状態が未完了」の要素を持つ新しい配列を作成
  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  })

  // filter() を利用して「todoの状態が完了」の要素を持つ新しい配列を作成
  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  return (
    <>
      <TodoTitle title = "TODO進捗管理" as = "h1" />

      <TodoAdd
        buttonText = "+ TODOを追加"
        inputEl = { inputEl }
        handleAddTodoListItem = { handleAddTodoListItem }
      />

      <TodoList
        todoList = { inCompletedList }
        toggleTodoListItemStatus = { toggleTodoListItemStatus }
        deleteTodoListItem = { deleteTodoListItem }
        title = "未完了TODOリスト"
        as = "h2"
      />

      <TodoList
        todoList = { completedList }
        toggleTodoListItemStatus = { toggleTodoListItemStatus }
        deleteTodoListItem = { deleteTodoListItem }
        title = "完了TODOリスト"
        as = "h2"
      />

      {/* 未完了TODOリストのタイトル */}
      <TodoTitle title = "未完了TODOリスト" as = "h2" />

      {/* 未完了TODOリスト */}
      <TodoList
        todoList = { inCompletedList }
        toggleTodoListItemStatus = { toggleTodoListItemStatus }
        deleteTodoListItem = { deleteTodoListItem }
      />

      {/* 完了TODOリストのタイトル */}
      <TodoTitle title = "完了TODOリスト" as = "h2" />

      {/* 完了TODOリスト */}
      <TodoList
        todoList = { completedList }
        toggleTodoListItemStatus = { toggleTodoListItemStatus }
        deleteTodoListItem = { deleteTodoListItem }
      />
    </>
  );
}

export default App;

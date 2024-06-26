// TodoAdd コンポーネントを作成
export const TodoAdd = ({ buttonText, inputEl, handleAddTodoListItem }) => {
  return (
    <>
      {/* useRef() で作成した refオブジェクトを ref属性に指定してDOMを参照する */}
      <textarea ref = { inputEl } />

      {/* 現時点では、TODOを追加ボタンは機能していない */}
      <button onClick = { handleAddTodoListItem }>{ buttonText }</button>
    </>
  );
};

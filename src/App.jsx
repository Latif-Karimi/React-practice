// import { produceWithPatches } from "immer";
import produce from "immer";
import { useState } from "react";
import "./App.css";

const initialize = ["Get ready for school","Go to work"]
export function App() {
  const [todo,setTodo] = useState (initialize)


  return (
    <div className="App">
      <TodoForm setTodo={setTodo}/>
      <TodoList todo={todo}/>
    </div>
  );
}

function TodoForm (props){
  const [todoInputValue,setTodoInputValue]=useState ("")
  function hundleSubmit (e){
    e.preventDefault()
   
  //  props.setTodo((todo)=>{
  //   return [...todo,todoInputValue]
  //  })

    props.setTodo((todo)=>{
      const newState = produce(todo,(draft)=>{
        draft.push(todoInputValue)
      })
      return newState
    })

    setTodoInputValue("") //this one keep the box empty after user input
  }


  return (
    <div className="TodoForm">
      <form onSubmit={hundleSubmit}>
        <div>
          <label htmlFor="todo">Todo:</label>
          <input name="todo" type="text" value={todoInputValue} onChange={(e)=>setTodoInputValue(e.target.value)}/>
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}

function TodoList (props){
  const lst = props.todo.map((el)=>{
    return <li key={`todo-item-${el}`}>{el}</li>
  })
  return (
    <div className="TodoList">
      <ul>{lst}</ul>
    </div>
  )
}




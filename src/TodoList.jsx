import {useState}from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList()

{

   let [todos,setTodos]=useState([{task:"sample-task",id:uuidv4(),isDone:false}]);

   let [newTodo,setNewTodo]=useState("");

   let addNewTask=()=>{
   setTodos((prevTodos) => {
    return [...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}];
   });
    setNewTodo("");
   };

   let updateTodoValue=(event)=>{
   setNewTodo(event.target.value);

   };

   let deleteTodo=(id)=>{
     setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id!=id));
   };

  //  let upperCaseAll=()=>{
  //  setTodos((prevTodos)=>
  //       prevTodos.map((todo)=>{
  //           return{
  //               ...todo,
  //               task: todo.task.toUpperCase(),
  //           };
  //       })

  //  );
  //   };


  let markAllDone=()=>{
    setTodos((prevTodos)=>
         prevTodos.map((todo)=>{
             return{
                 ...todo,
                 isDone:true,
             };
         })
 
    );
     };



  // let UpperCaseOne=(id)=>{
  //   setTodos((prevTodos)=>
  //     prevTodos.map((todo)=>{
  //         if(todo.id==id){
  //            return{
  //                ...todo,
  //                task: todo.task.toUpperCase(),
  //            };
  //        }else{
  //         return todo;
  //        }
  //       })
 
  //   );
  //    };

  let MarkAsDone=(id)=>{
    setTodos((prevTodos)=>
      prevTodos.map((todo)=>{
          if(todo.id==id){
             return{
                 ...todo,
                 isDone:true,
             };
         }else{
          return todo;
         }
        })
 
    );
     };

   
   


   return(
<div>
    <input placeholder="Add a task" value={newTodo} onChange={updateTodoValue}></input>
    <br /><br />
    <button onClick={addNewTask}>Add Task</button>
    <br /><br /><br /><br />
    <hr />
    <h4>Task to do</h4>
    <ul>
      {todos.map((todo)=>(
         <li key={todo.id}>
         <span style={todo.isDone? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>
         &nbsp;&nbsp;&nbsp;&nbsp;
         <button onClick={()=>deleteTodo(todo.id)}>delete</button>
         &nbsp;&nbsp;&nbsp;&nbsp;  
         <button onClick={()=>MarkAsDone(todo.id)}>Mark As Done</button>

         {/* <button onClick={()=>UpperCaseOne(todo.id)}>UpperCaseone</button> */}
            </li>
      ))}

    </ul>
    <br /><br /><br />

    {/* <button onClick={upperCaseAll}>Uppercase all</button> */}

    <button onClick={markAllDone}>Mark All As Done</button>
</div>
);
}
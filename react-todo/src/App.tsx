import './App.css'
import styled from "@emotion/styled";
import {TodoContainer} from "./components/TodoContainer.tsx";
import {TodoComponent} from "./components/TodoComponent.tsx";

const H1 = styled.h1`
    color: white;
`
function App() {
    const todos = [
        {
            id: 1,
            title: "Todo 1",
            completed: false
        },
        {
            id: 2,
            title: "Todo 2",
            completed: false
        },
        {
            id: 3,
            title: "Todo 3",
            completed: false
        },
        {
            id: 4,
            title: "Todo 4",
            completed: false
        },
    ];

    return (
        <>
            <H1>TODO List</H1>
            <TodoContainer>
                {todos.map(todo => (
                    <TodoComponent key={todo.id} completed={todo.completed} todo={todo.title} />
                ))}
            </TodoContainer>
        </>
    )
};

export default App

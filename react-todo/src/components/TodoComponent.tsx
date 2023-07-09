type TodoComponentProps = {
    completed: boolean,
    todo: string
}
export function TodoComponent({ completed, todo}: TodoComponentProps){
    return (
        <>
            <label>
                <input type="checkbox" checked={completed} />
                {todo}
            </label>
        </>
    )
}
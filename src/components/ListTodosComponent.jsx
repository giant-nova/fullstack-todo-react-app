function ListTodos(){

    const targetDate = new Date(2024, 10, 28)

    const todos = [
        {id: 1, description: 'Learn AWS', isDone: false, targetDate:targetDate},
        {id: 2, description: 'Learn Google Cloud', isDone: false, targetDate:targetDate},
        {id: 3, description: 'Learn Android', isDone: false, targetDate:targetDate},
        {id: 4, description: 'Learn Selenium', isDone: false, targetDate:targetDate},
    ]

    return(
        <div className="container">
            <h1>Your Todo List</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>
                                ID
                            </td>
                            <td>
                                Description
                            </td>
                            <td>
                                Is Done ?
                            </td>
                            <td>
                                Target Date
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.isDone.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default ListTodos
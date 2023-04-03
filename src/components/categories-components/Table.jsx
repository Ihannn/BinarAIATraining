import '../../styles/Categories.css'

function Table ({ categoryList, deleteData, setData, editData }) {
    
    return (
        <div className='form-container'>
            <table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>isActive</th>
                    <th>Tools</th>
                </tr>
                </thead>
                <tbody>
                {categoryList.map((category, index) => {
                    return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{category.name}</td>
                            <td>{category.is_active.toString()}</td>
                            <td>
                                <button onClick={() => deleteData(category.id) }>Delete</button>
                                <button onClick={() => setData(category)}>Edit</button>
                            </td>  
                        </tr>
                    )
                })}
                </tbody>
                
            </table>
        </div>
    )
}

export default Table
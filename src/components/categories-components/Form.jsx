import '../../styles/Categories.css'

function Form ({ data, setData, createData, editData}) {

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!data.id) {
            createData()
            console.log("Create")
        } else {
            editData()
            setData({})
            console.log("Edit")
        }
    }

    const handleChange = (field) => (e) => {
        setData({
            ...data,
            [field]: e.target.value
        })
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <label>Category Name</label>
                    <input type="text" value={data.name} placeholder="Category Name" onChange={handleChange('name')} required/>
                </div>     
                <select onChange={handleChange('is_active')} value={data.is_active} required>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form
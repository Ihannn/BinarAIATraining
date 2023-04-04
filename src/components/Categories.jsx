import { useEffect, useState } from "react"
import baseApi from "../baseApi"
import Table from "./Table"
import '../styles/Categories.css'
import '../styles/global.css'
import { useSelector, useDispatch } from 'react-redux'

function Categories () {

    // const [categoryList, setCategoryList] = useState([])
    const category = useSelector((state) => state.category.data)
    const dispatch = useDispatch()
    const [data, setData] = useState({})

    // Function to get data
    async function fetchData() {
        try {
            const response = await baseApi.get('category/')
            // const data = response.data.data
            // setCategoryList(data)
            dispatch({
                type: 'SUCCESS_GET_DATA',
                payload: response.data.data
            })
        } catch (err) {
            console.log(err)
        }
    }

    // Function to create new data
    async function createData() {
        try {
            await baseApi.post('category/create', data)
            fetchData()
        } catch (err) {
            console.log(err)
        }
    }

    // Function to delete existing data
    async function deleteData(id) {
        try {
            await baseApi.delete(`category/${id}`)
            fetchData()
        } catch (err) {
            console.log(err)
        }
    }

    async function editData() {
        try {
            await baseApi.put('category/update', data)
            fetchData()
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!data.id) {
            createData()
        } else {
            editData()
            setData({})
        }
    }

    const handleChange = (field) => (e) => {
        setData({
            ...data,
            [field]: e.target.value
        })
    }

    console.log(category)
    
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        console.log(data)
    },[data])

    return (
        <div className="category-body">
            <div id="category-container">
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
                <Table categoryList={category} deleteData={deleteData} setData={setData} />
            </div>
        </div>
    )
}

export default Categories
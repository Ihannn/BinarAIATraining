import { useEffect, useState } from "react"
import baseApi from "../baseApi"
import Table from "./categories-components/Table"
import Form from "./categories-components/Form"
import '../styles/Categories.css'
import '../styles/global.css'

function Categories () {

    const [categoryList, setCategoryList] = useState([])
    const [data, setData] = useState({})

    // Function to get data
    async function fetchData() {
        try {
            const response = await baseApi.get('category/')
            const data = response.data.data
            setCategoryList(data)
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
    
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        console.log(data)
    },[data])

    // console.log(categoryList)

    return (
        <div className="category-body">
            <div id="category-container">
                <Form data={data} setData={setData} createData={createData} editData={editData}/>
                <Table categoryList={categoryList} deleteData={deleteData} setData={setData}/>
            </div>
        </div>
    )
}

export default Categories
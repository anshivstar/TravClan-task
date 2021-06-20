import axios from 'axios'
import React, { useEffect, useContext } from 'react'
import Table from '../../Components/Table'
import { DataContext } from '../../ContextApi/data'

const Homepage = () => {

    const { data, setData } = useContext(DataContext)

    const getTableData = async () => {
        await axios.get("https://intense-tor-76305.herokuapp.com/merchants")
            .then((res) => {
                setData(res.data)
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    useEffect(() => {
        getTableData()
    }, [])

    return (
        <div>
            <Table />
        </div>
    )
}

export default Homepage

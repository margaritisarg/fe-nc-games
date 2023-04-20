import { useEffect, useState } from "react"

import { MenuItem, Select } from "@mui/material"

import * as api from '../../api'

const DropdownMenu = () => {

    const [categories, setCategories] = useState()
    const [currentCategory, setCurrentCategory] = useState()

    useEffect(() => {
        api.fetchCategories('all').then((categories) => {
            setCategories(categories)
            setCurrentCategory('all')
        })
    }, [])

    function handleChange(event){
        const currentCategory = event.target.value
        setCurrentCategory(currentCategory)
    }

    return(
        <>
            {categories
            ?   
                <Select onChange={handleChange} value={currentCategory}>
                    {categories.map(category => <MenuItem key={category} value={category}>{category}</MenuItem>)}
                </Select>
            :<p>Loading</p>}
        </>
    )
}

export default DropdownMenu
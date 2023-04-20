import { Link } from "react-router-dom"

import { MenuItem, Select } from "@mui/material"

const DropdownMenu = ({currentCategory, setCurrentCategory, categories}) => {

    function handleChange(event){
        const selectedCategory = event.target.value
        setCurrentCategory(selectedCategory)
        
    }

    return(
        <>
            {categories
            ?   
                <Select onChange={handleChange} value={currentCategory}>
                    {categories.map(category => 
                        <MenuItem key={category} value={category}>
                            <Link to={`/reviews/${category}`}>{category}</Link>
                            {/* <Link onClick={handleChange} to={`/reviews/${category}`}>{category}</Link>  */}
                        </MenuItem>)
                    }
                </Select>
            :<p>Loading</p>}
        </>
    )
}

export default DropdownMenu
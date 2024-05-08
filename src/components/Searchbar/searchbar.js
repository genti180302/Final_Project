import React, {useState} from "react";
import '../Searchbar/searchbar.scss'


const Searchbar = ({onSearch}) => {
    const [searchBar, setSearchBar] = useState('');

    const handleChange = (e) => {
        setSearchBar(e.target.value)
        onSearch(e.target.value)
    }

    return(
        <>
            <div style={{height: "100px", display:'flex', justifyContent: 'center', alignItems:'center'}}>
                <input type='text' placeholder='Search...' value={searchBar} onChange={handleChange}/>
            </div>
        </>
    )
}

export default Searchbar;
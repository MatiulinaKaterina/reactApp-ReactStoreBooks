import { useState } from "react"

export function Search(props) {

    const [searchInput, setSearchInput] = useState('');

    const handleChangeSearch = () => {
        setSearchInput(props.searchItem)
    }


    return (
        <>
            <form className='form-search'>
                <input onChange={handleChangeSearch} className='input-search' type="text" placeholder="Искать здесь..." />
                <button className='button-search' ></button>
            </form>

        </>
    )
}
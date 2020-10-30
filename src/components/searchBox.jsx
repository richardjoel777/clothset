import React from 'react';

const SearchBox = ({value, onChange }) => {
    return <input
    type='text'
    className='form-control my-3'
    name= 'query'
    placeholder='search...'
    value= {value}
    onChange = {e => onChange(e.currentTarget.value)}

    >
    </input>;
}
 
export default SearchBox;
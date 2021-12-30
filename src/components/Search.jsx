import React from 'react'

const Search = ({ search, onSearch }) => (
        <>
            <label htmlFor='search'>Search: </label>
            <input id='search' 
                   type='text' 
                   onChange={onSearch} 
                   value={search} 
            />
        </>
    );

export default Search

// note: <> and </> are shorthand for <React.Fragment>
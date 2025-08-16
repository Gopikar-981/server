import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = ({data}) => {
  const navigate = useNavigate()
  const [input, setInput]=useState(data ?data:'')
  const onSearchHandler=(e)=>{
    e.preventDefault()
    navigate('/course-list/'+input)
  }
  return (
   <form onSubmit={onSearchHandler} className="search-form">
  <div className="search-container">
    <div className="search-input-wrapper">
      <img
        src={assets.search_icon}
        alt="Search Icon"
        className="searchimg"
      />
      <input
        onChange={e => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Search for courses"
        className="searchbar"
      />
    </div>
    <button type="submit" className="search">Search</button>
  </div>
</form>

  );
};

export default SearchBar;

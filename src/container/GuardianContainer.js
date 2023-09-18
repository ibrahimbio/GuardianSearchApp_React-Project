import React, {useState, useEffect} from 'react'
import NewsList from '../component/NewsList'
import {FaSearch} from  "react-icons/fa"
import "./SearchBar.css"

const GuardianContainer = () => {

    const [newsList, setNewsList] = useState([]);
    const [apiUrl, setApiUrl] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setApiUrl(`https://content.guardianapis.com/search?q=${searchQuery}&format=json&api-key=test`)}, [searchQuery])

    const fetchData = (event) => {
        event.preventDefault();
        fetch(apiUrl)
        .then(response => response.json())
        .then((articles) => setNewsList(articles.response.results))
        setSearchQuery("")};

    const handleChange = ((event)=> {
        setSearchQuery(event.target.value)
    });
   
    return (
        <>
        <form className='input-wrapper' onSubmit={fetchData}>
            <FaSearch id="search-icon"/>
            <input type="text" placeholder='Type to search...' value={searchQuery} onChange={handleChange}/>
            <input type="submit" value="Submit" id="search-button" />
        
        </form>
        <hr/>
       <NewsList news={newsList}/>
        </>
        
    
    

    )};

    



export default GuardianContainer;

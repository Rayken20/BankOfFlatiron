import { useState } from "react"

export default function SearchBar({onSearch}){
  
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    
         const value = event.target.value;
         setSearchTerm(value)
        
         onSearch(searchTerm)

  }

    return (
       <>
         <div>
          <label htmlFor="search">Search:</label>
          <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleInputChange}    
          placeholder="Search Description"      
          />
         </div>
       </>
    )
}


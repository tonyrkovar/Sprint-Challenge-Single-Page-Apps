import React, { useState, useEffect } from "react";
import axios from 'axios';
import Search from 'react-search';
import CharacterCard from './CharacterCard';


// export default function SearchForm(){
//   const [searchValue, setSearchValue] =useState('')
//   return(
//     <Form>
//       <Field name='search'/>
//     </Form>
//   );
// }

// const FormikSearchForm = withFormik({
//   handleSubmit(values){
//     setSearchValue()
//     axios
//       .get()
//   }

// })

export default function SearchForm(props) {
  const [searchValue, setSearchValue] =useState('')
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios 
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        console.log(res.data.results);
        setCharacters('this is search data',res.data.results)
      })
  }, [characters]);
// useEffect(() => {
//   setCharacters(props.name);
// }, [characters])
  

console.log(characters)



  const handleSearchInputChangers = e => {
    setSearchValue(e.props);
    console.log('1111',e.props)
  }

  const callSearch = (e) => {
    e.preventDefault();
    e.name.search(searchValue);
    console.log('2222',searchValue)
  }
  return (
    <div>
     <section className="search-form">
      <p>Holder</p>
     </section>
     <form className='search'>
       <input 
         value={searchValue}
         onChange={handleSearchInputChangers}
         type='text'
       />
       <input onClick={callSearch} type='submit' value='Search' />
     </form>
    {/* <Search 
      items={characters}
      placeholder='Search Characters'
    /> */}
    </div>
  );
}

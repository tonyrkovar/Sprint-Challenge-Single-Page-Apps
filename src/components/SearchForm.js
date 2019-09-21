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
  const [apiValue, setApiValue] = useState('');


  useEffect(() => {
    axios 
      .get(`https://rickandmortyapi.com/api/character/${apiValue}`)
      .then(res => {
        console.log(res.data.results);
        setCharacters(res.data.results)
      })
      .catch((err) => {
        console.log('Something went wrong:', err)
      })
  }, [apiValue]);
// useEffect(() => {
//   setCharacters(props.name);
// }, [characters])
  

console.log('searchformcons',characters)



  const handleSearchInputChangers = e => {
    // Use Target to pull your data
    setSearchValue(e.target.value);
    console.log('1111',e.target.value)
  }

  const callSearch = (e) => {
    e.preventDefault();
    const updatedCharacters = characters.filter((character) => 
      character.name.includes(searchValue)
    );
    setCharacters(updatedCharacters)
    setApiValue(updatedCharacters.id)
    console.log('2222',characters)
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
    </div>
  );
}

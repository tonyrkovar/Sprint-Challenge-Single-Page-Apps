import React, { useState } from "react";
import {withFormik, Field, Form} from 'formik';


export default function SearchForm(){
  return(
    <Form>
      <Field name='search'/>
    </Form>
  );
}






// export default function SearchForm(props) {
//   const [searchValue, setSearchValue] =useState('')

//   const handleSearchInputChangers = e => {
//     setSearchValue(e.target.value);
//   }

//   const callSearch = e => {
//     e.preventDefault();
//     props.search(searchValue);
//     console.log(searchValue)
//   }
//   return (
//     // <section className="search-form">
//     //  <p>Holder</p>
//     // </section>
//     <form className='search'>
//       <input 
//         value={searchValue}
//         onChange={handleSearchInputChangers}
//         type='text'
//       />
//       <input onClick={callSearch} type='submit' value='Search' />
//     </form>
//   );
// }

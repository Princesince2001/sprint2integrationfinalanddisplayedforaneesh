// import React, { useState, useEffect, useRef } from 'react';
// import { fetchData } from '../../middleware/SearchApi.js'; // Make sure the path is correct
// import { setSearchQuery } from '../../actions/SearchAction.js'; // replace './actions' with the actual path to your actions file
// import { connect, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import Searchstore from '../../store/Searchstore';

// const SearchBar = ({ setSearchQuery }) => {
//   const [searchQuery, setSearchQueryLocal] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [resultData, setResultData] = useState();
//   const dropdownRef = useRef(null);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     fetchData()
//       .then(response => {
//         setResultData(response.data);
//       })
//       .catch(error => console.error('Error fetching data: ', error));
//   }, []);

//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener('mousedown', handleOutsideClick);
//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, []);

//   const handleSearch = () => {
//     // Get the current value of the search input field
//     const query = document.querySelector('.search-bar input[type="text"]').value;
//     dispatch(setSearchQuery(query));
//     // Set the searchQuery state to the current value of the search input field
//     // setSearchQuery(query);
//     // setSearchQueryLocal(query);
//     // Searchstore(query);
//     console.log('searchQuery after setSearchQuery:', query);


//     // Show the dropdown if the search input field is not empty
//     setShowDropdown(query.length > 0);

//     // Filter the search results based on the current value of the search input field
//     if (resultData) {
//         const filteredResults = resultData.filter((result) =>
//             result.title.toLowerCase().startsWith(query.toLowerCase())
//         );
//         setSearchResults(filteredResults);
//     }
//   };
//   const handleInputChange = (e) => {
//     const query = e.target.value;
//     setSearchQueryLocal(query);
//     setShowDropdown(query.length > 0);

//     if (resultData) {
//         const filteredResults = resultData.filter((result) =>
//             result.title.toLowerCase().startsWith(query.toLowerCase())
//         );
//         setSearchResults(filteredResults);
//     }
// };


//   // const handleInputChange = (e) => {
//   //   const query = e.target.value;
//   //   setSearchQueryLocal(query);
//   //   setShowDropdown(query.length > 0);

//   //   if (resultData) {
//   //     const filteredResults = resultData.filter((result) =>
//   //       result.title.toLowerCase().startsWith(searchQuery.toLowerCase())
//   //     );
//   //     setSearchResults(filteredResults);
//   //   }
  

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchQuery}
//         onChange={handleInputChange}
//       />
//       <button className="btn btn-light" type="button" onClick={handleSearch}>
//         <i className="bi bi-search"></i>
//       </button>

//       {showDropdown && (
//         <div className="search-results" ref={dropdownRef}>
//           {searchResults.length > 0 ? (
//             <ul>
//               {searchResults.map((result, index) => (
//                 <li key={index}>{result.title}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>No results found</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// const mapDispatchToProps = (dispatch) => ({
//   setSearchQuery: (searchQuery) => dispatch(setSearchQuery(searchQuery)),
// });

// export default connect(null, mapDispatchToProps)(SearchBar);

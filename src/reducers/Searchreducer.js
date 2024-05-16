const initialState = {
    searchQuery: '',
    // other state properties...
  };
  
  
  const Searchreducer = (state = initialState, action) => {
    // console.log(action.payload)
    switch (action.type) {
      case 'SET_SEARCH_QUERY':
        console.log('searchQuery in reducer after SET_SEARCH_QUERY:', action.payload); //
        return {
          ...state,
          searchQuery: action.payload,
         
        };

    //    case 'SET_COURSE':
    //     console.log("set course : ",action.payload);
       
      // other cases...
      default:
        return state;
        
    }
    
  };
  
  export default Searchreducer;
// api.js
import axios from 'axios';
import { UseDispatch } from 'react-redux';


export const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:5199/lxp/view/course');
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

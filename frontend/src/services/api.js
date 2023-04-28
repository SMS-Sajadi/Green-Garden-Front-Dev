import axios from "axios";

const BASE_URL  = "http://localhost:8000/";

const getData = async (str) => {
      const response = await axios.get(BASE_URL + str, { withCredentials: true });
      return response.data;
}
const postData = async (str, data) => { 
    var res;
    await axios.post(BASE_URL + str, data)
        .then(response =>  res = response)
    
    return res.data;
}
export {getData, postData};
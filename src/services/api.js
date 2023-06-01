import axios from "axios";

const BASE_URL  = "http://localhost:8000/";

const checkToken = async (str, token) => {
    const response = await axios.get(BASE_URL + str, { withCredentials: true,
        headers: { 'Authorization': 'Bearer ' + token }
    });
    return response;

}

const getData = async (str) => {
      const response = await axios.get(BASE_URL + str, { withCredentials: true });
      return response.data;
}
const get = async (str) => {
    const response = await axios.get(BASE_URL + str, { withCredentials: true });
    return response;
}

const postData = async (str, data) => { 
    var res;
    await axios.post(BASE_URL + str, data)
        .then(response =>  res = response)
    
    return res.data;
}

const post = async (str, data) => {
    var res;
    await axios.post(BASE_URL + str, data)
        .then(response =>  res = response)

    return res;
}

const getWithParam = async (str, params) => {
    var res;
    var params;
    var AddAnd = false
    for (let key in params) {
        if (AddAnd){
            params += '&'
        }
        AddAnd = true
        if (typeof params[key] === 'boolean'){
            const numBool = params[key] === 'true' ? '1' : '0';
            params += (key + '=' + numBool)
        } else {
            params += (key + '=' + params[key])
        }
    }
    console.log(BASE_URL + str + '?' + params)
    await axios.get(BASE_URL + str + '?' + params)
    .then(response => {
        res = response
    })
    return res.data
}

export {getData, postData, checkToken, post, get, getWithParam};
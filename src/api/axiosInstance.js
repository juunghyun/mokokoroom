//GET, POST 모듈화
import axios, { AxiosInstance } from 'axios';


const apiURL = process.env.REACT_APP_IP_ADDRESS;
const apiKEY = process.env.REACT_APP_KEY;

//GET
export async function apiGET(url) {
    const fullURL = apiURL + url;
    try {
        const response = await axios.get(fullURL, {
            headers: {
                'Accept': `application/json`,
                'Authorization': `Bearer ${apiKEY}`
            }
        });
        return response;
    }
    catch (error) {
        console.error(error);
    }
}
//POST
export async function apiPOST(url) {
    const fullURL = apiURL + url;
    try {
        const response = await axios.post(fullURL, {
            headers: {
                'Accept': `application/json`,
                'Authorization': `Bearer ${apiKEY}`
            }
        });
        console.log(response.data);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}
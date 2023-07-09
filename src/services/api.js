import axios from 'axios';
import { API_URL } from '../constants/constant';
export const getRecipes = async (setSearchedQuery)=>{
    try{
     let response =  await axios.get(`${API_URL}/search?q=${setSearchedQuery}`);
     return response.data;
    }catch(error){
        console.log('Error while calling the api',error.message);
        return error.response
    }
}

export const getRecipe = async (setSearchedQuery)=>{
    try{
     let response =  await axios.get(`${API_URL}/get?rId=${setSearchedQuery}`);
     return response.data;
    }catch(error){
        console.log('Error while calling the api',error.message);
        return error.response
    }
}
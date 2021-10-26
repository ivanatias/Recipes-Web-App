import axios from "axios";

export const getRecipes = async (query, pageParams) => {
    try {
        const path = pageParams ?
            pageParams :
            `https://api.edamam.com/api/recipes/v2?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&type=public`;
        const response = await axios.get(path);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }

}
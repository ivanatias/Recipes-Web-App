import axios from "axios";

export const getRecipes = async (path) => {
    try {
        const response = await axios.get(path);
        console.log(response.data);
    }
    catch (error) {
        console.log(error);
    }

}
const api_key = '14e2162d9cfb015043bb9c0ffa318b50'
const API = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}&language=es`;

const getData = async (id) => {
    const apiURL = id ? `
    https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=es` : API;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('Fetch Error..!!', error);
    };
    
};

export default getData;
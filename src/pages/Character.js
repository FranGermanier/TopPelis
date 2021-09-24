import getHash from '../utils/getHash';
import getData from '../utils/getData';

const url_image = 'https://image.tmdb.org/t/p/original'

const Character =  async () => {

    const id = getHash();
    console.log(id)
    const movie = await getData(id);
    const view = `
        <div class="movies-inner">
                <article class="movies-card">
                    <img src="${url_image}${movie.poster_path}" alt="${movie.title}">
                    <h2>${movie.title}</h2>
                </article>
                    
                <article class="movies-card">
                    <h3><b>Titulo original:</b> <span>${movie.original_title}</span></h3>
                    <h3><b>Premisa:</b> <span>${movie.overview}</span></h3>
                    <h3><b>Genero:</b> <span>${movie.genres[0].name}</span></h3>
                    <h3><b>Estreno:</b> <span>${movie.release_date}</span></h3>
                    <h3><b>Calificacion:</b> <span>${movie.vote_average}★</span></h3>
                    <h3><b>Cantidad de votos:</b> <span>${movie.vote_count}</span></h3>
                    <h3>Podes verla <b> <a href="${movie.homepage}" target="_blank"> aqui </a></b></h3>
                </article>  
        </div> 
    `
    return view
};
export default Character;
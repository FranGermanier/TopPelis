import getData from '../utils/getData';

const url_image = 'https://image.tmdb.org/t/p/original'

const Home =  async () => {

    const movie = await getData();

    const view =  `
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
            <div class="subHeader">
                <h1>
                    TOP 20 PELICULAS MAS POPULARES DE LA SEMANA
                </h1>
            </div>
        <div class="movies">
            ${movie.results.map(movie => `
            <article class="movies-item">
                <a href="#/${movie.id}">
                <img src="${url_image}${movie.poster_path}" align="left" alt="${movie.title}">
                <h2> ${movie.title} </h2>
                <h3> 
                    Estreno: ${movie.release_date}
                    <br>
                    <br>
                    Calificacion: ${movie.vote_average}★ 

                </h3>
                </a>
            </article>
                    `).join('') }
        </div  
            `
    return view;
}

export default Home;
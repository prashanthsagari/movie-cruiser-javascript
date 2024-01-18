
let listOfMovies = [];
let listOfFavMovies = [];



function getMovies() {
	return fetch("http://localhost:3000/movies")
		.then(res => {
			if (!res) {
				return Promise.reject(res.status)
			} return res.json();
		}).then(movies => {
			listOfMovies = movies;
			showMovies(movies);
			return listOfMovies;
		}).catch(err => console.log(err));
}


let showMovies = (movies) => {
	let carousalIndicators = '';
	let cardData = '';
	movies.forEach((movie, index) => {
		const classData = index == 0 ? 'active' : '';
		carousalIndicators += `<li data-target="#carouselExampleIndicators" data-slide-to="${index}" class="${classData}"></li>`;
		cardData += `<div class="carousel-item ${classData}">		
				<div class="col-md-12 card-deck">
				<img
					class="card-img-top rounded"
					src="${movie.posterPath}"
					alt="Card image cap"
				/>
				<div class="card-body">
					<h5 class="card-title text-center font-weight-bold"  id=${movie.id}>${movie.title}</h5><button onclick="addFavourite(${movie.id})" class="btn btn-success float-right">Add to favorite</button>
					
					<p class="card-text text-center">
					${movie.plot}
					</p>
					<p class="card-text">
						<small class="text-muted">$15,156,051</small>
					</p>
				</div>
				</div>
			</div>`
	});

	let movieContent = `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
	            <ol class="carousel-indicators">
							 ${carousalIndicators}
              </ol>
	<div class="carousel-inner">
 ${cardData}
  </div>	
	<a
    class="carousel-control-prev"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a
    class="carousel-control-next"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
	`;
	document.getElementById("moviesList").innerHTML = movieContent;
}






// async function getMoviess() {
// 	let carousalIndicators = '';
// 	let cardData = '';
// 	movieResponse = await fetch("http://localhost:3000/movies");
// 	listOfMovies = await movieResponse.json();
// 	listOfMovies.forEach((movie, index) => {
// 		const classData = index == 0 ? 'active' : '';
// 		carousalIndicators += `<li data-target="#carouselExampleIndicators" data-slide-to="${index}" class="${classData}"></li>`;
// 		cardData += `<div class="carousel-item ${classData}">		
// 		  <div class="col-md-12 card-deck">
// 			<img
// 				class="card-img-top rounded"
// 				src="${movie.posterPath}"
// 				alt="Card image cap"
// 			/>
// 			<div class="card-body">
// 				<h5 class="card-title text-center font-weight-bold"  id=${movie.id}>${movie.title}</h5><button onclick="addFavourite(${movie.id})" class="btn btn-success float-right">Add to favorite</button>

// 				<p class="card-text text-center">
// 				${movie.plot}
// 				</p>
// 				<p class="card-text">
// 					<small class="text-muted">$15,156,051</small>
// 				</p>
// 			</div>
// 		  </div>
// 	  </div>`
// 	});


// 	let movieContent = `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
// 	            <ol class="carousel-indicators">
// 							 ${carousalIndicators}
//               </ol>
// 	<div class="carousel-inner">
//  ${cardData}
//   </div>	
// 	<a
//     class="carousel-control-prev"
//     href="#carouselExampleIndicators"
//     role="button"
//     data-slide="prev"
//   >
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a
//     class="carousel-control-next"
//     href="#carouselExampleIndicators"
//     role="button"
//     data-slide="next"
//   >
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>
// 	`;
// 	document.getElementById("moviesList").innerHTML = movieContent;
// 	return listOfMovies;
// }

function getFavourites() {

	return fetch("http://localhost:3000/favourites")
		.then(res => {
			if (!res) {
				return Promise.reject(res.status)
			} return res.json();
		}).then(favMovies => {
			listOfFavMovies = favMovies;
			showFavMovies(listOfFavMovies);
			return listOfFavMovies;
		}).catch(err => console.log(err));
}

let showFavMovies = (listOfFavMovies) => {
	let carousalIndicators = '';
	let cardData = '';
	listOfFavMovies.forEach((movie, index) => {
		const classData = index == 0 ? 'active' : '';
		carousalIndicators += `<li data-target="#favCarouselIndicators" data-slide-to="${index}" class="${classData}"></li>`;
		cardData += `<div class="carousel-item ${classData}">		
				<div class="col-md-12 card-deck">
				<img
					class="card-img-top rounded"
					src="${movie.posterPath}"
					alt="Card image cap"
				/>
				<div class="card-body">
					<h5 class="card-title text-center font-weight-bold" style="display:inline" id=${movie.id}>${movie.title}</h5>
					
					<p class="card-text text-center">
					${movie.plot}
					</p>
					<p class="card-text">
						<small class="text-muted">$15,156,051</small>
					</p>
				</div>
				</div>
			</div>`
	});

	let favoriteMovieContent = `<div id="favCarouselIndicators" class="carousel slide" data-ride="carousel">
	            <ol class="carousel-indicators">
							 ${carousalIndicators}
              </ol>
	<div class="carousel-inner">
 ${cardData}
  </div>	
	<a
    class="carousel-control-prev"
    href="#favCarouselIndicators"
    role="button"
    data-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a
    class="carousel-control-next"
    href="#favCarouselIndicators"
    role="button"
    data-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
	`;
	document.getElementById("favouritesList").innerHTML = favoriteMovieContent;
	return listOfFavMovies;

}



function addFavourite(id) {
	let movie = listOfMovies.find(obj => obj.id === id);
	let favorite = listOfFavMovies.find(obj => obj.id == id);
	if (favorite !== undefined && favorite.id === movie.id) {
		alert('Movie is already added to favourites');
		throw new Error('Movie is already added to favourites');
	}
	return fetch('http://localhost:3000/favourites', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(movie)
	})
		.then(res => res.json())
		.then(movie => {
			listOfFavMovies.push(movie);
			showFavMovies(listOfFavMovies);
			return listOfFavMovies;
		});
}


module.exports = {
	getMovies,
	getFavourites,
	addFavourite
};

// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution



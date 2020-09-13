const APIKEY = "04c35731a5ee918f014970082a0088b1";
const MYAPIKEY = '36bbfac81f5d887b5732782da40707de';
const APIURL = 'https://api.themoviedb.org/3/discover/movie?api_key='+MYAPIKEY+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

const IMGPATH = 'https://image.tmdb.org/t/p/w500/';

async function getmovies() {
	const resp = await fetch(APIURL);
	const respData = await resp.json();

	console.log(respData);

	respData.results.forEach(movie => {
		

	});
	return respData;
}

getmovies();
const express = require("express");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config();

const countries = require("./modules/countries/api");
const youtube = require("./modules/youtube/api");
const photos = require("./modules/photos/api");

const app = express();
const port = process.env.PORT || "8000";


//set up application template engine
app.set("views", path.join(__dirname, "views")); //the first "views" is the setting name
//the second value above is the path: __dirname/views
app.set("view engine", "pug");

//set up folder for static files
app.use(express.static(path.join(__dirname, "public")));

//convert query string formats in form data to JSON format (This allows us to use JSON-like methods for parsing data.)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// PAGE ROUTES

app.get("/", async (request, response) => {
    const region = request.query.region || null;
    let countriesByRegion = await countries.getCountriesByRegion(region);
    response.render("index", { title: "Home", region, countriesByRegion: countriesByRegion});
});

app.get("/allcountries", async (request, response) => {
    let countriesList = await countries.getAllCountries();
    // console.log(countriesList);
    let sortedCountriesList = countriesList.sort((a, b) => a.name.common.localeCompare(b.name.common))
    response.render("allcountries", { title: "All Countries", allCountries: sortedCountriesList});
});


app.get("/country/:name", async (request, response) => {
    const countryName = request.params.name;
    let country = await countries.getCountryByName(countryName);
    // console.log(country);
    let videos = await youtube.getVideosByCountry(countryName);
    // console.log(videos);
    let photo = await photos.getImageByCountry(countryName);
    response.render("country", { title: countryName, country: country[0], videos: videos, photo: photo.results[0]});
});

app.post("/search", async (request, response) => {
    const searchQuery = request.body.country.toLowerCase();
    let result = await countries.getCountryByName(searchQuery);
    response.render("search", { countries: result });
});


app.listen (port, () => {
    console.log (`Listening on http://localhost:${port}`);
}) ;
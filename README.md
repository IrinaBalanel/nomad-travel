# Nomad Travel

## Description

This is a travel planning website built with Node.js and Express, using Pug for templates. It consumes the REST Countries API, YouTube API, and Unsplash API to allow users to find travel destinations by displaying detailed country data, pictures, and embedded video guides. The site features tabs by regions, search functionality by country name, and default sorting of countries by alphabet. The website is responsive, utilizing media queries for optimal viewing on different devices.

## Technologies
•	Node.js
•	Express
•	Pug
•	HTML/CSS
•	JavaScript
•	Media Queries for responsiveness

## APIs
1. [REST Countries API](https://restcountries.com/#rest-countries)
2. [YouTube API](https://developers.google.com/youtube/v3/docs/videos/list) and [IFrame for embeds](https://developers.google.com/youtube/iframe_api_reference)
3. [Unsplash API](https://unsplash.com/documentation#search-photos)

## Installation
1. Clone the project with `git clone`
2. Navigate to the project directory with `cd [project-name]`
3. Install the dependencies with `npm i`
4. Create a .env file in the root directory and add your API keys for YouTube and Unsplash: `YOUTUBE_API_KEY=your_youtube_api_key, UNSPLASH_API_KEY=your_unsplash_api_key`
5. Start the server with `npm run dev`

## User Interface
<img href="./nomad.png" width="600px"/>

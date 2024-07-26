const axios = require("axios");
const apiKey = process.env.YOUTUBE_API_KEY;

const youtubeBaseUrl = "https://www.googleapis.com/youtube/v3"

async function getVideosByCountry(countryName) {
	try{
		const reqUrl = `${youtubeBaseUrl}/search`;
		const response = await axios.get(reqUrl, {
			params: {
			part: "snippet",
			q: `${countryName} guides`,
			key: apiKey,
			type: "video",
			maxResults: 3,
			}
		});
		const data = response.data.items
		// console.log(response.data.items);
		return data;
	}catch(error){
		console.log(`Error fetching videos for ${countryName}:`, error);
	}
  
} 

module.exports = {
  getVideosByCountry
};
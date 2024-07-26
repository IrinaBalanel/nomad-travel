const photosBaseUrl = "https://api.unsplash.com"; //base URL to get all the countries!
const accessKey = process.env.UNSPLASH_ACCESS_KEY;

async function getImageByCountry(countryName){
    try{
        const reqUrl = `${photosBaseUrl}/search/photos?query=${countryName}&per_page=1&orientation=landscape`;
        const response =  await fetch(
            reqUrl, 
            {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Client-ID ${accessKey}`,
                    "Accept-Version": "v1"
                }
            }
        );
        const data = await response.json();
        // console.log(data.results[0].urls.small);
        return data;
    }catch(error){
        console.log(`Error fetching image for ${countryName}:`, error);
    }
    

};


module.exports = {
    getImageByCountry
}

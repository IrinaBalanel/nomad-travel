const countriesBaseUrl = "https://restcountries.com/v3.1"; //base URL to get all the countries!

async function getAllCountries(){
    try{
        const reqUrl = `${countriesBaseUrl}/all`;
        const response =  await fetch(
            reqUrl, 
            {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching all countries:", error);
    }

}

async function getCountryByName(countryName){
    try{
        const reqUrl = `${countriesBaseUrl}/name/${countryName}`;
        const response =  await fetch(
            reqUrl, 
            {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const data = await response.json();
        return data;
    } catch(error){
        console.log(`Error fetching country by name ${countryName}:`, error)
    }

}

async function getCountriesByRegion(region){
    try{
        const reqUrl = `${countriesBaseUrl}/region/${region}`;
        const response =  await fetch(
            reqUrl, 
            {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const data = await response.json();
        // console.log(data[0]);
        return data;
    } catch(error){
        console.log(`Error fetching countries by region ${region}:`, error); //the error appear in the console when you click on Popular tab on index.pug page, the api doesn't have this parameter, so the response is null and it trows an error for this.
    }


}
// getCountriesByRegion("Europe");




module.exports = {
    getAllCountries,
    getCountryByName,
    getCountriesByRegion
}

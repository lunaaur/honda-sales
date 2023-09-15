const axios = require('axios').default
require('dotenv').config();

let apiUrl = 'https://api.api-ninjas.com/v1/cars'
const config = {
  headers: {'X-Api-Key': 'npvZ7Q5j7LThheUtVE9xeLbZzGJprpXcCw1W2srK',
  withCredentials: true}
}


const getCars = async (req, res) => {
  try {
    const response =  await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/honda?format=json') 
    const data = response.data.Results.slice(0,10)
    res.send(data)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {getCars};
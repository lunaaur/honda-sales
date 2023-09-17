const axios = require('axios').default
require('dotenv').config();

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
import axios from 'axios';
const apiKey='8279cd0d2cca488dacef5d182f0cd005'
export default axios.create({
  baseURL:`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
})
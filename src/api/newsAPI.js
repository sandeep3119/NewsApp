import axios from 'axios';
const apiKey='Add Toy Api Key Here'
export default axios.create({
  baseURL:`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
})

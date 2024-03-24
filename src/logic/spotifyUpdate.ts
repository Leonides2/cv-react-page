import axios from 'axios'

var options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/search/',
  params: {
    q: '<REQUIRED>',
    type: 'multi',
    offset: '0',
    limit: '10',
    numberOfTopResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': '75793f76f8msh72e2a5376ed3111p1d39bdjsne8cfd3b51fa7',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

async function getSearchResults(q: string, type ='multi', offset= '0', limit= '10', topResults='5'){
  try {
    
    options.params = {
      q: q,
      type: type,
      offset: offset,
      limit: limit,
      numberOfTopResults: topResults
    }

	  const response = await axios.request<JSON>(options);
	  console.log(response.data);
    return response.data
  } catch (error) {
	console.error(error);
}
}
 

  export default getSearchResults
import axios from 'axios'

type Search = {
    obj: string;
}

type GetSearchResponse = {
    data: Search[];
  };
  
  async function getSearchResults(q:string, type = 'multi', limit = '10', offset = '0', topResults = '5'){
    try{
      const options = {
      params: {
        q: q ,
        type: type,
        offset: offset,
        limit: limit,
        numberOfTopResults: topResults
        },
      headers: {
        'X-RapidAPI-Key': '75793f76f8msh72e2a5376ed3111p1d39bdjsne8cfd3b51fa7',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
      }
     };

	    const {data, status} = await axios.get<GetSearchResponse>('https://spotify23.p.rapidapi.com/search/',options);

      console.log(JSON.stringify(data, null, 4));
      console.log('response status is: ', status);
      return data;
      
    }catch(error){

      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }

  }
  
 

  export default getSearchResults
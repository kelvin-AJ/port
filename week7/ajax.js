const response = new Response( 'Hello!', {
    ok: true,
    status: 200,
    statusText: 'OK',
    type: 'cors',
    url: '/api'
});



const url = 'https://www.boredapi.com/api/activity';
const headers = new Headers({ 'Content-Type': 'text/plain', 'Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate' })

const request = (url,{
    headers: headers
})

fetch(url)
.then( function(response) {
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
})
.then( response => console.log(response) )
.catch( error => console.log('There was an error!') )
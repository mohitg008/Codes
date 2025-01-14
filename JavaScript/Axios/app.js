/* axios.get("https://swapi.tech/api/people/1/")
.then((data)=>{
    console.log(data);
})
.catch((e)=>{
    console.log(e);
}) */


/* 
const getStarWars = async (id) =>{
  try{
    var data =  await axios.get(`https://swapi.tech/api/people/${id}/`);
    console.log(data);
    console.log("Succesful!!!");
  }
  catch(e){
    console.log('Something went wrong :( '+e);
  }
    
}
getStarWars(1);
getStarWars(12); */


const getDadJoke = async () =>{
    const config = {headers: {Accept: 'application/json' }};
    const res = axios.get('https://icanhazdadjoke.com/',config);
    console.log(res);
}


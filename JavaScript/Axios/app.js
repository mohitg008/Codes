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


const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const getDadJoke = async () => {
  const config = { headers: { Accept: 'application/json' } };
  const res = await axios.get('https://icanhazdadjoke.com/', config);
  return res.data.joke;
}

const addNewJoke = async()=>{
  const jokeText = await getDadJoke();
  const newLi = document.createElement('li');
  newLi.append(jokeText);
  ul.append(newLi);
}

btn.addEventListener('click',addNewJoke)


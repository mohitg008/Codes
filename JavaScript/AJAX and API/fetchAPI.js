/* fetch("https://swapi.tech/api/people/1/")
    .then((res) => {
        console.log("RESOLVED!", res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log("ERROR!", e);
    });
 */
//using async function

var loadStarWars = async () => {
    try {
        var res = await fetch("https://swapi.tech/api/people/1/");
        var data = await res.json();
        console.log(data);
        var res2 = await fetch("https://swapi.tech/api/people/2/");
        var data2 = await res2.json();
        console.log(data2);
   }
    catch(e){
        console.log("error is : "+e);
    }
  }

  loadStarWars();
  
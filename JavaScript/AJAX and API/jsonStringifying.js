/* const user = {
    id: 1,
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    isActive: true
  };

  
var newJSON = JSON.stringify(user);
console.log(newJSON); */


const exampleObject = {
    id: 101,
    name: "Alice",
    email: null,
    isActive: true,
    roles: ["user", "manager"],
    address: {
      city: "Wonderland",
      postalCode: null
    }
  };

  var newJSON2 = JSON.stringify(exampleObject);
  console.log(newJSON2);
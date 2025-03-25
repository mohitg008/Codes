/* //better than constructor functions

class Color{
    constructor(r,g,b,name){
        this.r=r;
        this.g=g;
        this.b=b;
        this.name=name;
    }
    innerRGB(){
        const {r,g,b} = this;
        return `${r},${g},${b}`;
    }
    rgb(){
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a=1.0){
        return `rgba(${this.innerRGB()}, ${a})`;
    }
}



const color1 = new Color(200,50,60,'red');
console.log(color1.rgba(0.5));
 */



//keywords

/* class Pet{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    eat(){
        return `${this.name} is eating`;
    }
}

class Cat extends Pet{
    constructor(name,age,livesLeft=9){
        super(name,age);
        this.livesLeft=livesLeft;
    }

    meow(){
        return `MEOWWWW!!!`;
    }
}

class Dog extends Pet{
    bark(){ 
        return `WOOOOF!!`;
    }
}
 */





class User{
    constructor(userName,password,age){
      this.userName = userName;
      this.password = password;
      this.age = age;
    }

    greet = () => {
         return `Hello, ${this.userName}`
    }    
}




const userOne = new User('Joel','123',40);

console.log(userOne.password)
console.log(userOne.greet());
class MyArray{
    constructor(){
      this.length=0;
      this.data={};

    }

    push(item){
        this.data[this.length]=item;
        this.length++;
    }

    get(index){
        return this.data[index]
    }

    pop(){

        delete this.data[this.length-1]
        this.length--;
    }

    shift(){

        for(let i = 0 ; i<this.length;i++){
            this.data[i] = this.data[i+1]; 
        }
       
        delete this.data[this.length-1];
        this.length--;
    }    



}

const myNewArray = new MyArray();

myNewArray.push("apple");
myNewArray.push("orange");
myNewArray.push("mango");

// console.log(myNewArray);

//console.log(myNewArray.get(0));

//myNewArray.pop()
console.log(myNewArray);
console.log(myNewArray.shift());
console.log(myNewArray);




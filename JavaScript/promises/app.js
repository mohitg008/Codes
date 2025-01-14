
/* const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        let random = Math.random();
        setTimeout(() => {
            if (random < 0.7) {
                //console.log('here is your fake data');
                resolve('Here is your fake data!!');
            }
            else
                reject('connection error timeout :(');

        }, 2000)

    })
}


fakeRequest('getmydata/api/page1')
    .then((data) => {
        console.log(`Request completed 1, ${data}`);
        return fakeRequest('getmydata/api/page2')
    })
    .then((data) => {
        console.log(`Request completed 2, ${data}`);
        return fakeRequest('getmydata/api/page3')
    })
    .then((data) => {
        console.log(`Request completed 3, ${data}`);
        return fakeRequest('getmydata/api/page4')
    })
    .then((data) => {
        console.log(`Request completed 4, ${data}`);
        return fakeRequest('getmydata/api/page5')
    })
    .catch((data) => {
        console.log(data);
    }) 
 */


/* 
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve();
        }, 5000)
    })
} */



/* const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        reject();

    })
} */



 new Promise((resolve, reject) => {
 
    })

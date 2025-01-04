const tweetForm = document.querySelector('#tweetform');
const tweetList = document.querySelector('#tweetlist');

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;

    addToBody(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
});

function addToBody(usernameInput, tweetInput) {
    const newLi = document.createElement('li');
    const bold = document.createElement('b');
    bold.textContent = usernameInput
    newLi.append(bold);
    
    newLi.append(`- ${tweetInput}`);
    tweetList.appendChild(newLi);
}
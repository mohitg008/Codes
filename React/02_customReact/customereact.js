const mainContainer = document.querySelector('#root');



const renderReact = (reactElement) => {
    const newEle = document.createElement(reactElement.type);

    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        newEle.setAttribute(prop, reactElement.props[prop]);
    }
    newEle.append(reactElement.children);
    
 mainContainer.appendChild(newEle);
} 

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click here to visit Google'
};

renderReact(reactElement);
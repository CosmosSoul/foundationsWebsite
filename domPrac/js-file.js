const body = document.querySelector('body')

const content = document.createElement('p');
content.textContent = "Hey, I'm red!";
content.style.color = 'red';


const contentTwo = document.createElement('h3');
contentTwo.textContent = "I'm a blue h3!";
contentTwo.style.color = 'blue';

const contentThree = document.createElement('div');
contentThree.style.backgroundColor = 'pink';
contentThree.style.borderStyle = 'solid';
contentThree.style.borderColor = 'black';

const contentFour = document.createElement('h1');
contentFour.textContent = "I'm in a div!"

const contentFive = document.createElement('p');
contentFive.textContent = "Me, too!";

contentThree.appendChild(contentFour);
contentThree.appendChild(contentFive);

body.appendChild(content);
body.appendChild(contentTwo);
body.appendChild(contentThree);

const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");

btn.addEventListener('click', () => {
    alert("Hello World");
});


    btn.addEventListener('click', function (e){
        console.log(e);
    });


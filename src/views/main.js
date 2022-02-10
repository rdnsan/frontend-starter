import Config from '@config';

// Set Title
document.title = Config.APP_TITLE;

// Main
const greeting = document.createElement('h1');
greeting.innerText = 'Hello World!';
document.body.appendChild(greeting);

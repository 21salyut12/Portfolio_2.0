// Array of image objects with filenames and descriptions
const images = [
    { filename: './images/weather_app_react.jpg',
      title: 'Weather App',
      description: 'The objective of this project was to design a network of weather stations that send measured data to a master device that acts like a gateway which upon receiving the information it transmits it to a realtime database made with Firebase Realtime Database. I tried using as an experimental demonstration 2 ESP32\'s that each had a LoRa module to facilitate communication between them. In order to see the measurements plus a timestamp I had built a web app with React and connected it to the database.',
      alt: 'Weather App with React',
      link: 'https://21salyut12.github.io/weather-react-app/',
      repoLink: 'https://github.com/21salyut12/weather-react-app',
      repoText: 'Weather App'},
    { filename: './images/web_portfolio_php.jpg',
      title: 'Web Portfolio',
      description: 'The project contains a login/signup page, a web portfolio with informations about myself, similar to a CV and previews of some projects I had made until then.\nAlso in this project I used the Javascript Google Maps API to show places I visited on the map.\nThe Login/Signup pages and the connection to the database are all implemented using PHP, the rest of the web portfolio has been developed using Javascript, HTML and CSS.',
      alt: 'Web Portfolio PHP',
      link: '', //Unavailable link
      repoLink: 'https://github.com/21salyut12/Personal-Web-Portfolio',
      repoText: 'Web Portfolio'},
    { filename: './images/todo_js.jpg',
      title: 'To Do List',
      description: 'This project was about developing a web page using simple Javascript, HTML, CSS where users can add, update and delete their tasks.',
      alt: 'To Do List with JS',
      link: 'https://21salyut12.github.io/to-do_list/',
      repoLink: 'https://github.com/21salyut12/to-do_list',
      repoText: 'To Do List'},
    { filename: './images/static_qr_code.jpg',
      title: 'QR Code Static Page',
      description: 'The scope of this project was to create a static QR code page. To build this project I used HTML and CSS.',
      alt: 'QR-Card',
      link: 'https://21salyut12.github.io/QR-Code-Component/',
      repoLink: 'https://github.com/21salyut12/QR-Code-Component',
      repoText: 'QR Code Static Page'},
    { filename: './images/static_calendar.jpg',
      title: 'Static Calendar',
      description: 'This project represents a static web page containing a calendar. Here just like the project above I use HTML and CSS.',
      alt: 'Calendar',
      link: 'https://21salyut12.github.io/Calendar/',
      repoLink: 'https://github.com/21salyut12/Calendar',
      repoText: 'Static Calendar'},
    { filename: './images/hex_color_generator_js.jpg',
      title: 'HEX Color Generator',
      description: 'The goal of this project was to build a random color generator, that when pressed the button on the page it would generate a color and its corresponding hexadecimal value. As technologies used to build this, I used Javascript, HTML and CSS.',
      alt: 'Background-Color-Changer',
      link: 'https://21salyut12.github.io/bg-color-changer-hex_and_normal-/',
      repoLink: 'https://github.com/21salyut12/bg-color-changer-hex_and_normal-',
      repoText: 'HEX Color Generator'},
    { filename: './images/digital_clock_js.jpg',
      title: 'Digital Clock',
      description: 'With the help of Javascript, HTM and CSS the scope of this project is to display the current time on the web page.',
      alt: 'Digital Clock',
      link: 'https://21salyut12.github.io/DC/',
      repoLink: 'https://github.com/21salyut12/DC',
      repoText: 'Digital Clock'},
    { filename: './images/image_carousel.png',
      title: 'Image Carousel',
      description: 'This is a simple image carousel, the user can navigate between the predefined images by using the available buttons on the web page. Technologies used: HTML and CSS.',
      alt: 'Image Carousel',
      link: 'https://21salyut12.github.io/Image-Carousel/',
      repoLink: 'https://github.com/21salyut12/Image-Carousel',
      repoText: 'Image Carousel'},
    { filename: './images/random_choice.jpg',
      title: 'Random Choice',
      description: 'This project is similar with the Hex Color Generator one. I have developed a web page using Javascript, HTML, CSS where upon clicking a button the web page generates a random choice.\nFor example when I wanted to decide what programming language to learn that day I used the web page to generate me, upon clicking the only button on the screen, one of the predefine choices.', alt: 'Random Choice Generator',
      link: 'https://21salyut12.github.io/random-choice-generator/',
      repoLink: 'https://github.com/21salyut12/random-choice-generator',
      repoText: 'Random Choice'},
    { filename: './images/static_product_preview.jpg',
      title: 'Product Preview Static Page',
      description: 'This website consists of an ad to a fictional product and it\'s been built with HTML and CSS.',
      alt: 'Product Preview Static Page',
      link: 'https://21salyut12.github.io/Product-Preview-Card-Component/',
      repoLink: 'https://github.com/21salyut12/Product-Preview-Card-Component',
      repoText: 'Product Preview Static Page'}
];

// Get the parent ul element
const imageList = document.getElementById('imageList');

// Loop through the images array and create li elements
images.forEach(image => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const titleP = document.createElement('p'); // Create a new <p> element for the title
    const descriptionP = document.createElement('p');
    const repoLink = document.createElement('a'); // Create a new <a> element for the repository link
    const repoText = document.createElement('p'); // Create a new <p> element for the repository text

    a.href = image.link;
    img.src = image.filename;
    img.alt = 'project photo';
    img.id = image.alt.toLowerCase().replace(/\s+/g, '-');
    titleP.textContent = image.title; // Set the title text
    descriptionP.textContent = image.description;

    repoLink.href = image.repoLink; // Set the repository link
    repoText.textContent = image.repoText;

    li.appendChild(titleP); // Append the title paragraph
    li.appendChild(descriptionP);
    li.appendChild(repoLink); // Append the repository link
    repoLink.appendChild(repoText); // Append the repository text
    li.appendChild(a);
    a.appendChild(img);
    imageList.appendChild(li);

    // Add margin to the image to create spacing
    img.style.marginBottom = '50px';
    descriptionP.style.margin = '0rem 20rem 0rem 20rem';

    repoLink.style.textDecoration = 'none';
    repoText.style.color = '#FFA62B';
    repoText.addEventListener("mouseenter", () => {
      repoText.style.textDecoration = 'underline';
    });
    repoText.addEventListener("mouseleave", () => {
      repoText.style.textDecoration = 'none';
    });
});
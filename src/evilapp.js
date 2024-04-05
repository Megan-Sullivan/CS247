// The following code is pretty much copy pasted from Copilot (Bing AI), I decided to leave it this way on this version of my app.js aka it's evil counterpart evilapp.js 
// so comparisons can be made to see everything I changed from this and make sure
// I fully comprehend what the code is doing, of course there are things within this I came up with on my own mostly finding the ideal wario image, 
// I had to convert a .mp4 to a .mp3 file, and work with ai to get it to generate the code so it finally looked the way I wanted, it was not quick and easy,
// I probably spent 3 hours on this easy and just for funsies pretty much, I hope you enjoy it :D

// My official submission for this assignment is app.js, this is just a bonus

// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener('DOMContentLoaded', (event) => {

    // Set the page background to dark grey
    document.body.style.backgroundColor = 'black';

    // Define the warrior colors
    const warriorColors = ['gold', 'blue', "purple", "green", "white"];

    // Function to apply warrior colors to text
    function applyWarriorColors(element) {
        // Get the text content of the element
        let text = element.textContent;

        // Split the text into an array of words
        let words = text.split(' ');

        // Map each word to a span element with the appropriate color
        words = words.map((word, index) => {
            // Create a new span element
            let span = document.createElement('span');

            // Set the text content of the span to the word
            span.textContent = word + ' '; // Add a space after the word to preserve spacing

            // Set the color of the span to the appropriate warrior color
            span.style.color = warriorColors[index % warriorColors.length];

            // Return the span element
            return span.outerHTML;
        });

        // Join the array of span elements into a string and set it as the HTML content of the element
        element.innerHTML = words.join('');
    }

    // This will create a new 'link' element, set its attributes to link the Google Fonts stylesheet, and append it to the head of the document.
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Creepster&display=swap'; // Change 'Creepster' to 'Nosifer' if you prefer that font.
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // The createElement method creates an Element Node with the specified name.
    // Here we're creating a 'main' element.
    const main = document.createElement('main');

    // The appendChild method appends a node as the last child of a node.
    // Here we're appending the 'main' element to the body of the document.
    document.body.appendChild(main);

    // Similarly, we create a 'section' element and append it to the 'main' element.
    const section = document.createElement('section');
    main.appendChild(section);

    // We create an 'h1' element, set its text content, and append it to the 'section' element.
    const h1 = document.createElement('h1');
    h1.style.fontFamily = 'Creepster';
    h1.textContent = 'Homework 01';
    section.appendChild(h1);

    // We create the first 'p' element, set its text content, and append it to the 'section' element.
    const p1 = document.createElement('p');
    p1.style.fontFamily = 'Creepster';
    p1.textContent = 'For this homework, I want you to recreate this HTML page using JavaScript and the DOM API. This means, the HTML should have a blank body and minimal head. Once the page loads, use JavaScript to recreate all the elements from the original page.';
    section.appendChild(p1);

    // We create the second 'p' element and append it to the 'section' element.
    const p2 = document.createElement('p');
    section.appendChild(p2);

    // We create a text node and append it to the second 'p' element.
    // Text nodes are used to contain the text in an element.
    p2.style.fontFamily = 'Creepster';
    p2.appendChild(document.createTextNode(' To make it fun, and maybe a bit tricky, I\'ve added several types of elements. Some elements are pretty simple like these ' ));
    
    // We create a 'code' element, set its text content, and append it to the second 'p' element.
    const code = document.createElement('code');
    code.textContent = '<p>';
    p2.appendChild(code);
    
    p2.appendChild(document.createTextNode(' tags. Others are more going to require extra attributes or mixing text nodes with element nodes.'));

    // We create an 'aside' element and append it to the body of the document.
    const aside = document.createElement('aside');
    document.body.appendChild(aside);

    // We create an 'img' element, set its source, and append it to the 'aside' element.
    const img = document.createElement('img');
    img.src = 'assets/wario.png';
    aside.appendChild(img);

    // We create a 'blockquote' element, set its text content, and append it to the 'aside' element.
    const blockquote = document.createElement('blockquote');
    blockquote.style.fontFamily = 'Creepster';
    blockquote.textContent = 'Wario says "I’m-a gonna win!" to homework';
    aside.appendChild(blockquote);

    // We create an 'audio' element, set its attributes, and append it to the 'aside' element.
    const audio = document.createElement('audio');
    audio.controls = true;
    audio.currentTime = 5; //There is a 5 second delay at the beginning of the .mp3 file so instead of editing it I decided just to add this to start it at 5 seconds in
    audio.autoplay = false;
    audio.src = 'assets/Super Wario Bros. medley.mp3';
    aside.appendChild(audio);

    // Apply warrior colors to the h1 element
    applyWarriorColors(h1);

    // Apply warrior colors to the p1 element
    applyWarriorColors(p1);

    // Apply warrior colors to the p2 element
    applyWarriorColors(p2);

    // Apply warrior colors to the blockquote element
    applyWarriorColors(blockquote);
});

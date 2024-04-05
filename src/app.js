/*
<!DOCTYPE html>
<html>
    <head>
        <title>WWCC - CS247 - Homework 01</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <link href="styles.css" rel="stylesheet" />
    </head>

    <body>
        <main>
            <section>
                <h1>Homework 01</h1>
                <p>
                    For this homework, I want you to recreate this HTML page using JavaScript and the DOM API.
                    This means, the HTML should have a blank body and minimal head.
                    Once the page loads, use JavaScript to recreate all the elements from the original page.
                </p>

                <p>
                    To make it fun, and maybe a bit tricky, I've added several types of elements.
                    Some elements are pretty simple like these <code>&lt;p&gt;</code> tags.
                    Others are more going to require extra attributes or mixing text nodes with element nodes.
                </p>
            </section>
        </main>

        <aside>
            <img src="assets/mario.png" />
            <blockquote>Mario says "Wahoo!" to homework</blockquote>
            <audio controls="true" autoplay="false" src="assets/Super Mario Bros. medley.mp3" />
        </aside>
    </body>
</html>
*/

// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
/*
<!DOCTYPE html>
<html>
    <head>
        <title>WWCC - CS247 - Homework 01</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <link href="styles.css" rel="stylesheet" />
    </head>

    <body>
*/
document.addEventListener('DOMContentLoaded', (event) => { // Basically this singe line does all of that code pasted above.

    // The createElement method creates an Element Node with the specified name.
    // Create a 'main' element.
    //  <main> and </main>
    const mainNode = document.createElement('main');

    // The appendChild method appends a node as the last child of a node.
    // Appending the 'main' element node to the body of the document.
    
    //  <body>
    //      <main> // appends the body into main as the last child of the main node
    //  </body>
    document.body.appendChild(mainNode);

    // Create a 'section' element node and append it to the 'main' element node.
    // <section> and </section>
    // At this point these three DOM elements create <main> <body> and <section>, the section is assigned to a constant which will be stored within the main node.
    const sectionNode = document.createElement('section');
    mainNode.appendChild(sectionNode);

    // Create an 'h1' element node, set its text content, and append it to the 'section' element node.
    // <h1>Homework 01</h1>
    const h1Node = document.createElement('h1');
    h1Node.textContent = 'Homework 01';
    sectionNode.appendChild(h1Node);

    // Create the first 'p' element node, set its text content, and append it to the 'section' element node.
    // <p> and </p> for paragraph 1
    const p1Node = document.createElement('p');
    // Set text content
    /*
                    For this homework, I want you to recreate this HTML page using JavaScript and the DOM API.
                    This means, the HTML should have a blank body and minimal head.
                    Once the page loads, use JavaScript to recreate all the elements from the original page.
    */
    p1Node.textContent = 'For this homework, I want you to recreate this HTML page using JavaScript and the DOM API. This means, the HTML should have a blank body and minimal head. Once the page loads, use JavaScript to recreate all the elements from the original page.';
    sectionNode.appendChild(p1Node); // Appends the above text to the section element node

    // Create the second 'p' element node and append it to the 'section' element node.
    // <p> and </p> for paragraph 2
    const p2Node = document.createElement('p');
    sectionNode.appendChild(p2Node);

    // We create a text node and append it to the second 'p' element node.
    // Text nodes are used to contain the text in an element.
    /*
    To make it fun, and maybe a bit tricky, I've added several types of elements. Some elements are pretty simple like these  
    */
    p2Node.appendChild(document.createTextNode(' To make it fun, and maybe a bit tricky, I\'ve added several types of elements. Some elements are pretty simple like these ' ));
    
    // We create a 'code' element node, set its text content, and append it to the second 'p' element node so it appears properly on the webpage.
    const codeNode = document.createElement('code');
    // <code>&lt;p&gt;</code>
    codeNode.textContent = '<p>';
    p2Node.appendChild(codeNode); // Append the code <p> tag into the paragraph so it looks correct
    
    // tags. Others are more going to require extra attributes or mixing text nodes with element nodes.
    p2Node.appendChild(document.createTextNode(' tags. Others are more going to require extra attributes or mixing text nodes with element nodes.'));

    // Create an 'aside' element node and append it to the body of the document.
    // <aside> and </aside>
    const asideNode = document.createElement('aside');
    document.body.appendChild(asideNode); // This will append the aside node within the document body where the mario image and music go

    // Create an 'img' element node, set its source, and append it to the 'aside' element node.
    const imgNode = document.createElement('img');
    // <img src="assets/mario.png" />
    imgNode.src = 'assets/mario.png'; // Specifies the location of the mario image to be appended to the aside node
    asideNode.appendChild(imgNode); // Appends the image to the aside node

    // Create a 'blockquote' element node, set its text content, and append it to the 'aside' element node.
    // <blockquote></blockquote>
    const blockquoteNode = document.createElement('blockquote');
    // Mario says "Wahoo!" to homework
    blockquoteNode.textContent = 'Mario says "Wahoo!" to homework';
    asideNode.appendChild(blockquoteNode); // Appends the block quote node to the append node

    // Create an 'audio' element node, set its attributes, and append it to the 'aside' element node.
    // <audio controls="true" autoplay="false" src="assets/Super Mario Bros. medley.mp3" />
    const audioNode = document.createElement('audio');
    audioNode.controls = true; // <audio controls="true"
    audioNode.autoplay = false; // autoplay="false"
    audioNode.src = 'assets/Super Mario Bros. medley.mp3'; // src="assets/Super Mario Bros. medley.mp3"
    asideNode.appendChild(audioNode); // Appends the audio node to the aside node.
});

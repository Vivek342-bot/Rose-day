<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For You <3</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Hey <span id="name">[Your Crush’s Name]</span>,</h1>
        <p>Welcome to a little surprise I made just for you.</p>
    </header>

    <section class="intro">
        <img src="assets/images/heart.jpg" alt="Heart Image">
        <p>This website
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f9f3ff;
    color: #4a4a4a;
    text-align: center;
    padding: 20px;
}

header {
    margin-top: 50px;
    font-size: 2.5em;
    color: #ff6f61;
}

#name {
    color: #4e94e7;
}

h2 {
    color: #ff6f61;
    font-size: 2em;
    margin-top: 30px;
}

ul {
    list-style-type: none;
    margin-top: 20px;
}

ul li {
    font-size: 1.2em;
    margin-bottom: 10px;
}

.quote {
    margin-top: 40px;
    font-size: 1.5em;
    font-style: italic;
    color: #ff6f61;
}

footer {
    margin-top: 50px;
    font-size: 1em;
    color: #4a4a4a;
}

footer a {
    color: #4e94e7;
    text-decoration: none;
    font-weight: bold;
}
document.addEventListener('DOMContentLoaded', () => {
    const name = document.getElementById("name");

    // Add a small interactive feature
    name.addEventListener('click', () => {
        alert("You just made me smile!");
    });
});
<img src="https://via.placeholder.com/300/ff6f61/ffffff?text=I+Heart+You" alt="Heart Image">

const fs = require('fs');

const names = ['henry', 'sarah', 'belle']

const template =
    `< !DOCTYPE html >
    <
    html lang = "en" >
    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta http - equiv = "X-UA-Compatible"
content = "IE=edge" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >

    <
    link href = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
rel = "stylesheet"
integrity = "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
crossorigin = "anonymous" >
    <
    title > Dream Team < /title> <
    /head> <
    body >

    <
    header class = "bg-light" >
    <
    /header>


    <
    main class = "container" >

    <
    div class = "row" >
    <
    div class = "col-4 card border-success my-5 pb-5"
style = "max-width: 20rem;" >
    <
    div class = "card-header" > Header < /div> <
    div class = "card-body" >
    <
    h4 class = "card-title" > Success card title < /h4> <
    p class = "card-text" > Some quick example text to build on the card title and make up the bulk of the card 's
content. < /p> <
    /div> <
    /div>

    <
    div class = "col-4 card border-success my-5 pb-5"
style = "max-width: 20rem;" >
    <
    div class = "card-header" > Header < /div> <
    div class = "card-body" >
    <
    h4 class = "card-title" > Success card title < /h4> <
    p class = "card-text" > Some quick example text to build on the card title and make up the bulk of the card 's
content. < /p> <
    /div> <
    /div>

    <
    div class = "col-4 card border-success my-5 pb-5"
style = "max-width: 20rem;" >
    <
    div class = "card-header" > Header < /div> <
    div class = "card-body" >
    <
    h4 class = "card-title" > Success card title < /h4> <
    p class = "card-text" > Some quick example text to build on the card title and make up the bulk of the card 's
content. < /p> <
    /div> <
    /div> <
    /div>

    <
    /main>

    <
    script src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
integrity = "sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
crossorigin = "anonymous" >
    <
    /script> <
    script src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
integrity = "sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
crossorigin = "anonymous" >
    <
    /script>

    <
    /body> <
    /html>`











fs.writeFileSync('./dist/index.html', template, 'utf-8');
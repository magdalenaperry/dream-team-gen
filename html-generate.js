// create template and html page here

const cards = function(cardteam){
    let membersCard = ``;
    for (let i = 0; i < cardteam.length; i++) {
        console.log(cardteam[i])
        if(cardteam[i].role === "Manager"){
            // creating and add manager card
            membersCard += `<div class="col-4 card border-success my-5 pb-5">
    <div class="card-header fs-3">${cardteam[i].name}</div>
    <div class="card-body">
        <h4 class="card-title">${cardteam[i].role}</h4>
        <p class="card-text">ID: ${cardteam[i].id}</p>
        <p class="card-text">Office #: ${cardteam[i].officeNumber}</p>
        <a href = "mailto:${cardteam[i].email}"
        class = "card-text">${cardteam[i].email}</a>
    </div>
</div>`
        } else if (cardteam[i].role === "Engineer"){
membersCard += `<div class="col-4 card border-success my-5 pb-5">
    <div class="card-header fs-3">${cardteam[i].name}</div>
    <div class="card-body">
        <h4 class="card-title">${cardteam[i].role}</h4>
        <p class="card-text">ID: ${cardteam[i].id}</p>
        <div><a class="card-text">www.github.com/${cardteam[i].github}</a></div><br>
        <div><a href = "mailto:${cardteam[i].email}"
        class = "card-text">${cardteam[i].email}</a></div>
    </div>
</div>`
        }else{
membersCard += `<div class="col-4 card border-success my-5 pb-5">
    <div class="card-header fs-3">${cardteam[i].name}</div>
    <div class="card-body">
        <h4 class="card-title">${cardteam[i].role}</h4>
        <p class="card-text">ID: ${cardteam[i].id}</p>
        <p class="card-text">School: ${cardteam[i].school}</p>
        <a href = "mailto:${cardteam[i].email}"
        class = "card-text">${cardteam[i].email}</a>
    </div>
</div>`
        }
    }
    return membersCard;
}


const fileGenerate = function (team) {
    console.log(team);
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Dream Team</title>
</head>
<body>
    
<header class="bg-dark py-5"> 
<h1 class= "text-light text-center display-1">Dream Team</h1>
</header>


<main class="container text-center">

<div class="row">
${cards(team)}

</div>

</main>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
    integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous">
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
    integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous">
</script>

</body>
</html>

`
}

module.exports = fileGenerate;
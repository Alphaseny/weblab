
let tabusers = [];

let coche = document.getElementById("coche");
coche.addEventListener("change", () => {
    coche.classList.toggle("ajouter");
})

let btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();

    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let num = document.getElementById("num");
    let email = document.getElementById("email");
    let mdp = document.getElementById("mdp");
    let cmdp = document.getElementById("cmdp");
    let formulaire = document.getElementById("formulaire");
    let dvformulaire = document.getElementById("dvformulaire");



    if(!coche.checked){
        alert("Coche la case pour la validation");
        return;
    }

    if (nom.value.trim() === "" || prenom.value.trim() === "" || num.value.trim() === "" || email.value.trim() === "" || mdp.value.trim() === "" || cmdp.value.trim() === "") {
        alert("Veuillez renseigner tous les champs");
        return;
    }

    let emailcontarol = /^[^\s@]+@gmail.com+$/;
    if (!emailcontarol.test(email.value.trim())) {
        alert("Veuillez entrer une adresse email valide");
        return;
    }

    if (mdp.value.trim() !== cmdp.value.trim()) {
        alert("Les mots de passe doivent être identiques");
        return;
    }

    let stock = {
        nom: nom.value.trim(),
        prenom: prenom.value.trim(),
        num: num.value.trim(),
        email: email.value.trim(),
        mdp: mdp.value.trim(),
        cmdp: cmdp.value.trim()
    };

    tabusers.push(stock);
    // alert("Vous avez créer votre compte");

if(dvformulaire){
    let elbtn = dvformulaire.children[7];
    let vconf = document.getElementById("conf")
    let conf = document.createElement('p');
    conf.setAttribute("id","conf");
    conf.textContent = "Vous avez créer votre compte";
    if(vconf){
        vconf.remove();
        elbtn.after(conf);
    }
    else{
        elbtn.after(conf);
    }
}

    console.log(tabusers);
    window.close();
    window.open("Devoir2.html");

    formulaire.reset();
    return;

// async function fetchutilisateur(){
//     const chemin = await fetch("https://restcountries.com/v3.1/independent?status=true&fields=languages,caqpital");
//     if(chemin.ok){
//         return chemin.json();
//     }
//     throw new Error("Impossible de contacter le serveur")   
// }
// fetchutilisateur().then(users =>{console.log(users)})
// .catch(error => console.error('Impossible de contacter le serveur ', error));

// fetch("https://restcountries.com/v3.1/independent?status=true&fields=languages,capital")
// .then(val =>val.json())
// .then(donne =>console.log(donne))
})

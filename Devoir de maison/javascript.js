let mdp = document.querySelector(".mdp");
let cmdp = document.querySelector('.cmdp');
let dv = document.querySelector('.div');
let btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    if (mdp.value != cmdp.value) {
        console.log(e)
        let val = document.createElement("p");
        val.textContent = "Les mots de passe ne correspondent pas.";
        val.setAttribute('class', 'erreur');
        dv.append(val);
        e.preventDefault();
    }
});

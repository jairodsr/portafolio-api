//console.log("hola");

const API_URL = "https://api.github.com/users/jairodsr/repos";

async function getRepos() {
    const result = await fetch(API_URL);
    const results = await result.json();
    showRepos(results);
}

function showRepos(repos){
    
    let render = "<ul>";
    repos.forEach((repositorio) =>{
        const {name} = repositorio;
        const {login} = repositorio.owner;
        const {avatar_url:img} = repositorio.owner;
        const {html_url} = repositorio;

        render += `<li>
                    <span> Nombre del Proyecto : ${name} </span>
                    <p> Author : ${login} </p>
                    <img src= "${img}"/>
                    <button><a href="${html_url}" target="_blank"> Ver repositorio </a></button>
                    </li>
                    `;
        });
    render += "</ul>";

    const container = document.querySelector(".box-repos");
    container.innerHTML = render;
}

getRepos();
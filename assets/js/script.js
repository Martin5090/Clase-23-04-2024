import { robots } from "./robots.js";


console.log(robots[0].series)
console.log(robots[0].id);
console.log(robots[0].name);

const {series,id,name} = robots[0];
console.log('----------------------------------');
console.log(`La serie es :${series}`);
console.log(`El id es: ${id}`);
console.log(`El nombre es: ${name}`);
console.log('----------------------------------');
//Find
const getRobotByID = (id='013') => {
    //Find = Encontrar ColdBack:Funcion que se pasa por parametros
    return robots.find((robot)=>{
        return robot.id===id;
    });

}

console.log(getRobotByID("012"));

//Filter
const getRobotBySeries = (series=1) =>{
    //Filter = Filtrar Trae mas de un dato almacenado
    return robots.filter((robot)=>{
        return robot.series===series
    });
}

console.log(getRobotBySeries(2));
console.table(getRobotBySeries(2));

const createCard = (series, id, name, weapon, avatar, sprite1) => {
    return `
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card">
                <img src="${avatar}" class="card-img-top" alt="${name}">
                <img src="${sprite1}" class="card-img-top mt-1 w-50" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p>${series}</p>
                    <p>${weapon}</p>
                </div>
            </div>
        </div>
    `;
};

const robotCardsRow = document.getElementById(`robotCardsRow`);
let cardsHTML = ""; // Variable para almacenar las cadenas HTML

robots.forEach((robot) => {
    const card = createCard(robot.series, robot.id, robot.name, robot.weapon, robot.avatar, robot.sprite1);
    cardsHTML += card; // Agregar la tarjeta al HTML acumulado
});

robotCardsRow.innerHTML = cardsHTML; // Una vez que se han construido todas las tarjetas, se adjunta al DOM de una vez
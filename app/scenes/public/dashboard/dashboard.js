import { navigateTo } from "../../../Router";

export function Dashboard() {
    document.getElementById('root').innerHTML = `
    <h1>Bienvenido a Concord</h1>

    <p>Reserve su vuelo aqui:</p>

    <div class="contenedor">
    
    <div class="cartagena">
    <p>Cartagena</p>
    <img>
    <button type="submit" id="costa">Reserva ya</button>
    </div>

    <div class="bogota">
    <p>Bogotá</p>
    <button type="submit" id="capital">Reserva ya</button>
    </div>

    <div class="cali">
    <p>Cali</p>
    <button type="submit" id="pacifico">Reserva ya</button>
    </div>
 
    </div>
    `

    const $buttonCosta = document.getElementById('costa');
    $buttonCosta.addEventListener('click',() => {
        navigateTo('/login');
    });

    const $buttonCapital = document.getElementById('capital');
    $buttonCapital.addEventListener('click',() => {
        navigateTo('/login');
    });

    const $buttonPacifico = document.getElementById('pacifico');
    $buttonPacifico.addEventListener('click',() => {
        navigateTo('/login');
    });


}


import { navigateTo } from "../../../Router";


export function Login() {
    document.getElementById('root').innerHTML = `
    <form>
    <input type="email" placeholder="autocomplete"/>
    <input type="password" placeholder="autocomplete"/>
    <button id="login-button">Entrar</button>
    <button id="register-button">Registrarse</button>
    </form>`;

    const $userEmail = root.querySelector('input[type="email"]');
    const $userPassword = root.querySelector('input[type="password"]');

    const $myForm = root.getElementsByTagName('form')[0];

    $myForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        if(!$userEmail.value || !$userPassword.value){
            alert('Completa los campos')
        }

        const users = await fetch('http://localhost:3000/users/2')


        const userJson = await users.json();

        const user = userJson.find(e => e.email === $userEmail);
        if(user){
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem('token',token);
            navigateTo('/');
        } else {
            alert("Credenciales incorrectas");
        }
    })

    const registerButton = document.getElementById('register-button');
    registerButton.addEventListener('click', () => {
        navigateTo('/register');
    })
}
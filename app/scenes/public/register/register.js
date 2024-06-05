import { navigateTo } from "../../../Router";


export function Register(){
    document.getElementById('root').innerHTML = `
    <form>
    <input type="text" placeholder="nombre"/>
    <input type="email" placeholder="email@example.com"/>
    <input type="password" placeholder="password123"/>
    <input type="date"/>
    <label>Trabajas para Concord</label><input type="checkbox"/>
    <button>Crear usuario</button>
    </form>
    `;

    const key = true

    let roleId = 'User';

    const $userName = root.querySelector('input[type="text"]');
    const $userEmail = root.querySelector('input[type="email"]');
    const $userPassword = root.querySelector('input[type="password"]');
    const $userDate = root.querySelector('input[type="date"]');
    const $keyUser = root.querySelector('input[type="checkbox"]')


    const $myForm = root.getElementByTagName('form')[0];

    $myForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        if(!$userName.value || !$userEmail.value || !$userPassword.value){
            alert('Por favor llene todos los espacios');
            return;
        }

        if($keyUser.value === true){
            role = 'Admin'
        }

        const userCreated = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-Type': 'aplication/json'
            },
            body: JSON.stringify({
                name: $userName.value,
                email: $userEmail.value,
                password: $userPassword.value,
                date: $userDate.value,
                role: role
            })
        })

        if(userCreated){
            alert('Usuario creado exitosamente');
            navigateTo('/login')
        }

        const loginButton = document.getElementById('login-button');
        loginButton.addEventListener('click', () => {
            navigateTo('/login');
        })


    })
}
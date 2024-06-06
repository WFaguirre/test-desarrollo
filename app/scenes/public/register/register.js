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


    const $myForm = root.getElementByTagName('form')[0];
    $myForm.addEventListener('submit', async (event) => {
        event.preventDefault();


        const $userName = root.querySelector('input[type="text"]');
        const $userEmail = root.querySelector('input[type="email"]');
        const $userPassword = root.querySelector('input[type="password"]');
        const $userDate = root.querySelector('input[type="date"]');
        const $keyUser = root.querySelector('input[type="checkbox"]');

        if(!$userName.value || !$userEmail.value || !$userPassword.value){
            alert('Por favor llene todos los espacios');
            
        } else {

            const data = {
                userName: userName.value,
                userEmail: userEmail.value,
                userPassword: userPassword.value
            }

        }

        if($keyUser.value === true){
            role = 'Admin'
        }

        const userCreated = fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application json'
            },
            body: JSON.stringify(data)

            
        })

       

        if(userCreated){
            alert('Usuario creado exitosamente');
            navigateTo('/login')
        }


    });

    const loginButton = document.getElementById('login-button');
    loginButton.addEventListener('click', () => {
    navigateTo('/login');
    });
}
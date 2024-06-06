import { Dashboard } from "./scenes/public/dashboard/dashboard";
import { Notfound } from "./scenes/public/not-found/not-found";
import { Register } from "./scenes/public/register/register"
import { Login } from "./scenes/public/login/login"
 
export const routes = {
    public : [
        {path: '/', scenes: Dashboard},
        {path: '/not-found', scenes: Notfound},
        {path: '/register', scenes: Register},
        {path: '/login', scenes: Login}
    ],
    private : [
        {}
    ]
}
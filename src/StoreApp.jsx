import {Navbar} from "./componentes/layout/Navbar.jsx";
import {LoginPage} from "./auth/pages/LoginPage.jsx";
import {UserPage} from "./pages/UserPage.jsx";
import {useAuth} from "./auth/hooks/useAuth.js";


export const StoreApp = ()=> {

    const { login, handlerLogin, handlerLogout } = useAuth();
    return(
        <>
            {
                login.isAuth ?
                    (
                        <>
                            <Navbar login={ login }
                                    handlerLogout={handlerLogout}/>
                            <UserPage/>
                        </>

                    ):
                    <LoginPage handlerLogin={handlerLogin}/>
            }

        </>
    )
}
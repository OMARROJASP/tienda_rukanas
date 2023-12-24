import {useUsers} from "../hooks/useUsers.js";
import {ModalFormulario} from "../componentes/ModalFormulario.jsx";
import {ListaUsuario} from "../componentes/ListaUsuario.jsx";

export const UserPage = ( )=> {
    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
    } = useUsers();

    return(
        <>
            {!visibleForm || <ModalFormulario
                userSelected={userSelected}
                initialUserForm={initialUserForm}
                handlerAddUser={handlerAddUser}
                handlerCloseForm={handlerCloseForm}
            />}
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    <div className="col">
                        {visibleForm || <button
                            className="btn btn-primary my-2"
                            onClick={handlerOpenForm}>
                            Nuevo Usuario
                        </button>}

                        {
                            users.length === 0
                                ? <div className="alert alert-warning">No hay usuarios en el sistema!</div>
                                :
                                <ListaUsuario
                                    users={users}
                                    handlerUserSelectedForm={handlerUserSelectedForm}
                                    handlerRemoveUser={handlerRemoveUser}
                                />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
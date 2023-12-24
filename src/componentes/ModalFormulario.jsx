import {Formulario} from "./Formulario.jsx";

export const ModalFormulario = ({userSelected,initialUserForm,handlerAddUser,handlerCloseForm}) => {
    return(
        <div className="abrir-modal animacion fadeIn">
            <div className="modal " style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {userSelected.id > 0 ? 'Editar' : 'Crear'} Modal Usuarios
                            </h5>
                        </div>
                        <div className="modal-body">
                            <Formulario
                                initialUserForm={initialUserForm}
                                userSelected={userSelected}
                                handlerAddUser={handlerAddUser}
                                handlerCloseForm={handlerCloseForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
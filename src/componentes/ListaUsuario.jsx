import {useState} from "react";
import {Columunas} from "./Columunas.jsx";


export const ListaUsuario = ({handlerUserSelectedForm, handlerRemoveUser, users}) => {




    return(
      <>
          <h1>Lista de Usuario</h1>
        <table className="table table-hover table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map(({id, username, email }) =>

                    (
                        <Columunas
                            key={id}
                            id={id}
                            username={username}
                            email={email}
                            handlerRemoveUser={handlerRemoveUser}
                            handlerUserSelectedForm={handlerUserSelectedForm}
                        />
                    )

                )
            }
            </tbody>
        </table>
      </>

    )
}
import {useEffect, useState} from "react";


export const Formulario = (
    {userSelected, initialUserForm,handlerAddUser,handlerCloseForm}
) => {

    const [userForm, setUserForm] = useState(initialUserForm);

    const {id, username, password, email} = userForm;


    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: ''
        })
    }, []);
    const onInputChange =({target})=> {

        const {name, value} = target;

        setUserForm({
            ...userForm,
            [name]: value
            }

        )
    }


    const onSubmit = (event)=> {
        event.preventDefault();
        if (!username || (!password && id === 0) || !email) {
            alert('Ingrese todos los datos')
            return;
        }
        handlerAddUser(userForm)
        setUserForm(initialUserForm)
    }
    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    }

    return (
        <form onSubmit={onSubmit}>
                <input
                    className="form-control my-3 w-75"
                    name={'username'}
                    placeholder={'Ingrese su nombre'}
                    type={'text'}
                    value={username}
                    onChange={onInputChange}
                />
                <input
                    className="form-control my-3 w-75"
                    name={'password'}
                    placeholder={'Ingrese su contraseña'}
                    type={'password'}
                    value={password}
                    onChange={onInputChange}
                />
                <input
                    className="form-control my-3 w-75"
                    name={'email'}
                    placeholder={'Ingrese su correo'}
                    type={'email'}
                    value={email}
                    onChange={onInputChange}
                />
            <input type="hidden"
                   name="id"
                   value={id} />

            <button
                className="btn btn-primary"
                type="submit">
                {id > 0 ? 'Editar' : 'Crear'}
               </button>

                <button
                    className="btn btn-primary mx-2"
                    type="button"
                    onClick={() => onCloseForm()}>
                    Cerrar
                </button>
            </form>

    )
}
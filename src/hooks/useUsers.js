import {useReducer, useState} from "react";
import {usersReducer} from "../reducers/usersReducer.js";


const initialUser = [
    {
        id: 1,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },
]


const initialUserForm = {
    id:0,
    username: '',
    password: '',
    email: ''
}
export const useUsers = ()=> {

    const [users, dispatch] = useReducer(usersReducer, initialUser)
    const [userSelected, setUserSelected] = useState(initialUserForm)
    const [visibleForm, setVisibleForm] = useState(false);

    const handlerAddUser = (user) => {


        dispatch({
            type: (user.id === 0)?
                'addUser':
                'updateUser',
            payload: user
        })

        handlerCloseForm()
    }


    const handlerRemoveUser = (id) => {

        dispatch({
            type: 'removeUser',
            payload: id
        })

    }
    const handlerUserSelectedForm = (user) => {
        setVisibleForm(true);
        setUserSelected({...user});
    }

    const handlerOpenForm= () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm);
    }

    return{
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm
    }

}
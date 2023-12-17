import { createContext, useContext, useEffect, useState } from "react";


class UserData {
    constructor(username, password, name) {
        this.username = username;
        this.password = password;
        this.name = name;
    }
}

const UserContext = createContext();

export const useUsersContext = () => {
    return useContext(UserContext);
}

export const UsersProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const userRegister = () => {
        const newUser = new UserData(username, password, name);
        postUser(newUser);
    }

    return (
        <UserContext.Provider value={{ username, password, name, setUsername, setPassword, setName, userRegister }}>
            {children}
        </UserContext.Provider>
    )
}

//     POST METHOD    //

const postUser = async (newUser) => {
    const url = "http://localhost:8080/users/cadastrar";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });

        if (!response.ok) {
            return "Falha ao cadastrar tarefa";
        }

    } catch (error) {
        console.error("Erro ao fazer cadastro de usuário", error);
    }


}
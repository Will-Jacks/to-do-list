import { createContext, useContext, useEffect, useState } from "react";



class UserData {
    constructor(username, password, name, email) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
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
    const [email, setEmail] = useState('');

    const userRegister = () => {
        const newUser = new UserData(username, password, name, email);
        postUser(newUser);
    }

    return (
        <UserContext.Provider value={{ username, password, name, email, setEmail, setUsername, setPassword, setName, userRegister }}>
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

        if (response.ok) {
            alert("Usuário cadastrado com sucesso!");
            window.location.href = "http://localhost:5173/";
        }

        if (!response.ok) {
            throw new Error("Falha ao cadastrar usuário");
        }

    } catch (error) {
        if (error.message == "Falha ao cadastrar usuário") {
            alert("Usuário já cadastrado!");
        } else {
            console.log("Outro erro:", error);
            alert("Erro ao cadastrar usuário. Por favor, tente novamente mais tarde.");
        }
    }

}
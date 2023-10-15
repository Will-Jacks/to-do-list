import { createContext, useContext, useState } from "react";

export const FormContext = createContext();

export const useFormContext = () => {
    return useContext(FormContext);
}

export const FormProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const updateValue = (newTask) => {
        setTasks([...tasks, newTask]);
    }

    return (
        <FormContext.Provider value={{ tasks, updateValue }}>
            {children}
        </FormContext.Provider>
    );
}
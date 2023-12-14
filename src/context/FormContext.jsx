import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

const useFormContext = () => {
    return useContext(FormContext);
}

function FormProvider({ children }) {
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('Pessoal');

    return (
        <FormContext.Provider value={{ inputValue, selectValue, setInputValue, setSelectValue }}>
            {children}
        </FormContext.Provider>
    )
}

export { FormContext, useFormContext, FormProvider }
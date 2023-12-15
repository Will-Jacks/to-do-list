import { createContext, useContext, useState } from "react";

export const RenderFormContext = createContext();

export function useRenderFormContext() {
    return useContext(RenderFormContext);
}

export const RenderFormProvider = ({children})=> {
    const [formState, setFormState] = useState(false);

    const updateFormState = (formState)=> {
        setFormState(formState);
    }

    return (
        <RenderFormContext.Provider value={{formState, updateFormState}}>
            {children}
        </RenderFormContext.Provider>
    )
}
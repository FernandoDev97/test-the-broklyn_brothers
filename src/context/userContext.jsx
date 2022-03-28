import { createContext, useState } from "react";

export const context = createContext();

export const ContextProvider = (props) => {
    const [open, setOpen] = useState(false)
    const [isShowAbout, setIsShowAbout] = useState(false);
    const [isShowProducts,  setIsShowProducts] = useState(false);
    const [isShowHealth, setIsShowHealth] = useState(false);
    return (
        <context.Provider
            value={{
                open,
                isShowAbout,
                isShowProducts,
                isShowHealth,
                setOpen,
                setIsShowAbout,
                setIsShowProducts,
                setIsShowHealth
            }}
        >
            {props.children}
        </context.Provider>
    )
}
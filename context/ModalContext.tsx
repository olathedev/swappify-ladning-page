'use client'
import React, { createContext, useState } from "react";

interface IModalContext {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

export const ModalContext = createContext<IModalContext | undefined>(undefined);

export const ModalProvider = ({children}: {children: React.ReactNode}) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
}

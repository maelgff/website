'use client'
import { createContext, useState, SetStateAction, Dispatch, PropsWithChildren } from 'react'

export interface TModals<T> {
	modalOpen: T | null
	openModal: Dispatch<SetStateAction<T | null>> | (() => void)
	closeModal: () => void
}

export interface TModalsWrapper<T> {
	defaultOpenedModal?: T | null
}

export const modalsState = {
	modalOpen: null,
	openModal: () => {},
	closeModal: () => {},
}

export const ModalsContext = createContext<TModals<unknown>>(modalsState)

export const ModalsWrapper: React.FC<PropsWithChildren<TModalsWrapper<string>>> = ({
	children,
	defaultOpenedModal,
}) => {
	const [modalOpen, openModal] = useState<unknown | null>(defaultOpenedModal ?? null)

	const closeModal = () => {
		openModal(null)
	}

	return (
		<ModalsContext.Provider value={{ modalOpen, openModal, closeModal }}>
			{children}
		</ModalsContext.Provider>
	)
}

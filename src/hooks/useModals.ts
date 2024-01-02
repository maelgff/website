import { useContext } from 'react'
import { ModalsContext } from '@/context/ModalsContext'

export const useModals = <T extends string>() => {
	const { modalOpen, openModal, closeModal } = useContext(ModalsContext)

	const isModalOpened = (modalType: T) => {
		return modalOpen === modalType
	}

	return { modalOpen, openModal, closeModal, isModalOpened }
}

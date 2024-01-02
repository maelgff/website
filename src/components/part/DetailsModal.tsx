import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useModals } from '@/hooks/useModals'
import { MODALS_NAMES } from '@/constants/modals'
import Image from 'next/image'
import { ProjectType } from '../Projects'

interface Props {
	activeProject: ProjectType | undefined
}

export const DetailsModal: React.FC<Props> = ({ activeProject }) => {
	const { closeModal, isModalOpened } = useModals()
	const cancelButtonRef = useRef(null)

	return (
		<Transition.Root show={isModalOpened(MODALS_NAMES.DETAILS_MODAL)} as={Fragment}>
			<Dialog
				as='div'
				className='relative z-30'
				initialFocus={cancelButtonRef}
				onClose={closeModal}
			>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>
				<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
					<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						>
							<Dialog.Panel className='relative transform max-w-[700px] h-fit-content overflow-hidden rounded-xl bg-[#232323] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl'>
								<Image width='700' className='w-[100%]' src={activeProject?.image ?? ''} alt={''} />
								<div className='p-6'>
									<h4 className='text-white text-4xl font-bold'>{activeProject?.title}</h4>
									<div className='text-brand flex flex-wrap gap-3 text-lg mt-2 mb-6'>
										{activeProject?.technos}
									</div>
									<div className='flex flex-wrap gap-3 flex-column'>
										{activeProject?.descriptionLines.map((d: string, idx: number) => {
											return <p key={`desc-${idx}`}>{d}</p>
										})}
									</div>
									<div className='mt-6'>
										<p className='font-bold text-lg mb-2'>
											Project links<span className='text-brand'>.</span>
										</p>
										<div className='flex items-center gap-3'>
											{activeProject?.githubLink && (
												<a
													href={activeProject?.githubLink}
													target='_blank'
													className='flex items-center gap-1 text-sm text-brand hover:underline outline-0'
												>
													<svg
														stroke='currentColor'
														fill='currentColor'
														viewBox='0 0 1024 1024'
														height='1em'
														width='1em'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path d='M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z'></path>
													</svg>
													source code
												</a>
											)}
											<a
												href={activeProject?.link}
												target='_blank'
												className='flex items-center gap-1 text-sm text-brand hover:underline outline-0'
											>
												<svg
													stroke='currentColor'
													fill='currentColor'
													viewBox='0 0 1024 1024'
													height='1em'
													width='1em'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path d='M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z'></path>
												</svg>
												live project
											</a>
										</div>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}

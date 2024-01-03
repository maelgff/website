import { Project } from './part/Project'
import { Reveal } from './utils/Reveal'
import imgLydia from '../assets/lydia.png'
import imgMoneyz from '../assets/moneyz.png'
import imgSaverglass from '../assets/saverglass.png'
import imgInsurance from '../assets/insurance.png'
import { DetailsModal } from './part/DetailsModal'
import { useState } from 'react'
import { StaticImageData } from 'next/image'

export type ProjectType = {
	image: StaticImageData
	title: string
	technos: string
	descriptionLines: string[]
	githubLink?: string
	link: string
}

export const Projects: React.FC<{}> = () => {
	const [activeProject, setActiveProject] = useState<ProjectType>()
	return (
		<section
			id='projects'
			className='relative z-10 m-auto md:p-24 px-6 py-[72px] overflow-hidden max-w-1150'
		>
			<div className='flex items-center gap-10 mb-10 flex-row'>
				<div className='w-full h-[1px] opacity-30 bg-[#ebecf3]'></div>
				<h3>
					<Reveal width='full'>
						<span className='font-black md:text-6xl text-4xl text-white'>
							Projects
							<span className='text-brand'>.</span>
						</span>
					</Reveal>
				</h3>
			</div>
			<div className='grid gap-8 md:grid-cols-projects grid-cols-1'>
				<Project
					name='Lydia website'
					image={imgLydia}
					description={
						'Lydia public website - You can see all the offers from Lydia, cards, accounts and help'
					}
					technos={'Worpress - Php'}
					link={'https://www.lydia-app.com/en'}
					setActiveProject={setActiveProject}
				/>
				<Project
					name='Moneyz'
					image={imgMoneyz}
					description={
						'Personal project - An app aggregating all your bank accounts and managing your wishlists'
					}
					technos={'Vite - React TS - Chakra - EsLint - Pocketbase'}
					link={'https://maelwishlist.netlify.app/'}
					githubLink='https://github.com/maelgff/moneyz'
					setActiveProject={setActiveProject}
				/>
				<Project
					name='Saverglass'
					image={imgSaverglass}
					description={
						'Saverglass public website - You can see all the products and expertise Saverglass offers'
					}
					technos={'jQuery - Php - Drupal'}
					link={'https://www.saverglass.com/en'}
					setActiveProject={setActiveProject}
				/>
				<Project
					name='Lydia student insurance'
					image={imgInsurance}
					description={
						'This project propose a form for students that will go abroad. After writting his info a student will be able to get a price for his insurance and pay it either by Lydia or by credit card'
					}
					technos={'Vite - React TS - Chakra - Jest - React testing library - EsLint - Go'}
					link={'https://services.lydia-app.com/front-student-insurance/'}
					githubLink='https://github.com/LydiaSolutions/front-student-insurance'
					setActiveProject={setActiveProject}
				/>
			</div>
			<DetailsModal activeProject={activeProject} />
		</section>
	)
}

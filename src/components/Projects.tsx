import { Project } from './part/Project'
import { Reveal } from './utils/Reveal'

export const Projects: React.FC<{}> = () => {
	return (
		<section id='projects' className='relative z-10 m-auto p-24 overflow-hidden max-w-1150'>
			<div className='flex items-center gap-10 mb-10 flex-row'>
				<div className='w-full h-[1px] opacity-30 bg-[#ebecf3]'></div>
				<h3>
					<Reveal width='full'>
						<span className='font-black text-6xl text-white'>
							Projects
							<span className='text-brand'>.</span>
						</span>
					</Reveal>
				</h3>
			</div>
			<div className='grid gap-8 grid-cols-projects'>
				<Project />
				<Project />
				<Project />
				<Project />
			</div>
		</section>
	)
}

import { ExperiencePart } from './part/ExperiencePart'
import { Reveal } from './utils/Reveal'

export const Experience: React.FC = () => {
	return (
		<section id='experience' className='relative z-10 m-auto p-24 overflow-hidden max-w-1150'>
			<div className='flex items-center gap-10 mb-10 flex-row'>
				<h3>
					<Reveal width='full'>
						<span className='font-black text-6xl text-white'>
							Experience
							<span className='text-brand'>.</span>
						</span>
					</Reveal>
				</h3>
				<div className='w-full h-[1px] opacity-30 bg-[#ebecf3]'></div>
			</div>
			<ExperiencePart
				company='Lydia'
				duration='April 2021 - Now'
				position='Lead front'
				place='Paris'
				description='I help build and scale Google Photos. Increased throughput of our primary services by
				70%. Migrated backend service from Java to Go. Also helped make it look prettier.'
				stack={['React', 'Typescript']}
			/>
			<ExperiencePart
				company='Ipsosenso'
				duration='February 2018 - April 2021'
				position='Full stack developer'
				place='Paris'
				description='I help build and scale Google Photos. Increased throughput of our primary services by
				70%. Migrated backend service from Java to Go. Also helped make it look prettier.'
				stack={['React', 'Typescript']}
			/>
		</section>
	)
}

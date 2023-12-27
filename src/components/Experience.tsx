import { Reveal } from './utils/Reveal'

export const Experience: React.FC = () => {
	return (
		<section id='experience' className='relative z-10 m-auto p-9 overflow-hidden max-w-1150'>
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
			<div className='mb-4'></div>
		</section>
	)
}

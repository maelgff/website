import { Reveal } from '../utils/Reveal'

interface Props {
	company: string
	duration: string
	position: string
	place: string
	description: string
	stack: string[]
}

export const ExperiencePart: React.FC<Props> = ({
	company,
	description,
	duration,
	position,
	place,
	stack,
}) => {
	return (
		<div className='mb-6 border-b border-[#232323] px-3 pb-6'>
			<div className='flex items-center justify-between mb-3'>
				<Reveal>
					<span className='font-bold text-xl'>{company}</span>
				</Reveal>
				<Reveal>
					<span className='text-lg'>{duration}</span>
				</Reveal>
			</div>
			<div className='flex items-center justify-between mb-3'>
				<Reveal>
					<span className='font-bold text-xl text-brand'>{position}</span>
				</Reveal>
				<Reveal>
					<span className='text-lg'>{place}</span>
				</Reveal>
			</div>
			<Reveal>
				<p className='mb-4 font-extralight text-lg'>{description}</p>
			</Reveal>
			<Reveal>
				<div className='flex flex-wrap gap-3'>
					{stack.map((techno: string) => {
						return (
							<span key={techno} className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>
								{techno}
							</span>
						)
					})}
				</div>
			</Reveal>
		</div>
	)
}

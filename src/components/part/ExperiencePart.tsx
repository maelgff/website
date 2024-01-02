import { Reveal } from '../utils/Reveal'

interface Props {
	company: string
	duration: string
	position: string
	place: string
	descriptionLines: string[]
	stack: string[]
}

export const ExperiencePart: React.FC<Props> = ({
	company,
	descriptionLines,
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
				<>
					{descriptionLines.map((l: string, idx: number) => {
						return (
							<p key={`desc-line-${idx}`} className='mb-4 font-extralight text-lg'>
								{l}
							</p>
						)
					})}
				</>
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

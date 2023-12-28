import { Reveal } from './utils/Reveal'

export const Intro: React.FC<{}> = () => {
	return (
		<section className='relative z-10 m-auto p-24 overflow-hidden max-w-1150 mb-24'>
			<div className='relative z-10 my-12'>
				<Reveal>
					<h1 className='font-black leading-[1.1] text-8xl'>
						Hey, I'm Mael<span className='text-brand'>.</span>
					</h1>
				</Reveal>
				<Reveal>
					<h2 className='font-extralight leading-[1.1] mt-4 text-4xl'>
						I'm a <span className='text-brand font-bold'>full stack developer</span>
					</h2>
				</Reveal>
				<Reveal>
					<p className='font-extralight my-6 max-w-[700px] text-lg'>
						I've spent the last 5 years building and scaling software for some pretty cool
						companies. I also teach people to paint online (incase you've got an empty canvas layin'
						around 🎨). Let's connect!
					</p>
				</Reveal>
				<Reveal>
					<button
						onClick={() => document.getElementById('#contact')?.scrollIntoView()}
						className='bg-brand z-20 overflow-hidden rounded text-lg text-black-8 py-3 px-6 cursor-pointer border-none'
					>
						Contact me
					</button>
				</Reveal>
			</div>
		</section>
	)
}
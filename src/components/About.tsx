import { SocialNetworks } from './part/SocialNetworks'
import { Reveal } from './utils/Reveal'

export const About: React.FC = () => {
	return (
		<section id='about' className='relative z-10 m-auto p-24 overflow-hidden max-w-1150'>
			<div className='flex items-center gap-10 mb-10 flex-row'>
				<h3>
					<Reveal width='full'>
						<span className='font-black text-6xl text-white'>
							About
							<span className='text-brand'>.</span>
						</span>
					</Reveal>
				</h3>
				<div className='w-full h-[1px] opacity-30 bg-[#ebecf3]'></div>
			</div>
			<div className='grid grid-cols-about gap-6'>
				<div>
					<Reveal>
						<p className='mb-6 text-lg font-extralight first-letter:font-bold first-letter:float-left first-letter:mr-1 first-letter:text-2xl first-letter:p-3 first-letter:bg-[#232323] first-letter:text-white first-letter:rounded'>
							Hey ! I'm Mael, if you haven't already gathered that by now. I'm a full stack
							developper from Paris, France. I specialize in the frontend, primarily React and then
							Next JS, but love building with whatever tools are right for the job.
						</p>
					</Reveal>
					<Reveal>
						<p className='mb-6 text-lg font-extralight'>
							I currently work for Lydia app on the desktop verison we are buiding from scratch. I
							also like to explore new things and learn new technos.
						</p>
					</Reveal>
					<Reveal>
						<p className='mb-6 text-lg font-extralight'>
							Outside of work, I love to watch and do sport. I'm doing tennis in competition. 🎾 I
							am currently ranked 5/6 in France and also played for the Stellenbosch university in
							South Africa. I also like play some video games from time to time.
						</p>
					</Reveal>
					<Reveal>
						<p className='mb-6 text-lg font-extralight'>
							I'm passively looking for new positions where I can merge my love for code with a
							really strong motivation to participate to an innovative company. If you think you've
							got an opening that I might like, let's connect 🔗
						</p>
					</Reveal>
					<Reveal>
						<div className='flex items-center gap-4'>
							<div className='flex items-center gap-2 text-brand text-lg'>
								<span>My links</span>
								<svg
									stroke='currentColor'
									fill='currentColor'
									viewBox='0 0 1024 1024'
									height='1em'
									width='1em'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z'></path>
								</svg>
							</div>
							<SocialNetworks />
						</div>
					</Reveal>
				</div>
				<div className='relative'>
					<Reveal>
						<div>
							<h4 className='flex items-center mb-6'>
								<svg
									className='text-brand'
									stroke='currentColor'
									fill='currentColor'
									viewBox='0 0 1024 1024'
									height='2.4rem'
									width='2.4rem'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z'></path>
								</svg>
								<span className='font-bold relative ml-2 text-2xl'>Use at work</span>
							</h4>
							<div className='flex flex-wrap gap-3 mb-12'>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>React</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Next</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Typescript</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Chakra</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Tailwind</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Jest</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>
									React testing lib
								</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Playwright</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Cypress</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>HTML</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>CSS</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Javascript</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Java</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Spring</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Symfony</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>MySQL</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Github</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Figma</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Jira</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Jenkins</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Docker</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>GCP</span>
							</div>
						</div>
					</Reveal>
					<Reveal>
						<div>
							<h4 className='flex items-center mb-6'>
								<svg
									className='text-brand'
									stroke='currentColor'
									fill='currentColor'
									viewBox='0 0 1024 1024'
									height='2.4rem'
									width='2.4rem'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 0 1 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 0 1 8 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z'></path>
								</svg>
								<span className='font-bold relative ml-2 text-2xl'>Use for fun</span>
							</h4>
							<div className='flex flex-wrap gap-3 mb-12'>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Astro</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Node</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Go</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Pocketbase</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Netlify</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Heroku</span>
								<span className='text-md bg-[#232323] py-[2px] px-2 rounded-full'>Mongo DB</span>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	)
}

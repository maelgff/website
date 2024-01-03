import { ExperiencePart } from './part/ExperiencePart'
import { Reveal } from './utils/Reveal'

export const Experience: React.FC = () => {
	return (
		<section
			id='experience'
			className='relative z-10 m-auto md:p-24 px-6 py-[72px] overflow-hidden max-w-1150'
		>
			<div className='flex items-center gap-10 mb-10 flex-row'>
				<h3>
					<Reveal width='full'>
						<span className='font-black md:text-6xl text-4xl text-white'>
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
				descriptionLines={[
					'• Mentoring and coaching',
					'Provide technical leadership and guidance to the development team. Foster aculture of learning and knowledge sharing among developers. Lead the front-end team and ensure strong links between developers',
					'• Technical vision and roadmap',
					'Define and continuously improve developer integration. Help create an attractive environment for developers',
					' Migration of all front-end projects to React TypeScript, scss, addition of CI/CD via github actions, unit tests with Jest, react-testing-librairy, e2e tests via Playwright, translations via Phrase, react & scss linter, tech and functional documentation.',
					'Creation of a Lydia ui-kit, use of storybook & Chakra',
					'Creation of several internal tools, ot configure bank aggregation (AIS / PIS), manage payments via IBAN and enable fraud levels to be assessed.',
					'User event tracking via Rudderstack &Amplitude',
					'Migration and enhancement of the platform managing user KYC, adding an admin section, automatic identity review via OCR',
					'• Hiring and integration',
					'Define and continuously improve developer integration',
					'',
				]}
				stack={[
					'React',
					'Next',
					'Typescript',
					'Chakra',
					'Tailwind',
					'Jest',
					'Playwright',
					'Cypress',
					'Symfony',
					'MySQL',
				]}
			/>
			<ExperiencePart
				company='Ipsosenso'
				duration='Feb 2018 - April 2021'
				position='Full stack developer'
				place='Paris'
				descriptionLines={[
					'Design, integration, front and back-end development and production launch of web projects.',
					"Creation of the Rurale insurance space and redesign of Veolia's Greenpath platform in React TS & Java Spring.",
					'Redesign of websites in React & PHP Symfony and Drupal, for Saverglass and Corum. Website redesign in Java Struts2 and custom CMS for Facom de Stanley Black & Decker, La Rurale and Malakoff Humanis.',
					'Presentation of final projects to customers, popularizing and explaining the work carried out.',
				]}
				stack={[
					'React',
					'Typescript',
					'Javascript',
					'jQuery',
					'Java',
					'Spring',
					'Struts',
					'Drupal',
				]}
			/>
			<ExperiencePart
				company='Orange Business Services'
				duration='Feb 2017 - Aug 2017'
				position='iOS developer'
				place='Paris'
				descriptionLines={[
					'Consulting mission for the International Committee of the Red Cross.',
					'Design and development of an iOS application coded in Objective C (functionalities : message reception and team geolocation).',
				]}
				stack={['Objective C']}
			/>
			<ExperiencePart
				company='Port Adhoc'
				duration='Feb 2016 - May 2016'
				position='Full stack developer'
				place='Paris'
				descriptionLines={[
					'Work on databases, integration of external data.',
					'Work on databases, integration of external data. Updating the WordPress site.',
				]}
				stack={['Php', 'MySQL', 'Wordpress']}
			/>
		</section>
	)
}

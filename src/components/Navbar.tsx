import { useActiveSectionContext } from '@/context/ActiveSectionContext'
import { links } from '@/components/part/links'

export const Navbar: React.FC = () => {
	const { activeSection, setActiveSection } = useActiveSectionContext()

	return (
		<nav className='sticky h-svh bg-black-8 top-0 left-0 flex flex-col items-center'>
			<span
				onClick={() => document.querySelector('body')?.scrollIntoView({ behavior: 'smooth' })}
				className='cursor-pointer xt-2xl font-black text-white w-[45px] h-[45px] min-h-[45px] my-[18px] flex items-center justify-center bg-black-17 rounded'
			>
				M<span className='text-brand'>.</span>
			</span>
			{links.map((link) => {
				return (
					<a
						key={`menu-item-${link.href}`}
						onClick={() => {
							document
								.getElementById(link.href.replace('#', ''))
								?.scrollIntoView({ behavior: 'smooth' })
							setActiveSection(link.href)
						}}
						className={`w-full cursor-pointer h-[110px] text-lg font-extralight text-white flex items-center justify-center flex-shrink-0 [writing-mode:vertical-lr] hover:bg-black-17 hover:opacity-100 hover:border-r hover:border-brand ${
							activeSection === link.href
								? 'border-r border-brand opacity-100'
								: 'border-transparent opacity-50'
						}`}
					>
						{link.label}
					</a>
				)
			})}
		</nav>
	)
}

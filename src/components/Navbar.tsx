import { useActiveSectionContext } from '@/context/ActiveSectionContext'
import { links } from './links'

export const Navbar: React.FC = () => {
	const { activeSection, setActiveSection } = useActiveSectionContext()

	return (
		<nav className='sticky h-svh bg-black-8 top-0 left-0 flex flex-col items-center'>
			<span className='text-2xl font-black text-white w-[45px] h-[45px] my-7 flex items-center justify-center bg-black-17 rounded'>
				M<span className='text-brand'>.</span>
			</span>
			{links.map((link) => {
				return (
					<a
						key={`menu-item-${link.href}`}
						href={link.href}
						onClick={() => {
							setActiveSection(link.label)
						}}
						className={`w-full h-[110px] text-lg font-extralight text-white flex items-center justify-center [writing-mode:vertical-lr] opacity-50 hover:bg-black-17 hover:opacity-100 hover:border-r hover:border-brand ${
							activeSection === link.label
								? 'border-r border-brand opacity-100'
								: 'border-transparent'
						}`}
					>
						{link.label}
					</a>
				)
			})}
		</nav>
	)
}
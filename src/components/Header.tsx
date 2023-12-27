import Image from 'next/image'
import githubIcon from '@/assets/github-mark-white.svg'

export const Header: React.FC = () => {
	return (
		<header className='sticky top-0 flex h-header items-center justify-between z-20 text-md font-bold backdrop-blur-md bg-opaque px-9'>
			<div className='flex pt-[10px] gap-6'>
				<span>
					<a href='#' className='opacity-50 hover:opacity-100'>
						<Image priority src={githubIcon} height={24} width={24} alt='Follow us on Twitter' />
					</a>
				</span>
			</div>
			<button className='border-1 text-md rounded cursor-pointer bg-transparent text-brand font-light border-brand-500'>
				My resume
			</button>
		</header>
	)
}

import { SocialNetworks } from './part/SocialNetworks'

export const Header: React.FC = () => {
	return (
		<header className='sticky top-0 flex h-header items-center justify-between z-20 text-md font-bold backdrop-blur-md bg-opaque px-9'>
			<SocialNetworks />
			<button className='text-md rounded cursor-pointer bg-transparent text-brand font-light border-brand border px-8 py-4'>
				My resume
			</button>
		</header>
	)
}

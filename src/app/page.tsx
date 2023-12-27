'use client'
import { links } from '@/components/links'
import { useSearchParams } from 'next/navigation'

export default function Home() {
	const searchParams = useSearchParams()

	return (
		<>
			<nav className='sticky h-svh bg-black-8 w-[60px] top-0 left-0 flex flex-col items-center'>
				<span className='text-2xl font-black w-[45px] h-[45px] my-7 flex items-center justify-center bg-black-17 rounded'>
					M<span className='text-brand'>.</span>
				</span>
				{links.map((link) => {
					console.log(searchParams)
					return (
						<a
							key={`menu-item-${link.href}`}
							href={link.href}
							className={`w-full h-[110px] text-lg font-extralight flex items-center justify-center [writing-mode:vertical-lr] opacity-50 hover:bg-black-17 hover:opacity-100 hover:border-r	hover:border-brand ${
								'true' === link.href ? 'text-indigo-600' : 'text-brand-darkblue'
							}`}
						>
							{link.label}
						</a>
					)
				})}
			</nav>
			<main className='flex-1'>
				<header></header>
				<section></section>
				<section></section>
			</main>
		</>
	)
}

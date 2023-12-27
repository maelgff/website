'use client'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Navbar } from '@/components/Navbar'

export default function Home() {
	return (
		<>
			<Navbar />
			<main className='flex-1'>
				<Header />
				<section></section>
				<section></section>
				<Contact />
				<Footer />
			</main>
		</>
	)
}

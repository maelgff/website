'use client'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Intro } from '@/components/Intro'
import { Navbar } from '@/components/Navbar'

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Header />
				<Intro />
				<About />
				<section></section>
				<section></section>
				<Experience />
				<Contact />
				<Footer />
			</main>
		</>
	)
}

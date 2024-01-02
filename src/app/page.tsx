'use client'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Intro } from '@/components/Intro'
import { Navbar } from '@/components/Navbar'
import { Projects } from '@/components/Projects'
import { useActiveSectionContext } from '@/context/ActiveSectionContext'
import { useEffect } from 'react'

const Home: React.FC<{}> = () => {
	const { setActiveSection } = useActiveSectionContext()

	const handleVisibilityChange = (inView: boolean, entry: IntersectionObserverEntry) => {
		if (inView) {
			setActiveSection(`#${entry.target.id}`)
		}
	}

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				handleVisibilityChange(entry.isIntersecting, entry)
			})
		})
		//todo, use enum and a loop
		observer.observe(document.getElementById('home')!)
		observer.observe(document.getElementById('about')!)
		observer.observe(document.getElementById('projects')!)
		observer.observe(document.getElementById('experience')!)
		observer.observe(document.getElementById('contact')!)
		return () => observer.disconnect()
	}, [])

	return (
		<>
			<Navbar />
			<main>
				<Header />
				<Intro />
				<About />
				<Projects />
				<Experience />
				<Contact />
				<Footer />
			</main>
		</>
	)
}
export default Home

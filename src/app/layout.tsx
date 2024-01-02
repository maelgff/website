import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import ActiveSectionContextProvider from '@/context/ActiveSectionContext'
import { ModalsWrapper } from '@/context/ModalsContext'

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Mael Geoffroy | Front lead',
	description: 'Mael Geoffroy website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body
				className={`${poppins.className} ${poppins.variable} scroll-smooth bg-black-17 grid grid-cols-custom min-h-screen `}
			>
				<ModalsWrapper>
					<ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
				</ModalsWrapper>
			</body>
		</html>
	)
}

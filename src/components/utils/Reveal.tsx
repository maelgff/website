interface Props {
	children: JSX.Element
	width: 'fit-content' | 'full'
}

export const Reveal: React.FC<Props> = ({ children }) => {
	return (
		<div className='relative'>
			<div>{children}</div>
		</div>
	)
}

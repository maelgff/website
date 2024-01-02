import anime from 'animejs'

export const WaterdropGrid = () => {
	const GRID_WIDTH = 25
	const GRID_HEIGTH = 600

	const DotGrid = () => {
		const dots = []
		let index = 0

		const handleClick = (e: React.MouseEvent<HTMLElement>) => {
			anime({
				targets: '.dot-point',
				scale: [
					{ value: 1.35, easing: 'easeOutSine', duration: 250 },
					{ value: 1, easing: 'easeInOutQuad', duration: 500 },
				],
				translateY: [
					{ value: -15, easing: 'easeOutSine', duration: 250 },
					{ value: 0, easing: 'easeInOutQuad', duration: 500 },
				],
				opacity: [
					{ value: 1, easing: 'easeOutSine', duration: 250 },
					{ value: 0.5, easing: 'easeInOutQuad', duration: 500 },
				],
				delay: anime.stagger(100, {
					grid: [GRID_WIDTH, GRID_HEIGTH],
					from: parseInt(e.currentTarget.dataset.index ?? '0'),
				}),
			})
		}

		for (let i = 0; i < GRID_WIDTH; i++) {
			for (let j = 0; i < GRID_HEIGTH; i++) {
				dots.push(
					<div
						key={`dot-${i}-${j}`}
						onClick={handleClick}
						data-index={index}
						className='group cursor-crosshair rounded-full p-[8px] transition-colors hover:bg-slate-600 h-min'
					>
						<div
							data-index={index}
							className='dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-35 group-hover:from-indigo-600 group-hover:to-white'
						></div>
					</div>,
				)
				index++
			}
		}
		return (
			<div style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }} className='grid w-fit'>
				{dots}
			</div>
		)
	}
	return (
		<div className='absolute top-[12px] bottom-[12px] max-w-[75%] z-0 right-9 grid h-screen'>
			<DotGrid />
		</div>
	)
}

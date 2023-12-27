export const Contact: React.FC = () => {
	return (
		<section id='contact' className='relative z-10 m-auto p-9 overflow-hidden max-w-1150'>
			<div className='max-w-700 m-auto rounded-2xl'>
				<div>
					<h4 className='font-black text-center leading-none text-8xl text-white'>
						Contact<span className='text-brand'>.</span>
					</h4>
				</div>
				<div>
					<p className='text-center font-extralight my-10 text-white text-lg'>
						Shoot me an email if you want to connect! You can also find me on{' '}
						<a
							className='text-brand hover:underline'
							target='_blank'
							rel='nofollow'
							href='https://www.linkedin.com'
						>
							Linkedin
						</a>{' '}
						or{' '}
						<a
							className='text-brand hover:underline'
							target='_blank'
							rel='nofollow'
							href='https://www.twitter.com'
						>
							Twitter
						</a>{' '}
						if that's more your speed.
					</p>
				</div>
				<div>
					<a href='mailto:mael_geoffroy@hotmail.fr'>
						<div className='group flex items-center justify-center w-fit m-auto text-2xl gap-3 text-white'>
							<svg
								className='text-white fill-current group-hover:text-brand bg-icon'
								stroke='currentColor'
								fill='currentColor'
								viewBox='0 0 1024 1024'
								height='2.4rem'
								width='2.4rem'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z'></path>
							</svg>
							<span className='group-hover:text-brand'>mael_geoffroy@hotmail.fr</span>
						</div>
					</a>
				</div>
			</div>
		</section>
	)
}

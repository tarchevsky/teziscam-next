import FadeIn from '@/components/fadeIn/FadeIn'

const OldHero = () => {
	return (
		<FadeIn className='cont'>
			<main className='flex items-center md:w-2/3 md:h-[60svh]'>
				<p className='bg-neutral-content/40 p-8 text-3xl md:text-4xl font-medium'>
					Интеграция современных IT-технологий и диджитал решений для
					экспертного осмысления эффективной коммуникации и позиционирования
					ваших корпоративных ценностей.
				</p>
			</main>
		</FadeIn>
	)
}

export default OldHero

import { HeroProps } from '@/types'
import Image from 'next/image'
import Htag from '@/components/Htag/Htag'
import cn from 'clsx'
import styles from './HeroFull.module.scss'
import FadeIn from '@/components/fadeIn/FadeIn'

const HeroFull = ({ title, alt, src, unoptimized }: HeroProps) => {
	return (
		<main className='hero'>
			<div className={cn(styles.grid, 'relative hero-content p-0 max-w-full')}>
				<FadeIn className={'cont w-full'}>
					<Htag tag='h1' className={'text-left'}>
						<span
							className='text-black font-extrabold'
							style={{ fontFamily: '"Roboto Flex Variable", sans-serif' }}
						>
							01
						</span>{' '}
						<br />
						{title}
					</Htag>
				</FadeIn>
				<div
					className={cn(
						styles.content,
						'pt-16 pb-32 px-10 rounded-[30px] flex flex-col gap-16'
					)}
				>
					<div className={'grid xl:grid-cols-2 xl:gap-16 items-center'}>
						<div
							className={
								'glass px-4 py-4 sm:px-8 sm:py-10 xl:px-12 xl:py-24 rounded-3xl'
							}
						>
							<Htag
								tag='h2'
								className={cn(styles.heading, 'text-base-100 xl:text-5xl')}
							>
								Создаем современные минималистичные сайты и веб-приложения на
								React
							</Htag>
							<p className={'text-base-100 xl:text-2xl font-normal'}>
								Молниеносная скорость загрузки и безупречный пользовательский
								опыт
							</p>
						</div>
						<div
							className={
								'hidden xl:flex glass min-h-[40vh] px-12 py-24 grid items-center justify-center rounded-3xl'
							}
						>
							<Image
								src={src}
								alt={alt}
								width={171}
								height={37}
								className={'text-center'}
								unoptimized
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default HeroFull

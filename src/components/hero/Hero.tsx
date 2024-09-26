import { HeroProps } from '@/types'
import Image from 'next/image'
import Htag from '@/components/Htag/Htag'
import cn from 'clsx'
import styles from './Hero.module.scss'

const Hero = ({ title, alt, src, unoptimized }: HeroProps) => {
	return (
		<main className='hero place-items-stretch cont'>
			<div
				className={cn(
					styles.grid,
					'relative hero-content grid justify-between gap-14 p-0'
				)}
			>
				<div className='flex flex-col gap-4'>
					<Htag tag='h1'>
						<span
							className='text-black font-extrabold'
							style={{ fontFamily: '"Roboto Flex Variable", sans-serif' }}
						>
							01
						</span>{' '}
						<br />
						{title}
					</Htag>
					<div
						className={cn(
							styles.content,
							'pt-16 pb-32 px-10 rounded-[30px] flex flex-col gap-16'
						)}
					>
						<Htag
							tag='h2'
							className={cn(styles.heading, 'text-base-100 xl:text-5xl')}
						>
							Создаем современные минималистичные сайты и веб-приложения на
							React
						</Htag>
						<p className={'text-base-100 xl:text-2xl font-normal'}>
							Молниеносная скорость загрузки и безупречный пользовательский опыт
						</p>
					</div>
				</div>
				<Image
					className='object-cover'
					src={src}
					alt={alt}
					width={400}
					height={300}
					priority
					unoptimized={unoptimized}
				/>
			</div>
		</main>
	)
}

export default Hero

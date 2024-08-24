import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import CarouselBeyond from '@/components/carouselBeyond/CarouselBeyond'
import Carousel from '@/components/carousel/Carousel'
import { MaterialSlider } from '@/components/materialSlider/MaterialSlider'
import { images } from '@/components/infiniteMasonry/images'
import InfiniteMasonry from '@/components/infiniteMasonry/InfiniteMasonry'

const HomePage: NextPage = () => {
	return (
		<>
			<Meta title='Главная' metaDesc='Описание страницы' />
			<FadeIn className='cont'>
				<main className='flex items-center md:w-2/3 md:h-[60svh]'>
					<p className='bg-neutral-content/40 p-8 text-3xl md:text-4xl font-medium'>
						Интеграция современных IT-технологий и диджитал решений для
						экспертного осмысления эффективной коммуникации и позиционирования
						ваших корпоративных ценностей.
					</p>
				</main>
			</FadeIn>
			<FadeIn className='cont flex gap-20 mb-14'>
				<h1 className='text-3xl font-extrabold'>Какой-то заголовок</h1>
				<p>Какой-то текст</p>
			</FadeIn>
			<CarouselBeyond />
			<Carousel />
			<FadeIn>
				<MaterialSlider />
			</FadeIn>
			<div className='cont'>
				<InfiniteMasonry images={images} />
			</div>
		</>
	)
}

export default HomePage

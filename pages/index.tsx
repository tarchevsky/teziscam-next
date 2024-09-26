import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import Hero from '@/components/hero/Hero'
import Htag from '@/components/Htag/Htag'
import Point from '@/components/point/Point'
import Blockquote from '@/components/blockquote/Blockquote'

const HomePage: NextPage = () => {
	return (
		<>
			<Meta title='Главная' metaDesc='Описание страницы' />
			<Hero
				title='Главная'
				src='/phone.png'
				alt='Картинка схематично изображающая прототип сайта на мобильном устройстве'
			/>
			<FadeIn className={'cont'}>
				<Htag tag='h2'>
					<span
						className='text-black font-extrabold'
						style={{ fontFamily: '"Roboto Flex Variable", sans-serif' }}
					>
						02
					</span>
					<br />
					Интродукция
				</Htag>
				<Point className={'pt-8'}>
					Ваш сайт отражает корпоративные ценности и обеспечивает эффективную
					коммуникацию с клиентами.
				</Point>
				<Blockquote>
					Мы позаботимся о передовых технологических решениях и визуализации,
					чтобы поддержать Ваш успех
				</Blockquote>
			</FadeIn>
			<FadeIn className={'cont'}>
				<Htag tag='h2'>
					<span
						className='text-black font-extrabold'
						style={{ fontFamily: '"Roboto Flex Variable", sans-serif' }}
					>
						03
					</span>{' '}
					<br />
					Пролог
				</Htag>
				<Point className={'pt-8'}>
					И стартапы, и большие корпорации воплощают свои задумки в успешные
					проекты. <br />
					<br />
					Каждый созданный нами веб-проект - это живой организм, который
					обладает жизненным циклом - растет, развивается, адаптируется к
					изменениям среды.
				</Point>
			</FadeIn>
			<FadeIn className={'cont'}>
				<Htag tag='h3'>
					<span
						className='text-black font-extrabold'
						style={{ fontFamily: '"Roboto Flex Variable", sans-serif' }}
					>
						04
					</span>{' '}
					<br />
					Зарождение и онтогенез
				</Htag>
				<Point className={'pt-32'}>
					идентифицируем задачу,
					<br />
					проведем брифинг,
					<br />
					создадим прототип,
					<br />
					утвердим дизайн-макет,
					<br />
					подготовим платформу,
					<br />
					подберем решения, <br />
					<br />
					осуществим верстку и наполнение страниц,
					<br />
					оптимизируем код,
					<br />
					протестируем формы обратной связи,
					<br />
					подключим админ-панель,
					<br />
					сервисы аналитики и метрики посещений,
					<br />
					создадим и настроим сервер и перенесем на него проект, подключим домен
					<br />
					адаптируем к показу на разных устройствах
				</Point>
			</FadeIn>
		</>
	)
}

export default HomePage

import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import Hero from '@/components/hero/Hero'
import Htag from '@/components/Htag/Htag'
import P from '@/components/P/P'
import Blockquote from '@/components/blockquote/Blockquote'
import BgHtag from '@/components/bgHtag/BgHtag'

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
				<P className={'pt-8'}>
					Ваш сайт отражает корпоративные ценности и обеспечивает эффективную
					коммуникацию с клиентами.
				</P>
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
				<P className={'pt-8'}>
					И стартапы, и большие корпорации воплощают свои задумки в успешные
					проекты. <br />
					<br />
					Каждый созданный нами веб-проект - это живой организм, который
					обладает жизненным циклом - растет, развивается, адаптируется к
					изменениям среды.
				</P>
			</FadeIn>
			<FadeIn className={'cont mb-[140px]'}>
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
				<div className='grid grid-cols-2 gap-10'>
					<BgHtag tag='h3'>
						Что мы <br />
						cдела
						<br />
						ем?
					</BgHtag>
					<P className={'pt-16'}>
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
						создадим и настроим сервер и перенесем на него проект, подключим
						домен
						<br />
						адаптируем к показу на разных устройствах
					</P>
				</div>
			</FadeIn>
			<FadeIn className={'cont mb-[140px]'}>
				<Htag tag='h3'>
					<span
						className='text-black font-extrabold'
						style={{ fontFamily: '"Roboto Flex Variable", sans-serif' }}
					>
						05
					</span>{' '}
					<br />
					Жизненный цикл и диалог
				</Htag>
				<div className='grid grid-cols-2 gap-10'>
					<P className={'pt-16'}>
						Мы опираемся на методологию Бережливого стартапа, когда работа
						начинается с минимально-жизнеспособного продукта, что позволяет
						быстро проверить жизнеспособность идеи, минимизировать риски и
						эффективно использовать ресурсы. Когда создана канва будущего сайта,
						легче работать над содержанием.
					</P>
					<BgHtag tag='h3'>
						Как мы <br />
						cдела
						<br />
						ем?
					</BgHtag>
				</div>
			</FadeIn>
			<FadeIn className={'cont mb-[70px]'}>
				<Htag tag='h2'>
					<span
						className='text-black font-extrabold'
						style={{ fontFamily: '"Roboto Flex Variable", sans-serif' }}
					>
						06
					</span>{' '}
					<br />
					Живая система и её особенности
				</Htag>
				<P className={'pt-8'}>
					Наш взгляд <br />
					<br />
					Каждый созданный нами веб-проект - это живой организм, который
					обладает жизненным циклом - растет, развивается, адаптируется к
					изменениям среды.
					<br /> <br />
					Человек - как совокупность общественных отношений развивается
					динамично. Непрерывно изучая человека, его образ мысли, поведение,
					способы взаимодействия со средой в ее интенсивности, мы можем
					экологично и системно развивать и внедрять цифровые технологии во всех
					областях жизни. В мире, где человек и гаджет становятся неразделимы,
					приоритет остается в нравственном осмыслении жизни и общечеловеческих
					ценностей. <br />
					<br />
					Наш стиль - непрерывное усовершенствование и принятие вызовов.
				</P>
			</FadeIn>
			<FadeIn className={'cont mb-[70px]'}>
				<Htag tag='h2'>
					<span
						className='text-black font-extrabold'
						style={{ fontFamily: '"Roboto Flex Variable", sans-serif' }}
					>
						07
					</span>{' '}
					<br />
					Технологичесская синглуярность: прорыв
				</Htag>
				<P className={'pt-8'}>
					React, Next JS, PostgreSQL, Prisma, Framer Motion, SCSS, Tailwind,
					Insomnia, GraphQL
				</P>
			</FadeIn>
		</>
	)
}

export default HomePage

import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import HeroFull from '@/components/heroFull/HeroFull'
import Htag from '@/components/Htag/Htag'
import P from '@/components/P/P'
import Blockquote from '@/components/blockquote/Blockquote'
import BgHtag from '@/components/bgHtag/BgHtag'
import TwoPhoto from '@/components/twoPhoto/TwoPhoto'
import Image from 'next/image'
import BlockquoteSimple from '@/components/blockquoteSimple/BlockquoteSimple'
import Heading from '@/components/heading/Heading'

const HomePage: NextPage = () => {
	return (
		<>
			<Meta title='Главная' metaDesc='Описание страницы' />
			<FadeIn className={'cont'}>
				<HeroFull
					title='Главная'
					src='/rectangle-main.png'
					alt='Картинка изображающая кнопку'
				/>
			</FadeIn>
			<FadeIn className={'cont'}>
				<Heading tag='h2' number='01' heading='Интродукция' />
				<P className={'pt-8'}>
					Ваш сайт отражает корпоративные ценности и обеспечивает эффективную
					коммуникацию с клиентами.
				</P>
				<Blockquote>
					Мы позаботимся о передовых технологических решениях и визуализации,
					чтобы поддержать Ваш успех
				</Blockquote>
			</FadeIn>
			<FadeIn className={'cont mb-16'}>
				<Heading tag='h3' number='02' heading='Пролог' />
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
				<Heading tag='h3' number='03' heading='Зарождение и онтогенез' />
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
				<Heading tag='h3' number='04' heading='Жизненный цикл и диалог' />
				<div className='grid grid-cols-2 gap-10 mb-16'>
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
				<div
					className={
						'flex flex-col flex-col-reverse xl:flex-row xl-flex- items-center gap-12'
					}
				>
					<Image
						src='/prototype.png'
						alt='Картинка прототипа сайта'
						width={200}
						height={450}
						className={'w-[250px] h-full xl:w-full'}
					/>
					<BlockquoteSimple className={'uppercase'}>
						При создании сайта сочетание гибких и бережливых методологий
						разработки позволяет эффективно управлять ресурсами и быстро
						адаптироваться к изменениям. Вместе они способствуют созданию более
						качественного и востребованного продукта, снижая риски и увеличивая
						шансы на успех.
					</BlockquoteSimple>
				</div>
			</FadeIn>
			<FadeIn className={'cont mb-[70px]'}>
				<Heading
					tag='h3'
					number='05'
					heading='Живая система и её особенности'
				/>
			</FadeIn>
			<TwoPhoto />
			<FadeIn className={'cont mb-[70px]'}>
				<Heading
					tag='h3'
					number='06'
					heading='Технологичесская синглуярность: прорыв'
				/>
				<P className={'pt-8'}>
					React, Next JS, PostgreSQL, Prisma, Framer Motion, SCSS, Tailwind,
					Insomnia, GraphQL
				</P>
			</FadeIn>
			<FadeIn className={'cont mb-[70px]'}>
				<Heading
					tag='h3'
					number='07'
					heading='Открытие и перспективы. Рост и развитие. Метаболизм и
					производительность.'
				/>
				<P className={'pt-8'}>
					Встреча клиента с сайтом, сбор обратной связи. Поддержка и обновления,
					новая функциональность с целью наилучшего соответствовия потребностям
					пользователей и изменениям в технологиях.
				</P>
			</FadeIn>
		</>
	)
}

export default HomePage

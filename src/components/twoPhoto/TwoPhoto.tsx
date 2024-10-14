import Image from 'next/image'
import FadeIn from '@/components/fadeIn/FadeIn'
import { useMediaQuery } from 'react-responsive'

const TwoPhoto = () => {
	const isMobile = useMediaQuery({ query: '(max-width:1280px)' })
	return (
		<FadeIn className={(isMobile ? 'cont ' : '') + 'mb-16'}>
			<section
				className={'flex flex-col gap-6 xl:flex-row xl:gap-32 overflow-hidden'}
			>
				<Image
					src={'/two-photo-1.png'}
					alt={'Картинка шхеры 1'}
					width={600}
					height={200}
					className={'xl:-ml-6 w-full object-cover rounded-3xl'}
				/>
				<div className='prose'>
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
				</div>
				<Image
					src={'/two-photo-1.png'}
					alt={'Картинка шхеры 2'}
					width={600}
					height={200}
					className={'xl:-mr-6 w-full object-cover rounded-3xl'}
				/>
			</section>
		</FadeIn>
	)
}

export default TwoPhoto

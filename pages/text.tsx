import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'

const TextPage: NextPage = () => {
	return (
		<>
			<Meta
				title='Видео'
				metaDesc='Страница про создание текстового контента'
			/>
			<FadeIn className='cont'>
				<main>
					<h1 className={`text-4xl font-bold`}>Текст</h1>
				</main>
			</FadeIn>
		</>
	)
}

export default TextPage

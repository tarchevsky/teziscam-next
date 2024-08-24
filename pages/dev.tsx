import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import Quiz from '@/components/quiz/Quiz'

const Dev: NextPage = () => {
	return (
		<>
			<Meta
				title='Разработка'
				metaDesc='Страница про разработку сайтов и приложений'
			/>
			<FadeIn className='cont'>
				<main>
					<h1 className={`text-4xl font-bold`}>Разработка</h1>
				</main>
				<div className='rounded p-16'>
					<Quiz />
				</div>
			</FadeIn>
		</>
	)
}

export default Dev

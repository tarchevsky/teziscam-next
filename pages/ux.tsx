import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'

const UxPage: NextPage = () => {
	return (
		<>
			<Meta title='Видео' metaDesc='Страница про UX' />
			<FadeIn className='cont'>
				<main>
					<h1 className={`text-4xl font-bold`}>UX</h1>
				</main>
			</FadeIn>
		</>
	)
}

export default UxPage

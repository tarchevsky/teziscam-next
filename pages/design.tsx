import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'

const DesignPage: NextPage = () => {
	return (
		<>
			<Meta title='Видео' metaDesc='Страница про создание дизайнов' />
			<FadeIn className='cont'>
				<main>
					<h1 className={`text-4xl font-bold`}>Дизайн</h1>
				</main>
			</FadeIn>
		</>
	)
}

export default DesignPage

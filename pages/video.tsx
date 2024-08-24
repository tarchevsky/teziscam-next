import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'

const VideoPage: NextPage = () => {
	return (
		<>
			<Meta title='Видео' metaDesc='Страница про создание видео контента' />
			<FadeIn className='cont'>
				<main>
					<h1 className={`text-4xl font-bold`}>Видео</h1>
				</main>
			</FadeIn>
		</>
	)
}

export default VideoPage

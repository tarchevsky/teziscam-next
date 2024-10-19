import { Fragment, memo } from 'react'
import { HtagProps } from '@/types'

interface NumberProps extends Omit<HtagProps, 'children'> {
	heading: string
	number: number | string
}

const Heading = memo(
	({ tag = 'h3', heading, number, className }: NumberProps) => {
		const Tag = tag

		const renderContent = (content: string) => {
			return content.split('<br />').map((text, index, array) => (
				<Fragment key={index}>
					{text}
					{index < array.length - 1 && <br />}
				</Fragment>
			))
		}

		return (
			<Tag className={`${className ? className + ' ' : ''}mb-8 text-left`}>
				<span
					className='text-black font-extrabold'
					style={{ fontFamily: '"Roboto Flex Variable", sans-serif' }}
				>
					{number}
				</span>{' '}
				<br />
				{renderContent(heading)}
			</Tag>
		)
	}
)

Heading.displayName = 'Heading'

export default Heading

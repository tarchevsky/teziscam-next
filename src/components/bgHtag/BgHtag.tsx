import { HtagProps } from '@/types'
import styles from './BgHtag.module.scss'
import cn from 'clsx'
import React, { Fragment } from 'react'

const BgHtag = ({ tag, children, className }: HtagProps) => {
	const Tag = tag
	const renderContent = () => {
		if (typeof children === 'string') {
			return children.split('<br />').map((text, index, array) => (
				<Fragment key={index}>
					{text}
					{index < array.length - 1 && <br />}
				</Fragment>
			))
		}
		return children
	}

	return (
		<Tag className={cn(styles.BgHtag, 'text-[#F5E3D7] text-right', className)}>
			{renderContent()}
		</Tag>
	)
}

export default BgHtag

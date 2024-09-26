import { HtagProps } from '@/types'
import styles from './BgHtag.module.scss'
import cn from 'clsx'
import React from 'react'

const BgHtag = ({ tag, children }: HtagProps) => {
	const content = typeof children === 'string' ? children : ''

	switch (tag) {
		case 'h3':
			return (
				<h3
					className={cn(styles.bgHtag, 'text-[#F5E3D7]')}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			)
		case 'h4':
			return (
				<h4
					className={cn(styles.bgHtag, 'text-[#F5E3D7]')}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			)
		case 'h5':
			return (
				<h5
					className={cn(styles.bgHtag, 'text-[#F5E3D7]')}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			)
		default:
			return null
	}
}

export default BgHtag

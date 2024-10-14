import cn from 'clsx'
import styles from './BlockquoteSimple.module.scss'
import { ReactNode } from 'react'

interface BlockquoteProps {
	children?: ReactNode
	className?: string
}

const BlockquoteSimple = ({ children, className }: BlockquoteProps) => {
	return (
		<blockquote className={cn(styles.blockquote, className)}>
			{children}
		</blockquote>
	)
}

export default BlockquoteSimple

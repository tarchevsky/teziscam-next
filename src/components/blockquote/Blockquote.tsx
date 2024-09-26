import cn from 'clsx'
import styles from './Blockquote.module.scss'
import { ReactNode } from 'react'

interface BlockquoteProps {
	children?: ReactNode
}

const Blockquote = ({ children }: BlockquoteProps) => {
	return <blockquote className={cn(styles.blockquote)}>{children}</blockquote>
}

export default Blockquote

import { ReactNode } from 'react'

interface P {
	children: string | ReactNode
	className?: string
}

const P = ({ children, className }: P) => {
	return <p className={`${className}, prose`}>{children}</p>
}

export default P

import { ReactNode } from 'react'

interface Point {
	children: string | ReactNode
	className?: string
}

const Point = ({ children, className }: Point) => {
	return (
		<p className={`max-w-[30vw] pl-8 xl:pl-[91px] ${className}`}>{children}</p>
	)
}

export default Point

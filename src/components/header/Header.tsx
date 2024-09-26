import Link from 'next/link'
import cn from 'clsx'
import styles from './Header.module.scss'
import Burger from '@/components/burger/Burger'
import { useEffect, useState } from 'react'
import ThemeToggle from '@/components/themeToggle/ThemeToggle'

const Header = () => {
	const [isMenuActive, setIsMenuActive] = useState(false)
	const toggleMenu = () => {
		setIsMenuActive(!isMenuActive)
	}

	useEffect(() => {
		if (isMenuActive) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [isMenuActive])

	return (
		<header className='relative flex justify-between md:justify-between md:gap-16 items-center py-4'>
			<Link
				href='/'
				className='text-5xl font-medium'
				style={{ fontFamily: '"Roboto Flex Variable", sans-serif' }}
			>
				Tezisc<span style={{ fontFamily: 'Poiret One, sans-serif' }}>Q</span>m
			</Link>
			<nav
				className={cn(
					{ [styles.active]: isMenuActive },
					'fixed md:static z-10 w-full h-full md:h-auto end-0 bottom-0 -translate-y-full md:translate-y-0 opacity-0 md:opacity-100 transition-all duration-300 ease-out'
				)}
				style={{ fontFamily: '"Montserrat Variable", sans-serif' }}
			>
				<ul
					tabIndex={0}
					className='pt-4 absolute md:static menu justify-between w-full flex-nowrap gap-5 md:menu-horizontal start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-y-0 md:translate-x-0'
				>
					<li
						className={cn(
							styles.item,
							'block text-center opacity-0 md:opacity-100'
						)}
					>
						<Link
							className='px-[10px] btn btn-ghost text-xl font-light'
							href='/dev'
						>
							Веб-разработка
						</Link>
					</li>
					<li
						className={cn(
							styles.item,
							'block text-center opacity-0 md:opacity-100'
						)}
					>
						<Link
							className='px-[10px] btn btn-ghost text-xl font-light'
							href='/video'
						>
							Видео
						</Link>
					</li>
					<li
						className={cn(
							styles.item,
							'block text-center opacity-0 md:opacity-100'
						)}
					>
						<Link
							className='px-[10px] btn btn-ghost text-xl font-light'
							href='/design'
						>
							Дизайн
						</Link>
					</li>
					<li
						className={cn(
							styles.item,
							'block text-center opacity-0 md:opacity-100'
						)}
					>
						<Link
							className='px-[10px] btn btn-ghost text-xl font-light'
							href='/ux'
						>
							UX
						</Link>
					</li>
					<li
						className={cn(
							styles.item,
							'block text-center opacity-0 md:opacity-100'
						)}
					>
						<Link
							className='px-[10px] btn btn-ghost text-xl font-light'
							href='/text'
						>
							Текст
						</Link>
					</li>
					<li
						className={cn(
							styles.item,
							'block text-center opacity-0 md:opacity-100'
						)}
					>
						<Link
							className='px-[10px] btn btn-ghost text-xl font-light'
							href='/contacts'
						>
							Контакты
						</Link>
					</li>
					<li className='justify-center self-center'>
						<ThemeToggle />
					</li>
				</ul>
			</nav>
			<Burger toggleMenu={toggleMenu} />
		</header>
	)
}

export default Header

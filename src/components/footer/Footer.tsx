import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='flex justify-between items-center cont p-10'>
			<Link href='/' className='text-5xl font-medium'>
				Tezisc<span style={{ fontFamily: 'Poiret One, sans-serif' }}>Q</span>m
			</Link>
			<aside>
				<p>2024, tezis.digital</p>
			</aside>
		</footer>
	)
}

export default Footer

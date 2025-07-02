import Link from 'next/link'

type Link = {
	href: string
	label: string
}

const links: Link[] = [
	{ href: '/chat', label: 'chat' },
	{ href: '/tours', label: 'tours' },
	{ href: '/tours/new-tour', label: 'new-tour' },
	{ href: '/profile', label: 'profile' },
]

const NavLinks = () => {
	return (
		<ul className='menu text-slate-50'>
			{links.map((link, index) => {
				return (
					<li key={index}>
						<Link href={link.href} className='capitalize'>
							{link.label}
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default NavLinks

import Link from 'next/link'

export default function Home() {
	return (
		<div className='hero min-h-screen bg-gray-800'>
			<div className='hero-content text-center'>
				<div className='max-w-md'>
					<h1 className='text-6xl font-bold text-slate-50'>CurioCity</h1>
					<p className='py-6 text-xl leading-loose text-slate-50'>
						CurioCity - Your AI language companion. Powered by OpenAI, it
						enhances your conversations, content creation, and more!
					</p>
					<Link href={'/chat'} className='btn btn-success'>
						Get Started
					</Link>
				</div>
			</div>
		</div>
	)
}

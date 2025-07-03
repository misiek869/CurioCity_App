import { MdOutlineTravelExplore } from 'react-icons/md'

import ThemeToggle from './ThemeToggle'

const SidebarHeader = () => {
	return (
		<div className='flex items-center mb-4 gap-4 px-4'>
			<MdOutlineTravelExplore className='w-12 h-12 text-primary' />
			<h2 className='text-xl font-bold text-primary'>CurioCity</h2>
			<ThemeToggle />
		</div>
	)
}

export default SidebarHeader

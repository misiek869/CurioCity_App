import { getUserTokensById } from '@/utils/action'
import { UserButton } from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server'

const MemberProfile = async () => {
	const user = await currentUser()
	const session = await auth()
	const userId = session.userId

	console.log(userId)
	console.log(await getUserTokensById(userId))

	return (
		<div className='px-4 flex items-center gap-2'>
			<UserButton />
			<p>{user?.emailAddresses[0].emailAddress}</p>
		</div>
	)
}

export default MemberProfile

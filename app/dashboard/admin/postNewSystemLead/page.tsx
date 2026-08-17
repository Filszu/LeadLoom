import Link from 'next/link'
import { redirect } from 'next/navigation'
import { publicUserSession } from '@/utils/supabase/publicUserSession'
import getUserProfiles from '@/lib/dbOperations/getUserProfiles'
import PostNewSystemLeadForm from './PostNewSystemLeadForm'

const PostNewSystemLeadPage = async () => {
    const publicUser = await publicUserSession()

    const userNickname = publicUser?.nickname
    const userId = publicUser?.id

    if (!userId || !userNickname) redirect('/dashboard/settings/username')

    // NOTE: later change to role admin
    if (userNickname !== 'filszu' && userNickname !== 'mocneGranie') {
        redirect('/dashboard')
    }

    const profiles = (await getUserProfiles({})) ?? []
    const nicknames = profiles
        .map((profile) => profile.nickname)
        .filter((nickname): nickname is string => Boolean(nickname))

    return (
        <section className="space-y-6">
            <div>
                <Link
                    href="/dashboard/admin"
                    className="text-sm text-muted-foreground hover:underline"
                >
                    ← Admin
                </Link>
                <h1>Post new system lead</h1>
                <h2>Insert a lead into the leads table with editable defaults.</h2>
            </div>
            <PostNewSystemLeadForm nicknames={nicknames} />
        </section>
    )
}

export default PostNewSystemLeadPage

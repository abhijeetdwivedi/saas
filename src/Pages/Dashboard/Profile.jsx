import React from 'react'
import PostPreview from '../../components/ui/PostPreview'
import SignUpVerify from '../../components/ui/SignUpVerify'
import LoginVerify from '../../components/ui/LoginVerify'

function Profile() {
    return (
        <div>
            <SignUpVerify/>
            <LoginVerify/>
        </div>
    )
}

export default Profile

import React, { useState } from 'react'
import SignUp from '../../components/ui/SignUp'
import SignUpVerify from '../../components/ui/SignUpVerify'

function SignUpPage() {
    const [isSignUpComplete, setIsSignUpComplete] = useState(false)

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-full max-w-md px-4">
                {!isSignUpComplete ? (
                    <SignUp onSuccess={() => setIsSignUpComplete(true)} />
                ) : (
                    <SignUpVerify />
                )}
            </div>
        </div>
    )
}

export default SignUpPage

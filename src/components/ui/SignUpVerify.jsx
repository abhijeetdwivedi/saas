import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Loader2, CheckCircle, AlertTriangle } from 'lucide-react'
import { useLocation } from "react-router-dom";

function SignUpVerify() {
    const location = useLocation();
    const email = location.state?.email || "";

    const [otp, setOtp] = useState(['', '', '', '', '', ''])
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const handleChange = (index, value) => {
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp]
            newOtp[index] = value
            setOtp(newOtp)
            // Auto-focus to next input
            if (value && index < 5) {
                document.getElementById(`otp-${index + 1}`)?.focus()
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(false)
        setSuccess(false)

        const enteredOtp = otp.join('')

        try {
            const res = await fetch('http://localhost:3000/api/v2/users/verifySignup-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    otp: enteredOtp,
                    // Add additional required fields here, e.g., email or userId
                }),
            })

            const data = await res.json()

            if (res.ok) {
                setSuccess(true)
            } else {
                throw new Error(data.message || 'OTP verification failed')
            }
        } catch (err) {
            console.error(err)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-full px-4 py-6 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Verify OTP</h2>

            <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div className="flex justify-between gap-2">
                    {otp.map((digit, idx) => (
                        <Input
                            key={idx}
                            id={`otp-${idx}`}
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(idx, e.target.value)}
                            className="text-center text-lg w-10 h-12"
                            type="text"
                            inputMode="numeric"
                            pattern="\d*"
                            required
                        />
                    ))}
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? (
                        <>
                            <Loader2 className="animate-spin mr-2 h-4 w-4" />
                            Verifying...
                        </>
                    ) : (
                        'Verify'
                    )}
                </Button>
            </form>

            {success && (
                <Alert variant="success" className="mt-4">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>OTP verified successfully!</AlertDescription>
                </Alert>
            )}

            {error && (
                <Alert variant="destructive" className="mt-4">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>Invalid OTP. Please try again.</AlertDescription>
                </Alert>
            )}
        </div>
    )
}

export default SignUpVerify

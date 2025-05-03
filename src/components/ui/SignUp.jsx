import React from "react"
import axios from "axios";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
import { useState } from "react";



export default function SignUp({
    className,
    onSuccess,
    ...props
}) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            firstName,
            lastName,
            email,
            password,
        };

        console.log(payload)

        try {
            const res = await axios.post("http://localhost:3000/api/v2/users/register", payload, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log("Signup success:", res.data);
            if (res.status === 200) {
                onSuccess?.();
            }
        } catch (err) {
            if (err.response) {
                console.error("Signup error:", err.response.data.message);
            } else {
                console.error("Network error:", err.message);
            }
        }
    };

    return (
        <section className="">
            <div className={cn("flex flex-col gap-6", className)} {...props}>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Sign Up</CardTitle>
                        <CardDescription>
                            Create your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input
                                        id="firstName"
                                        type="text"
                                        placeholder="first name"
                                        required
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input
                                        id="lastName"
                                        type="text"
                                        placeholder="last name"
                                        required
                                        value={lastName}
                                        onChange={(e) => setlastName(e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                        value={email}
                                        onChange={(e) => setemail(e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setpassword(e.target.value)}
                                    />
                                </div>
                                {/* <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                                    </div>
                                    <Input id="confirmPassword" type="password" required />
                                </div> */}
                                <Button type="submit" className="w-full">
                                    Sign Up
                                </Button>
                                <Button variant="outline" className="w-full">
                                    SignUp with Google
                                </Button>
                            </div>
                            <div className="mt-4 text-center text-sm">
                                Have an account?{" "}
                                <Link to="/login" className="underline underline-offset-4">
                                    Sign in
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

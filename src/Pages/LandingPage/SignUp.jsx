import React from "react"
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



export function SignUp({
    className,
    ...props
}) {

    const [firstName ,setFirstName] = useState("");
    const [lastName ,setlastName] = useState("");
    const [password ,setpassword] = useState("");
    const [email ,setemail] = useState("");

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
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input
                                        id="firstName"
                                        type="text"
                                        placeholder="first name"
                                        required
                                        value = {firstName}
                                        onChange = {(e) => {e.target.value}}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input
                                        id="lastName"
                                        type="text"
                                        placeholder="last name"
                                        required
                                        value = {lastName}
                                        onChange = {(e) => {e.target.value}}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                        value = {email}
                                        onChange = {(e) => {e.target.value}}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                    </div>
                                    <Input id="password" type="password" required />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                                    </div>
                                    <Input id="confirmPassword" type="password" required />
                                </div>
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

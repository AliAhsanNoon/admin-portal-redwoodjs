import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import Link from '@redwoodjs/router'
import { Button } from '../ui/button'

const AuthForm = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-center">
          <img
            src="/placeholder.svg"
            alt="Logo"
            width={48}
            height={48}
            className="h-12 w-auto"
            style={{ aspectRatio: '48/48', objectFit: 'cover' }}
          />
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>
              Enter your email and password to sign in to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <div
                  className="text-sm font-medium underline underline-offset-4 hover:text-primary"
                  // prefetch={false}
                >
                  Forgot password?
                </div>
              </div>
              <Input id="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </CardFooter>
        </Card>
        <div className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <div
            className="font-medium underline underline-offset-4 hover:text-primary"
            // prefetch={false}
          >
            Sign up
          </div>
        </div>
      </div>
    </div>
  )
}
export default AuthForm

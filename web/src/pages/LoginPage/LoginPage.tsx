import { useEffect, useRef, useState } from 'react'

import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useAuth } from 'src/auth'
import { Label } from '../../components/ui/label'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

const LoginPage = () => {
  const { isAuthenticated, logIn, logOut } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async () => {
    if (!username || !password) {
      setError('Please fill in all fields')
      return
    }
    const response = await logIn({
      username,
      password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <Metadata title="Login" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="w-full max-w-md space-y-6">
          <div className="flex justify-center">
            <div className=" h-[50px] w-[50px] bg-[#fbf6f7]"></div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Welcome back</CardTitle>
              <div className='"w-full flex flex-col '>
                {error && (
                  <p className="mb-3 mt-3 font-bold text-red-500">{error}</p>
                )}
              </div>
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
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <div className="text-sm font-medium underline underline-offset-4 hover:text-primary">
                    Forgot password?
                  </div>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="mt-5 w-full" onClick={onSubmit}>
                Sign in
              </Button>
            </CardFooter>
          </Card>
          <div className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{' '}
            <div
              className="font-medium underline underline-offset-4 hover:text-primary"
              onClick={() => {
                routes.signup()
              }}
            >
              <Link to={routes.signup()}>
              SignUp
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage

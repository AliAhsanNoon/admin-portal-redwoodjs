// import { Link, routes } from '@redwoodjs/router'
// import { Metadata } from '@redwoodjs/web'

// import { Calendar } from 'src/components/Calendar/Calendar'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card'

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'

// import { Terminal } from 'lucide-react'

// import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
// import { Button } from 'src/components/ui/button'
// import { useAuth } from 'src/auth'

// const HomePage = () => {
//   const { logOut } = useAuth()

//   return (
//     <>
//       <Metadata title="Home" description="Home page" />

//       <h1 className="text-red-500">HomePage</h1>

//     </>
//   )
// }

// export default HomePage

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tABSiGOI9R4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link, { routes } from '@redwoodjs/router'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'
import SidePanel from 'src/components/Panel/SidePanel'
import { useAuth } from 'src/auth'
import { useEffect } from 'react'
import UsersCell from 'src/components/User/UsersCell'

export default function HomePage() {
  const { isAuthenticated, logOut } = useAuth()

  useEffect(() => {
    if (!isAuthenticated) {
      routes.login()
    }
  }, [isAuthenticated])

  return (
    <div className="flex min-h-screen w-full">
      <SidePanel />
      <aside className="flex flex-col items-start justify-between border-r bg-background px-4 py-6 sm:px-6"></aside>
      <div className="flex-1 bg-muted/40 p-4 sm:p-6">
        <header className="flex items-center justify-between border-b bg-background px-4 py-3 sm:px-6 sm:py-4">
          <h1 className="text-lg font-semibold">User Management</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <div
                  className="h-[36px] w-[36px] rounded-full bg-[#fbf6f7]"
                  style={{ aspectRatio: '36/36', objectFit: 'cover' }}
                >
                  <span className="sr-only">Toggle user menu</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logOut}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="p-4 sm:p-6">
          <Card>
            <CardContent>
              <UsersCell />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

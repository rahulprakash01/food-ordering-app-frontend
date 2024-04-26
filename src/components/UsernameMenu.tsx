import { CircleUserRound } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent } from './ui/dropdown-menu'
import { DropdownMenuTrigger,DropdownMenuItem } from './ui/dropdown-menu'
import { useAuth0 } from '@auth0/auth0-react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

export const UsernameMenu = () => {
    const {user,logout} = useAuth0();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className='flex items-center px-3 font-bold hover:text-red-600 gap-2'>
            <CircleUserRound className='text-red-600'/>
            {user?.name}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
            <Link to="/manage-restaurant" className="font-bold hover:text-red-600">Manage Restaurant</Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
            <Link to="/user-profile" className="font-bold hover:text-red-600">User Profile</Link>
            </DropdownMenuItem>
            <Separator/>
            <DropdownMenuItem>
                <Button onClick={()=>logout()} className='flex flex-1 font-bold bg-red-600'>Log Out</Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
  //.email beacuse don't render the email 
}

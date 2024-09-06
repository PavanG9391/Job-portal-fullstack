import {Link} from "react-router-dom"
// import {Button} from "./ui/button"
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <>
    <nav className="py-4 px-16 flex justify-between items-center">
      <Link>
      <img src='/logo.JPG' className="h-20"/>
      </Link>

      {/* <Button variant="outline">Login</Button> */}
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
    </>
  )
}

export default Header

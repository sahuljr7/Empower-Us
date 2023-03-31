import Link from "next/link"
import React from "react"
import { auth } from "./firebase"
import { signOut } from 'firebase/auth'
import isAuthenicated from './isAuthenticated';

function Auth() {
    return (
        <div>
            <Link href={'/events/add'}>
                Add an Event
            </Link>
            <Link href={'/events/view'}>
                View Events
            </Link>
            <button onClick={() => signOut(auth)}>
                Sign Out from {auth.currentUser.displayName}
            </button>
        </div>
    )
}

function NonAuth() {
    return (
        <div>
            <Link href={'/auth/signin'}>
                Sign In
            </Link>
            <Link href={'/auth/signup'}>
                Sign Up
            </Link>
        </div>
    )
}

export default function NavBar() {

    const [logged, setLogged] = React.useState(false)

    React.useEffect(() => {
        setLogged(isAuthenicated())
    })

    return (
        <React.Fragment>
            {logged ? <Auth /> : <NonAuth />}
            {logged ? 'True' : 'False'}
        </React.Fragment>
    )
}

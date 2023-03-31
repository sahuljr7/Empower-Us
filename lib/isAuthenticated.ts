import { getAuth } from 'firebase/auth';

export default function isAuthenicated() {
    let auth = getAuth()
    let user = auth.currentUser
    if (user) return true
    return false
}

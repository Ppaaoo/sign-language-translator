import { useEffect } from "react"
import { userById } from "../api/user"
import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslateHistory from "../components/Profile/ProfileTranslateHistory"
import { STORAGE_KEY_USER } from "../const/storageKey"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"

const Profile = () => {

    const {user, setUser} = useUser()

    useEffect(() => {
        const findUser = async () => {
            const [error, latestUser] = await userById(user.id)
            if(error === null) {
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        }
        findUser()
    }, [setUser, user.id])

    return (
        <>
            <h1>Profile</h1>
            <ProfileHeader username={user.username} />
            <ProfileActions />
            <ProfileTranslateHistory translations={user.translations} />
        </>
    )
}

export default withAuth(Profile)
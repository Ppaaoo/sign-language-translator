import { clearTranslationHistory } from "../../api/translation"
import { STORAGE_KEY_USER } from "../../const/storageKey"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave} from "../../utils/storage"

const ProfileActions = () => {

    const {user, setUser} = useUser()

    const handleLogoutClick = () => {
        if(window.confirm('Are you sure?')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    const handleClearHistoryClick = async () => {
        if(!window.confirm('Are you sure? \nThis cannot be undone')) {
            return
        }
        const [clearError] = await clearTranslationHistory(user.id)

        if(clearError !== null) {
            
            return
        }
        const updatedUser = {
            ...user,
            translations: []
        }
        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
    }
    return (
        <ul style={{listStyle:'none'}}>
            <li><button onClick={handleClearHistoryClick}>Clear translation history</button></li>
            <li><button onClick={handleLogoutClick}>Logout</button></li>
        </ul>
    )
}
export default ProfileActions
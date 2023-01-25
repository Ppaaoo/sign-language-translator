import { addTranslation } from "../api/translation"
import TranslationForm from "../components/Translation/TranslationForm"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContex"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"
import TranslationImage from "../components/Translation/TranslationImage"

const Translate = () => {
    const {user, setUser} = useUser()

    const handleTranslateClicked = async (translation) => {
        console.log("Translate button clicked! " + translation)
        const [error, updatedUser] = await addTranslation(user, translation)

        if(error === null) {
            storageSave(STORAGE_KEY_USER, updatedUser)
            setUser(updatedUser)
        }
         
         console.log('Error', error)
         console.log('Result', updatedUser)
    }

    return (
        <>
            <h1>Translate</h1>
            <section id="translation">
                <TranslationForm onTranslate={handleTranslateClicked}/>
            </section>
            <section id="test">
                <TranslationImage name="A" image="img/individial_signs/a.png" />
            </section>
        </>
    )
}
export default withAuth(Translate)
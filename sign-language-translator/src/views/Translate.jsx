import { addTranslation } from "../api/translation"
import TranslationForm from "../components/Translation/TranslationForm"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"
import { useUser } from "../context/UserContext"
import { STORAGE_KEY_USER } from "../const/storageKey"
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
        <div class="text-center bg-gray-50 text-gray-800 pt-8 px-6 h-screen">
            <h1 class="text-5xl font-bold mt-0 mb-6">Translate</h1>
            <section id="translation">
                <TranslationForm onTranslate={handleTranslateClicked}/>
            </section>
            <div>
                <TranslationImage image={`img/individual_signs/a.png`} name="a" />
            </div>
        </div>
    )
}
export default withAuth(Translate)
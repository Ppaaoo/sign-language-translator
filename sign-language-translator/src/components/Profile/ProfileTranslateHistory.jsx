import ProfileTranslateHistoryItem from "./ProfileOrderHistoryItem"

const ProfileTranslateHistory = ({ translations }) => {
    const translationList = translations.map(
        (translation, index) => <ProfileTranslateHistoryItem key={index + '-' + translation} translation={translation}/>)

    return (
        <section>
            <h4>Your translation history:</h4>
            {translationList.length === 0 && <p>Your translation history is empty</p>}
            <ul>
                {translationList}
            </ul>
        </section>
    )
}
export default ProfileTranslateHistory
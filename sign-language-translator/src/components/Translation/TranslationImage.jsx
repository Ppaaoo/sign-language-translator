const TranslationImage = ({name, image}) => {
    return (
        <aside>
            <img src={image} alt={name} width="55"/>
        </aside>
    )
}

export default TranslationImage
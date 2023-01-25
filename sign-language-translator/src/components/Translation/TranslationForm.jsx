import { useForm } from "react-hook-form"

const TranslationForm = ({ onTranslate }) => {
    const {register, handleSubmit} = useForm()
    const onSubmit = ({translation}) => {onTranslate(translation)}

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor="translation">Translation</label>
                <input type="text" {...register('translation')} placeholder="Hello!"/>
            </fieldset>
            <button type="submit">Translate</button>
        </form>
    )
} 
export default TranslationForm
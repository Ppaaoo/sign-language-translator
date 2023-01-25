import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user'
import { storageSave } from '../../utils/storage'
import { useNavigate } from 'react-router-dom'
import { STORAGE_KEY_USER } from '../../const/storageKey'
import { useUser } from '../../context/UserContext'

const usernameConfig = {
    required: true,
    minLength: 3,
}

const LoginForm = () => {
    //Hooks
    const {register, handleSubmit, formState: { errors }} = useForm()
    const {user, setUser} = useUser()
    const navigate = useNavigate()

    //Local state
    const [ loading, setLoading ] = useState(false)
    const [ apiError, setApiError ] = useState(null) //If something went wrong while logging in

    //Side effects
    useEffect(() => {
        if(user !== null) {
            navigate('profile')
        }
    }, [user, navigate]) //Empty dependencies - Run ONCE

    //Event handlers
    const onSubmit = async ({username}) => {
        setLoading(true)
        const [error, user] = await loginUser(username)
        if(error !== null) {
            setApiError(error)
        }
        if(user !== null) {
            storageSave(STORAGE_KEY_USER, user) //if successfully logged in, store user in local storage
            setUser(user)
        }
        setLoading(false)
    }

    //Render functions
    const errorMessage = (() => {
        if(!errors.username) {
            return null
        }
        if(errors.username.type === 'required') {
            return <span>Username is required</span>
        }
        if(errors.username.type === 'minLength') {
            return <span>Username is too short (min. 3 characters)</span>
        }
    })()

    return (
        <>
        <h2 className="text-3xl font-bold underline">What's your name?</h2>
        <form onSubmit={ handleSubmit(onSubmit) }>
            <fieldset>
                <label htmlFor='username'>Username: </label>
                <input type="text" placeholder='John Doe'{...register("username", usernameConfig)} />
                { errorMessage }
            </fieldset>
            <button type="submit" disabled={loading}>Continue</button>

            {loading && <p>Logging in...</p>}
            {apiError && <p>{apiError}</p>}
        </form>
        </>
    )
}

export default LoginForm
import UserProvider from "./UserContex"

const AppContext = ({children}) => {

    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}

export default AppContext
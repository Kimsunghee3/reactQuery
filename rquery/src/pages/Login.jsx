import { useMutation } from "react-query"
import axios from "axios"

async function loginRequest(credentials){
    const response = await axios.post("/api/login", credentials)
    return response.data
}

export const Login = () => {
    const { mutate: login, isLoading, isError, error } = useMutation(loginRequest)

    const handleSubmit = (e) => {
        e.preventDefault()
        login({ username, password })
    }
    return(
        <>
            <div>
                <h2>Login</h2>
                {isError && <div>Error: {error.message}</div>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label> Username: </label>
                        <input type="text" {...username} />
                    </div>
                    <div>
                        <label> Password: </label>
                        <input type="password" {...password} />
                    </div>
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Loading...' : "login"}
                    </button>
                </form>
            </div>
        </>
    )
}



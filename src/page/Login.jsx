import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Login({onLogin}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()

        const err = {}
        if(username.trim() === '') err.username = 'Username wajib di isi'
        if(password.length < 6) err.password = 'Password minimal 6 karakter'
        setError(err)
        if(Object.keys(err).length > 0) return

        setLoading(true)
        const pesan = await onLogin (username, password)
        setLoading(false)

        if(pesan){
            setError({umum: pesan})
            return
        }

        navigate('/dashboard')
    }

    return(
        <div className="max-w-sm mx-auto py-20">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h1>
        
                <div className="mb-4">
                <input
                    type="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full"
                />
                {error.username && <p className="text-red-500 text-sm mt-1">{error.username}</p>}
                </div>
        
                <div className="mb-4">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full"
                />
                {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
                </div>
        
                {error.umum && <p className="text-red-500 text-sm mb-4">{error.umum}</p>}
        
                <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white"
                >
                    {loading ? 'loading...' : 'Masuk'}
                </button>
        
                <p className="text-center text-xs text-gray-400 mt-4">
                Coba: emilys / emilyspass
                </p>
            </form>
        </div>
    )
}

export default Login
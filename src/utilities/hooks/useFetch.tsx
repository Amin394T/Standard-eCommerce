import { useState, useEffect } from "react"

type returnType<Type> = {
    data: Type | null,
    loading: boolean,
    error: boolean
}

function useFetch<Type>(url: string): returnType<Type> {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    let fetchData = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
        }
        catch (error) {
            console.log(error)
            setError(true)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return { data, loading, error }
}

export default useFetch
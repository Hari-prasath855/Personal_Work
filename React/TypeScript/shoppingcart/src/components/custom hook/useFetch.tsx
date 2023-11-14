import { useEffect, useState } from "react"

export const useFetch = () => {
    const [data, setData] = useState<{}>()
    useEffect(() => {
        import('../../products.json')
            .then(response => {setData([response.products]);
            })
    }, [])
    return data
}
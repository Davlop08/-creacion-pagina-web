import { useEffect, useState } from "react"
import Loader from "./Loader"

export default function Main({children}) {
    
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(false)
    },[])

    if(loading){
        return <Loader/>
    }
    else{
    return (
        <main >
            {children}
        </main>

    )
    }
}

Main.defaultProps = {
    children: "agregar contenido al Main"
}
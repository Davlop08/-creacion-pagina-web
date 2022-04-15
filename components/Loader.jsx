import styles from "../styles/Loader.module.css"
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import { Fragment } from "react"

export default function Loader() {
    return (
        <div className={styles.loading}>
            <AiOutlineLoading3Quarters size={80} className={styles.spinning}/>
        </div>
    )
}

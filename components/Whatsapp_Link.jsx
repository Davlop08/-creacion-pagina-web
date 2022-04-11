import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Whatsapp.module.css'

export default function Whatsapp_Link() {
    return (
        <div>
            <Link href="https://wa.me/5491162039196">
                <a className={styles.whatsapp_style}>
                    <Image src="/wa_icon.png" alt="whatsapp paginas web" width={60} height={60}></Image>
                </a>
            </Link>
        </div>
    )
}

import styles from '../styles/Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'

export default function Header() {

    const[toggle, setToggle] = useState(styles.nav_menu_visible)

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                    <Link href="/">
                        <a className={styles.nav_link}>
                            <span className={styles.logo}>Logo</span>
                        </a>
                    </Link>

                    <button className={toggle, styles.toggle} onClick={()=>{

                        const data = document.querySelector("#nav_menu")
                        data.classList.toggle(styles.nav_menu_visible)
                    }}>
                        <Image className={styles.toggle_img} src="/iconos/barras menu.png" width={30} height={30} alt="Menu"></Image>
                    </button>
                        
                    <ul id="nav_menu" className={styles.nav_menu}>
                        <li className={styles.nav_menu_item}>
                            <Link href="/">
                                <a className={styles.nav_link}>
                                    <span className={styles.nav_menu_link}>Inicio</span>
                                </a>
                            </Link>
                        </li>

                        <li className={styles.nav_menu_item}>
                            <Link href="/">
                                <a className={styles.nav_link}>
                                    <span className={styles.nav_menu_link}>Contacto</span>
                                </a>
                            </Link>
                        </li>

                        <li className={styles.nav_menu_item}>
                            <Link href="/">
                                <a className={styles.nav_link}>
                                    <span className={styles.nav_menu_link}>Desarrollo Web</span>
                                </a>                            
                            </Link>
                        </li>

                        <li className={styles.nav_menu_item}>
                            <Link href="/">
                                <a className={styles.nav_link}>
                                    <span className={styles.nav_menu_link}>Nosotros</span>
                                </a>                            
                            </Link>
                        </li>
                    </ul>             
            </nav>
        </header>
    )
}


import styles from '../styles/Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'
import globals from "../globals"

export default function Header() {

    const[toggle, setToggle] = useState(styles.nav_menu_visible)

    const setToggleCallback = () =>{
        const data = document.querySelector("#nav_menu")
        data.classList.toggle(styles.nav_menu_visible)
    }

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                    <Link href={globals.direction}>
                        <a className={styles.nav_link}>
                            <span className={styles.logo}>Diseño Web</span>
                        </a>
                    </Link>

                    <button className={toggle, styles.toggle} aria-label="menú" onClick={setToggleCallback}>
                        <Image className={styles.toggle_img} src="/iconos/barras menu.png" width={30} height={30} alt="Menu"></Image>
                    </button>
                        
                    <ul id="nav_menu" className={styles.nav_menu} onClick={setToggleCallback}>
                        <li className={styles.nav_menu_item}>
                            <Link href={`${globals.direction}/`}>
                                <a className={styles.nav_link}>
                                    <span className={styles.nav_menu_link}>Inicio</span>
                                </a>
                            </Link>
                        </li>

                        <li className={styles.nav_menu_item}>
                            <Link href={`${globals.direction}/precios`}>
                                <a className={styles.nav_link}>
                                    <span className={styles.nav_menu_link}>Precios</span>
                                </a>
                            </Link>
                        </li>

                        <li className={styles.nav_menu_item}>
                            <Link href={`${globals.direction}/paginas`}>
                                <a className={styles.nav_link}>
                                    <span className={styles.nav_menu_link}>Desarrollo Web</span>
                                </a>                            
                            </Link>
                        </li>

                        <li className={styles.nav_menu_item}>
                            <Link href={`${globals.direction}`}>
                                <a className={styles.nav_link}>
                                    <span className={styles.nav_menu_link}>Contacto</span>
                                </a>                            
                            </Link>
                        </li>
                    </ul>             
            </nav>
        </header>
    )
}


import styles from '../styles/Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Header_content from './Header_content'

export default function Header() {
    return (
        <header>
            <nav className={styles.navContainer}>
                <div className= {styles.div_nav_container}>
                    <Link href="/">
                        <a className={styles.a_logo}>
                            <Image className={styles.logo_img} src="/favicon.ico" alt="logo" height={60} width={60}/>
                            <span className={styles.logo_span}>Diseño Web</span>
                        </a>
                    </Link>
        
                    <Header_content 
                        styleContainer={styles.elements_container} 
                        styleList={styles.elements_list}
                        styleLi={styles.list_li} 
                        styleElements={styles.elements}/>
                </div>
            </nav>
        </header>
    )
}

Header.defaultProps = {
    headerContent: "agregar contenido al header"
}
import Link from "next/link";

export default function Header_content({styleContainer, styleLi, styleList, styleElements}) {
    return (
        <div className={styleContainer}>

            <ul className={styleList}>
                <li className={styleLi}>
                    <Link href="/">
                        <a className={styleElements}>Inicio</a>
                    </Link>
                </li>
                <li className={styleLi}>
                    <Link href="/">
                        <a className={styleElements}>Contacto</a>
                    </Link>
                </li>
                <li className={styleLi}>
                    <Link href="/">
                        <a className={styleElements}>Paginas Web</a>
                    </Link>
                </li>
                <li className={styleLi}>
                    <Link href="/">
                        <a className={styleElements}>Publicidad</a>
                    </Link>
                </li>
            </ul>

        </div>
    )
}

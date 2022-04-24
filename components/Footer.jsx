import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import Image from "next/image"
import globals from "../globals"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.separator}></div>
            <div className={styles.footer_content_container}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.footer_col}>
                        <h4 className={styles.footer_col_h4}>Compañia</h4>
                        <ul className={styles.footer_col_ul}>
                            <li className={styles.footer_col_ul_li}>
                                <Link href={`${globals.direction}/nosotros`}>
                                    <a className={styles.footer_col_ul_a}>nosotros</a>
                                </Link>
                            </li>
                            <li className={styles.footer_col_ul_li}>
                                <Link href={`${globals.direction}/precios`}>
                                    <a className={styles.footer_col_ul_a}>servicios</a>
                                </Link>
                            </li>
                            <li className={styles.footer_col_ul_li}>
                                <Link href={`${globals.direction}/legales`}>
                                    <a className={styles.footer_col_ul_a}>legales</a>
                                </Link>
                            </li>
                            <li className={styles.footer_col_ul_li}>
                                <Link href={`${globals.direction}/contacto`}>
                                    <a className={styles.footer_col_ul_a}>contacto</a>
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div className={styles.footer_col}>
                        <h4 className={styles.footer_col_h4}>Ayuda</h4>
                        <ul className={styles.footer_col_ul}>
                            <li className={styles.footer_col_ul_li}>
                                <Link href={`${globals.direction}/paginas`}>
                                    <a className={styles.footer_col_ul_a}>tipos de paginas</a>
                                </Link>
                            </li>
                            <li className={styles.footer_col_ul_li}>
                                <Link href={`${globals.direction}/mediosdepago`}>
                                    <a className={styles.footer_col_ul_a}>medios de pago</a>
                                </Link>
                            </li>
                            <li className={styles.footer_col_ul_li}>
                                <Link href={`${globals.direction}/morosidad`}>
                                    <a className={styles.footer_col_ul_a}>morosidad</a>
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div className={styles.footer_col}>
                        <h4 className={styles.footer_col_h4}>Clientes</h4>
                        <ul className={styles.footer_col_ul}>
                            <li className={styles.footer_col_ul_li}>
                                <Link href={`${globals.direction}/errores`}>
                                    <a className={styles.footer_col_ul_a}>informar un error</a>
                                </Link>
                            </li>
                            <li className={styles.footer_col_ul_li}>
                                <Link href={`${globals.direction}/bajas`}>
                                    <a className={styles.footer_col_ul_a}>dar de baja el servicio</a>
                                </Link>
                            </li>
                            <li className={styles.footer_col_ul_li}>
                                <Link href={`${globals.direction}/publicidad`}>
                                    <a className={styles.footer_col_ul_a}>anunciar página</a>
                                </Link>
                            </li>
                            <li className={styles.footer_col_ul_li}>
                                <Link href={`${globals.direction}/mantenimiento`}>
                                    <a className={styles.footer_col_ul_a}>mejorar página</a>
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div className={styles.footer_col}>
                        <h4 className={styles.footer_col_h4}>Siganos</h4>
                        <div className={styles.social_links}>
                            <Link href={`${globals.contact.facebook}`}>
                                <a target="_BLANK" className={styles.footer_col_ul_a}>Facebook</a>
                            </Link>

                            <Link href="/">
                                <a className={styles.footer_col_ul_a}>Instagram</a>
                            </Link>

                            <Link href={`${globals.contact.whatsappLink}`}>
                                <a target="_BLANK" className={styles.footer_col_ul_a}>WhatsApp</a>
                            </Link>
                                
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className={styles.signature_container}>
                <Link href="https://creacion-pagina-web.vercel.app">
                        <a target="_BLANK" className={styles.signature_content}>
                            <span className={styles.signature_name}>Sitio web creado por</span>
                            <Image src="/favicon.ico" width={30} height={30} alt="diseño web"></Image>
                        </a>
                </Link>

            </div>
        </footer>
        

    )
}

Footer.defaultProps = {
    footerContent: "agregar contenido al footer"
}

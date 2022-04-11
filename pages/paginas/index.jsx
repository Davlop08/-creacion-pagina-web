import { Fragment } from "react"
import HeadMeta from "../../components/HeadMeta"
import Layout from "../../components/Layout"
import styles from "../../styles/pages.module.css"
import Image from "next/image"
import Link from "next/link"

export default function index() {
    return (
        <Fragment>
            <HeadMeta title="Paginas Web | Lorem Soluciones Web"/>

            <Layout>
                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <h1 className={styles.entry_content_title}><strong>Páginas web en Argentina al mejor precio</strong></h1>
                        <p className={styles.entry_content_description}>Tenemos la mejor relación precio-calidad del mercado, no solo por decirlo, sino porque
                            es así, ya que ofrecemos páginas de calidad, adaptables a todos los dispositivos, optimizadas en
                            el SEO para un mejor posicionamiento orgánico y una excelente experiencia para tus usuarios. Mirá nuestros planes:
                        </p>
                    </div>
                </section>

                <section className={styles.basic_pages_container}>

                    <div className={styles.basic_pages_title_container}>
                        <h3>Sitios web básicos</h3>
                    </div>

                    <div className={styles.basic_pages_content}>

                        <div className={`${styles.card_holder} ${styles.basic_pages_card_container}`}>
                            <Link href="/paginas">
                                <a>
                                    <div className={styles.card_container}>
                                        <div className={styles.card_img_container}>
                                            <Image className={styles.card_img} src="/imagenes/3.png" alt="pagina" width={250} height={200}></Image>
                                        </div>

                                        <div className={styles.page_type_title}>
                                            <h4>Landing Page</h4>
                                        </div>

                                        <div className={styles.page_type_description}>
                                            <p>Sitio web de una sola página y 10 imágenes. Ideal para mostrar la información más relevante de tu 
                                                negocio o tu portfolio
                                            </p>
                                        </div>

                                        <div className={styles.page_type_price}>
                                            <span>$9900</span>
                                        </div>

                                        <Link href="/paginas">
                                            <a className={styles.pages_view_more}>VER MAS</a>
                                        </Link>
                                    </div>
                                    
                                </a>
                                
                            </Link>
                        </div>


                        <div className={`${styles.card_holder} ${styles.basic_pages_card_container}`}>
                            <Link href="/paginas">
                                <a>
                                    <div className={styles.card_container}>
                                        <div className={styles.card_img_container}>
                                            <Image className={styles.card_img} src="/imagenes/3.png" alt="pagina" width={250} height={200}></Image>
                                        </div>

                                        <div className={styles.page_type_title}>
                                            <h4>Sitio básico</h4>
                                        </div>

                                        <div className={styles.page_type_description}>
                                            <p>Sitio web de hasta 4 páginas y 20 imágenes. Ideal si necesitas mostrar información más detallada sobre tu negocio.
                                                
                                            </p>
                                        </div>

                                        <div className={styles.page_type_price}>
                                            <span>$14900</span>
                                        </div>

                                        <Link href="/paginas">
                                            <a className={styles.pages_view_more}>VER MAS</a>
                                        </Link>
                                    </div>
                                    
                                </a>
                                
                            </Link>
                        </div>


                        <div className={`${styles.card_holder} ${styles.basic_pages_card_container}`}>
                            <Link href="/paginas">
                                <a>
                                    <div className={styles.card_container}>
                                        <div className={styles.card_img_container}>
                                            <Image className={styles.card_img} src="/imagenes/3.png" alt="pagina" width={250} height={200}></Image>
                                        </div>

                                        <div className={styles.page_type_title}>
                                            <h4>Sitio básico +</h4>
                                        </div>

                                        <div className={styles.page_type_description}>
                                            <p>Sitio web de hasta 6 páginas y 30 imágenes. Si necesitas aún más detalle de lo que haces, esta es la ideal
                                                
                                            </p>
                                        </div>

                                        <div className={styles.page_type_price}>
                                            <span>$18900</span>
                                        </div>

                                        <Link href="/paginas">
                                            <a className={styles.pages_view_more}>VER MAS</a>
                                        </Link>
                                    </div>
                                    
                                </a>
                                
                            </Link>
                        </div>


                    </div>
                </section>
            </Layout>
        </Fragment>
    )
}

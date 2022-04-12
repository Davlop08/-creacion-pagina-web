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
                            el SEO para un mejor posicionamiento en buscadores y una excelente experiencia para tus usuarios. Seleccioná algún plan para ver a detalle:
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
                                            <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>$9.900</span>
                                            <span className={styles.aux_price_info}>por única vez</span>
                                        </div>

                                        <span className={styles.pages_view_more}>VER MAS</span>

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
                                            <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>$14.900</span>
                                            <span className={styles.aux_price_info}>por única vez</span>
                                        </div>

                                        <span className={styles.pages_view_more}>VER MAS</span>
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
                                            <p>Sitio web de hasta 6 páginas y 30 imágenes. Si necesitas detallar aún más tus productos o servicios, 
                                            este sitio es el ideal
                                                
                                            </p>
                                        </div>

                                        <div className={styles.page_type_price}>
                                            <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>$18.900</span>
                                            <span className={styles.aux_price_info}>por única vez</span>
                                        </div>

                                        <span className={styles.pages_view_more}>VER MAS</span>
                                    </div>
                                    
                                </a>
                                
                            </Link>
                        </div>


                    </div>
                </section>

                <section className={styles.admin_sites_container}>
                    <div className={styles.admin_sites_title_container}>
                        <h3>Tiendas online</h3>
                    </div>

                    <div className={styles.admin_sites_content}>

                        <div className={`${styles.card_holder} ${styles.basic_pages_card_container}`}>
                            <Link href="/paginas">
                                <a>
                                    <div className={styles.card_container}>
                                        <div className={styles.card_img_container}>
                                            <Image className={styles.card_img} src="/imagenes/3.png" alt="pagina" width={250} height={200}></Image>
                                        </div>

                                        <div className={styles.page_type_title}>
                                            <h4>Tienda básica</h4>
                                        </div>

                                        <div className={styles.page_type_description}>
                                            <p>Sitio web con 3 páginas en el que podés vender tus productos, ofrecer medios de envío y
                                                cobrar con mercado pago. No incluye carrito de compras
                                                
                                            </p>
                                        </div>

                                        <div className={styles.page_type_price}>
                                            <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>$27.900</span>
                                            <span className={styles.aux_price_info}>por única vez</span>
                                        </div>

                                        <span className={styles.pages_view_more}>VER MAS</span>
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
                                            <h4>Tienda básica +</h4>
                                        </div>

                                        <div className={styles.page_type_description}>
                                            <p>Sitio web con 4 páginas en el que podés vender tus productos, ofrecer medios de envío y
                                                cobrar con mercado pago. Incluye carrito de compras
                                                
                                            </p>
                                        </div>

                                        <div className={styles.page_type_price}>
                                            <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>$34.900</span>
                                            <span className={styles.aux_price_info}>por única vez</span>
                                        </div>

                                        <span className={styles.pages_view_more}>VER MAS</span>
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
                                            <h4>Tienda recomendada</h4>
                                        </div>

                                        <div className={styles.page_type_description}>
                                            <p>Sitio web con 5 páginas en el que podés vender tus productos,
                                                cobrar con mercado pago, carrito, alta de clientes y control de stock
                                            </p>
                                        </div>

                                        <div className={styles.page_type_price}>
                                            <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>$39.900</span>
                                            <span className={styles.aux_price_info}>por única vez</span>
                                        </div>

                                        <span className={styles.pages_view_more}>VER MAS</span>
                                    </div>
                                </a>
                            </Link>
                        </div>        

                    </div>

                </section>

                <section className={styles.host_info_container}>
                    <div className={styles.content_host_container}>
                        <h4 className={styles.content_host_title}>Todos nuestros sitios contienen Hosting y dominio.com gratuito el primer año!</h4>
                        <p className={styles.content_host_description}>Pasado ese tiempo, se deberán renovar de manera anual de acuerdo al tipo de sitio Web construido</p>
                    </div>
                </section>
            </Layout>
        </Fragment>
    )
}

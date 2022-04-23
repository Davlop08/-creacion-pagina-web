import { Fragment } from "react"
import HeadMeta from "../../components/HeadMeta"
import Layout from "../../components/Layout"
import styles from "../../styles/pages.module.css"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "../../components/ContactForm"
import globals from "../../globals"

export default function index() {
    return (
        <Fragment>
            <HeadMeta title="Paginas Web | Lorem Soluciones Web" metaDescription="Conocé los precios de las distintas 
            páginas web que tenemos para ofrecerte. Asesoramiento gratuito para que obtengas la que mejor se adapte a tus
            necesidades"/>

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
                            <Link href="/paginas/landing">
                                <a>
                                    <div className={styles.card_container}>
                                        <div className={styles.card_img_container}>
                                            <Image className={styles.card_img} src="/pages/landing.svg" alt="pagina" width={250} height={200}></Image>
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
                                            <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>{globals.pagesPrices.landing}*</span>
                                            <span className={styles.aux_price_info}>por única vez**</span>
                                        </div>

                                        <span className={styles.pages_view_more}>VER MAS</span>

                                    </div>
                                    
                                </a>
                                
                            </Link>
                        </div>


                        <div className={`${styles.card_holder} ${styles.basic_pages_card_container}`}>
                            <Link href="/paginas/basico">
                                <a>
                                    <div className={styles.card_container}>
                                        <div className={styles.card_img_container}>
                                            <Image className={styles.card_img} src="/pages/pagina_basica.svg" alt="pagina" width={250} height={200}></Image>
                                        </div>

                                        <div className={styles.page_type_title}>
                                            <h4>Sitio básico</h4>
                                        </div>

                                        <div className={styles.page_type_description}>
                                            <p>Sitio web de hasta 4 páginas y 20 imágenes. Ideal si necesitas mostrar información más detallada sobre tu negocio.
                                                
                                            </p>
                                        </div>

                                        <div className={styles.page_type_price}>
                                            <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>{globals.pagesPrices.basica}*</span>
                                            <span className={styles.aux_price_info}>por única vez**</span>
                                        </div>

                                        <span className={styles.pages_view_more}>VER MAS</span>
                                    </div>
                                    
                                </a>
                                
                            </Link>
                        </div>


                        <div className={`${styles.card_holder} ${styles.basic_pages_card_container}`}>
                            <Link href="/paginas/basico_plus">
                                <a>
                                    <div className={styles.card_container}>
                                        <div className={styles.card_img_container}>
                                            <Image className={styles.card_img} src="/pages/pagina_basica_plus.svg" alt="pagina" width={250} height={200}></Image>
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
                                            <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>{globals.pagesPrices.basicaPlus}*</span>
                                            <span className={styles.aux_price_info}>por única vez**</span>
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
                            <Link href="/paginas/tienda_basica">
                                <a>
                                    <div className={styles.card_container}>
                                        <div className={styles.card_img_container}>
                                            <Image className={styles.card_img} src="/pages/tienda_basica.svg" alt="pagina" width={250} height={200}></Image>
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
                                            <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>{globals.pagesPrices.tiendaBasica}*</span>
                                            <span className={styles.aux_price_info}>por única vez**</span>
                                        </div>

                                        <span className={styles.pages_view_more}>VER MAS</span>
                                    </div>
                                </a>
                            </Link>
                        </div>

                        <div className={`${styles.card_holder} ${styles.basic_pages_card_container}`}>
                            <Link href="/paginas/tienda_basica_plus">
                                <a>
                                    <div className={styles.card_container}>
                                        <div className={styles.card_img_container}>
                                            <Image className={styles.card_img} src="/pages/tienda_basica_plus.svg" alt="pagina" width={250} height={200}></Image>
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
                                            <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>{globals.pagesPrices.tiendaBasicaPlus}*</span>
                                            <span className={styles.aux_price_info}>por única vez**</span>
                                        </div>

                                        <span className={styles.pages_view_more}>VER MAS</span>
                                    </div>
                                </a>
                            </Link>
                        </div>            


                        <div className={`${styles.card_holder} ${styles.basic_pages_card_container}`}>
                            <Link href="/paginas/tienda_recomendada">
                                <a>
                                    <div className={styles.card_container}>
                                        <div className={styles.card_img_container}>
                                            <Image className={styles.card_img} src="/pages/tienda_recomendada.svg" alt="pagina" width={250} height={200}></Image>
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
                                            <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>{globals.pagesPrices.tiendaRecomendada}*</span>
                                            <span className={styles.aux_price_info}>por única vez**</span>
                                        </div>

                                        <span className={styles.pages_view_more}>VER MAS</span>
                                    </div>
                                </a>
                            </Link>
                        </div>        
                        
                    </div>

                </section>


                <section className={styles.custom_sites_container}>
                    <div className={styles.custom_sites_title_container}>
                        <h3>Sitios personalizados</h3>
                    </div>

                    <div className={styles.custom_sites_content}>

                    <div className={`${styles.card_holder} ${styles.basic_pages_card_container}`}>
                            <Link href="/paginas/personalizado">
                                <a>
                                    <div className={styles.card_container}>
                                        <div className={styles.card_img_container}>
                                            <Image className={styles.card_img} src="/pages/pagina_web_personalizada.svg" alt="pagina" width={250} height={200}></Image>
                                        </div>

                                        <div className={styles.page_type_title}>
                                            <h4>Sitio a medida</h4>
                                        </div>

                                        <div className={styles.page_type_description}>
                                            <p>Sitio web completamente personalizado, diseñado a la medida de tu proyecto, con las
                                                páginas, imágenes y demás contenido que necesites.
                                            </p>
                                        </div>

                                        <div className={styles.page_type_price}>
                                            <span className={styles.aux_price}>$ A convenir*</span>
                                            <span className={styles.aux_price_info}>por única vez**</span>
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
                        <h5 className={styles.content_host_title}>*Todos nuestros sitios contienen Hosting y dominio.com gratuito el primer año!</h5>
                        <p className={styles.content_host_description}>**Pasado ese tiempo, se deberán renovar de manera anual de acuerdo al tipo de sitio Web construido</p>
                    </div>
                </section>

                <section className={styles.help_container}>
                    <div className={styles.help_content_container}>
                        <h5 className={styles.help_content_title}>
                            ¿Necesitas asesoramiento?
                        </h5>
                        <p className={styles.help_content_description}>Comunicate de manera gratuita a través de WhatsApp o mandanos tus datos en el siguiente formulario
                            y nos comunicaremos con vos
                        </p>
                    </div>
                </section>

                <ContactForm/>

            </Layout>
        </Fragment>
    )
}

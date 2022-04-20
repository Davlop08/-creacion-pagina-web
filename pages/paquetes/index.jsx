import {Fragment} from "react"
import HeadMeta from "../../components/HeadMeta"
import Layout from "../../components/Layout"
import styles from "../../styles/Packs.module.css"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "../../components/ContactForm"
import globals from "../../globals"

export default function index() {
    return (
        <Fragment>
            <HeadMeta title="Paquetes Web | Lorem soluciones web"/>

            <Layout>
                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <h1 className={styles.entry_content_title}>Paquetes Web</h1>
                        <p className={styles.entry_content_description}>Te ofrecemos los mejores paquetes, los cuales contienen: 
                            tu sitio web, publicidad en google, administración de la página y mantenimiento de la misma, 
                            para que comiences tu negocio online sin preocupaciones y ahorrando!
                            </p>
                    </div>
                </section>

                <section className={styles.plan_details_container}>
                    <div className={styles.plan_details_content}>

                    <div className={`${styles.card_holder} ${styles.plan_details_card_container}`}>
                            <Link href="https://api.whatsapp.com/send?phone=5491162039196&text=Hola%2C%20estoy%20interesado%20en%20el%20paquete%20custom">
                                <a>
                                    <div className={styles.card_container}>
                                        <div className={styles.card_img_container}>
                                            <Image className={styles.card_img} src="/imagenes/3.png" alt="pagina" width={250} height={200}></Image>
                                        </div>

                                        <div className={styles.plan_type_title}>
                                            <h4>Paquete custom</h4>
                                        </div>

                                        <div className={styles.plan_type_description}>
                                            <p>Este plan consta con sitio ajustado a tu necesidad, campaña de publicidad personalizada, cambios 
                                                mensuales acordados y mantenimiento en el sitio
                                            </p>
                                        </div>

                                        <div className={styles.plan_type_price}>
                                            <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>$A convenir</span>
                                            <span className={styles.aux_price_info}>Mensuales*</span>
                                        </div>

                                        <span className={styles.pages_view_more}>Lo quiero!</span>

                                    </div>
                                </a>
                            </Link>
                        </div>


                        <div className={`${styles.card_holder} ${styles.plan_details_card_container}`}>
                            <Link href="https://api.whatsapp.com/send?phone=5491162039196&text=Hola%2C%20estoy%20interesado%20en%20el%20paquete%20starter">
                                <a>
                                    <div className={styles.card_container}>
                                        <div className={styles.card_img_container}>
                                            <Image className={styles.card_img} src="/imagenes/3.png" alt="pagina" width={250} height={200}></Image>
                                        </div>

                                        <div className={styles.plan_type_title}>
                                            <h4>Paquete starter</h4>
                                        </div>

                                        <div className={styles.plan_type_description}>
                                            <p>Este plan consta con sitio web de 3 páginas, campaña de publicidad básica en Google, 10 cambios 
                                                mensuales y mantenimiento en el sitio
                                            </p>
                                        </div>

                                        <div className={styles.plan_type_price}>
                                            <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>{globals.packs.starter}</span>
                                            <span className={styles.aux_price_info}>Mensuales*</span>
                                        </div>

                                        <span className={styles.pages_view_more}>Lo quiero!</span>

                                    </div>
                                </a>
                            </Link>
                        </div>


                        <div className={`${styles.card_holder} ${styles.plan_details_card_container}`}>
                            <Link href="https://api.whatsapp.com/send?phone=5491162039196&text=Hola%2C%20estoy%20interesado%20en%20el%20paquete%20pyme">
                                <a>
                                    <div className={styles.card_container}>
                                        <div className={styles.card_img_container}>
                                            <Image className={styles.card_img} src="/imagenes/3.png" alt="pagina" width={250} height={200}></Image>
                                        </div>

                                        <div className={styles.plan_type_title}>
                                            <h4>Paquete pyme</h4>
                                        </div>

                                        <div className={styles.plan_type_description}>
                                            <p>Este plan consta con sitio web de 4 páginas, campaña de publicidad sobresaliente en Google, 10 cambios 
                                                mensuales y mantenimiento en el sitio
                                            </p>
                                        </div>

                                        <div className={styles.plan_type_price}>
                                            <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>{globals.packs.pyme}</span>
                                            <span className={styles.aux_price_info}>Mensuales*</span>
                                        </div>

                                        <span className={styles.pages_view_more}>Lo quiero!</span>

                                    </div>
                                </a>
                            </Link>
                        </div>
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

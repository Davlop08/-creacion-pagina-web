import { Fragment } from "react"
import HeadMeta from "../../components/HeadMeta"
import Layout from "../../components/Layout"
import styles from "../../styles/maintenance.module.css"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "../../components/ContactForm"
import globals from "../../globals"

export default function index() {
    return (
        <Fragment>
            <HeadMeta title="Mantenimiento Web | Lorem Soluciones Web"/>

            <Layout>

            <section className={styles.entry_container}>
                <div className={styles.entry_content_container}>
                    <h1 className={styles.entry_title}>Administración y mantenimiento Web</h1>
                    <p className={styles.entry_description}>Si querés que administremos tu sitio web por vos, te ofrecemos 
                    los mejores planes a tu conveniencia. O si querés optimizar o modernizar tu sitio, entonces te asesoramos
                    durante todo el proceso para que obtengas la mejor actualización de acuerdo a tus necesidades
                    </p>
                </div>
            </section>


            <section className={styles.plan_details_container}>

                    <div className={styles.plan_details_title_container}>
                        <h3>Planes Estandar. Presioná el que necesites para obtener atención personalizada por WhatsApp</h3>
                    </div>

                    <div className={styles.plan_details_content}>

                            <div className={`${styles.card_holder} ${styles.plan_details_card_container}`}>
                                <Link href="https://api.whatsapp.com/send?phone=5491162039196&text=Hola%2C%20quiero%20consultar%20por%20el%20plan%20de%20administraci%C3%B3n%20b%C3%A1sico">
                                    <a>
                                        <div className={styles.card_container}>
                                            <div className={styles.card_img_container}>
                                                <Image className={styles.card_img} src="/imagenes/3.png" alt="pagina" width={250} height={200}></Image>
                                            </div>

                                            <div className={styles.plan_type_title}>
                                                <h4>Plan básico</h4>
                                            </div>

                                            <div className={styles.plan_type_description}>
                                                <p>Este plan consta de 10 cambios mensuales en el sitio, como imágenes, texto, 
                                                    colores, fuentes, fondos, etc...
                                                </p>
                                            </div>

                                            <div className={styles.plan_type_price}>
                                                <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>{globals.plans.basic}</span>
                                                <span className={styles.aux_price_info}>Mensuales*</span>
                                            </div>

                                            <span className={styles.pages_view_more}>Lo quiero!</span>

                                        </div>
                                    </a>
                                </Link>
                            </div>

                            <div className={`${styles.card_holder} ${styles.plan_details_card_container}`}>
                                <Link href="https://api.whatsapp.com/send?phone=5491162039196&text=Hola%2C%20quiero%20consultar%20por%20el%20plan%20de%20administraci%C3%B3n%20b%C3%A1sico%20%2B">
                                    <a>
                                        <div className={styles.card_container}>
                                            <div className={styles.card_img_container}>
                                                <Image className={styles.card_img} src="/imagenes/3.png" alt="pagina" width={250} height={200}></Image>
                                            </div>

                                            <div className={styles.plan_type_title}>
                                                <h4>Plan básico +</h4>
                                            </div>

                                            <div className={styles.plan_type_description}>
                                                <p>Este plan consta de 17 cambios mensuales en el sitio, como imágenes, texto, 
                                                    colores, fuentes, fondos, etc...
                                                </p>
                                            </div>

                                            <div className={styles.plan_type_price}>
                                                <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>{globals.plans.basicPlus}</span>
                                                <span className={styles.aux_price_info}>Mensuales*</span>
                                            </div>

                                            <span className={styles.pages_view_more}>Lo quiero!</span>

                                        </div>
                                    </a>
                                </Link>
                            </div>

                            <div className={`${styles.card_holder} ${styles.plan_details_card_container}`}>
                                <Link href="https://api.whatsapp.com/send?phone=5491162039196&text=Hola%2C%20quiero%20consultar%20por%20el%20plan%20de%20administraci%C3%B3n%20pyme">
                                    <a>
                                        <div className={styles.card_container}>
                                            <div className={styles.card_img_container}>
                                                <Image className={styles.card_img} src="/imagenes/3.png" alt="pagina" width={250} height={200}></Image>
                                            </div>

                                            <div className={styles.plan_type_title}>
                                                <h4>Plan pyme</h4>
                                            </div>

                                            <div className={styles.plan_type_description}>
                                                <p>Este plan consta de 25 cambios mensuales en el sitio, como imágenes, texto, 
                                                    colores, fuentes, fondos, etc...
                                                </p>
                                            </div>

                                            <div className={styles.plan_type_price}>
                                                <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>{globals.plans.pyme}</span>
                                                <span className={styles.aux_price_info}>Mensuales*</span>
                                            </div>

                                            <span className={styles.pages_view_more}>Lo quiero!</span>

                                        </div>
                                    </a>
                                </Link>
                            </div>

                            <div className={`${styles.card_holder} ${styles.plan_details_card_container}`}>
                                <Link href="https://api.whatsapp.com/send?phone=5491162039196&text=Hola%2C%20quiero%20consultar%20por%20el%20plan%20de%20administraci%C3%B3n%20individual">
                                    <a>
                                        <div className={styles.card_container}>
                                            <div className={styles.card_img_container}>
                                                <Image className={styles.card_img} src="/imagenes/3.png" alt="pagina" width={250} height={200}></Image>
                                            </div>

                                            <div className={styles.plan_type_title}>
                                                <h4>Plan individual</h4>
                                            </div>

                                            <div className={styles.plan_type_description}>
                                                <p>Este plan consta de 1 solo cambio en el sitio, y es ideal si tu sitio no cambia mucho en el tiempo,
                                                    ya que pagas solamente por el cambio que queres hacer                 
                                                </p>
                                            </div>

                                            <div className={styles.plan_type_price}>
                                                <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>{globals.plans.individual}</span>
                                                <span className={styles.aux_price_info}>por cambio</span>
                                            </div>

                                            <span className={styles.pages_view_more}>Lo quiero!</span>

                                        </div>
                                    </a>
                                </Link>
                            </div>

                    </div>
            </section>

            <section className={styles.plan_details_container}>

                <div className={styles.plan_details_title_container}>
                    <h3>Mantenimiento de tu Web</h3>
                </div>

                <div className={styles.plan_details_content}>
                    <div className={`${styles.card_holder} ${styles.plan_details_card_container}`}>
                        <Link href="https://api.whatsapp.com/send?phone=5491162039196&text=Hola%2C%20quiero%20consultar%20por%20el%20servicio%20de%20mantenimiento%20web">
                            <a>
                                <div className={styles.card_container}>
                                    <div className={styles.card_img_container}>
                                        <Image className={styles.card_img} src="/imagenes/3.png" alt="pagina" width={250} height={200}></Image>
                                    </div>

                                    <div className={styles.plan_type_title}>
                                        <h4>Mantenimiento</h4>
                                    </div>

                                    <div className={styles.plan_type_description}>
                                        <p>Si querés optimizar o mejorar tu sitio web, entonces comunicate con nosotros y te asesoramos
                                            sin cargo para que sepas los pasos a seguir                 
                                        </p>
                                    </div>

                                    <div className={styles.plan_type_price}>
                                        <span className={styles.aux_price}><span className={styles.aux_price_abreviation}>AR</span>$ A convenir</span>
                                    </div>

                                    <span className={styles.pages_view_more}>Lo quiero!</span>

                                </div>
                            </a>
                        </Link>
                    </div>
                </div>

            </section>


            <section className={styles.plan_info_container}>
                    <div className={styles.content_plan_container}>
                        <p className={styles.content_plan_description}>*Los cambios no son acumulables, una vez cumplido el mes 
                            se reiniciará el contador de cambios del plan seleccionado. En caso de requerir más cambios y se haya
                            acabado la cuota mensual, se pueden solicitar más con un precio de AR$200 cada uno.
                        </p>
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

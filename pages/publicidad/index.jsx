import { Fragment } from "react";
import Layout from "../../components/Layout"
import HeadMeta from "../../components/HeadMeta"
import styles from "../../styles/Ads.module.css"
import Image from  "next/image"
import ContactForm from "../../components/ContactForm"
import globals from "../../globals";


export default function index() {
    return (
        <Fragment>

            <HeadMeta title="Publicidad Web | Lorem Soluciones Web"/>

            <Layout>
                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <h1 className={styles.entry_content_title}>
                            Publicidad en Google
                        </h1>

                        <p className={styles.entry_content_description}>
                            Impulsá tu negocio dándole visibilidad con Google Ads. Generá clientes, consultas y por ende, más
                            ingresos. Pagás por resultados y definís el tope mensual que disponés para publicitar. Mirá los
                            beneficios:
                        </p>
                    </div>
                </section>

                <section className={styles.container_benefits}>
                    <div className={styles.container_benefits_content}>              

                        <div className={`${styles.list_item} ${styles.list_item_1}`}>
                            <h5 className={styles.benefits_title}>Controlar el presupuesto</h5>
                            <p className={styles.benefits_description}>Vos definís el tope máximo que estás dispuesto a pagar por mes, el cual varía de acuerdo
                                al tipo de estrategia que se utilice, por ejemplo, pagar por clicks a la página o que 
                                solamente aparezca en la búsqueda. De la mano de una buena campaña de publicidad que te 
                                ofrecemos, tu negocio generará más ingresos
                            </p>
                        </div>

                        <div className={`${styles.list_img} ${styles.list_img_1}`}>
                            <Image src="/ads/presupuesto.svg" alt="presupuesto publicidad google" width={250} height={200}/>
                        </div>

                        <div className={`${styles.list_item} ${styles.list_item_1}`}>
                            <h5 className={styles.benefits_title}>Llegar a clientes potenciales</h5>
                            <p className={styles.benefits_description}>Al publicitar una página, lo que nos interesa es llegar
                                a clientes potenciales en zonas geográficas específicas, maximizando las posibilidades de éxito
                            </p>
                        </div>

                        <div className={`${styles.list_img} ${styles.list_img_1}`}>
                            <Image src="/ads/clientes.svg" alt="presupuesto publicidad google" width={300} height={200}/>
                        </div>

                        <div className={`${styles.list_item} ${styles.list_item_1}`}>
                            <h5 className={styles.benefits_title}>Ver estadisticas de los anuncios</h5>
                            <p className={styles.benefits_description}>Podremos ver los anuncios mas eficaces y aprovecharlos,
                                y de igual manera también mejorar los menos eficaces, ya que las búsquedas varían mucho de 
                                acuerdo a fechas especiales y la relación con tu rubro. También se puede mostrar las 
                                estadisticas de cuántos clientes entran a la página por medio del anuncio, así te vas a dar 
                                cuenta si una campaña de publicidad funciona o se debe mejorar
                            </p>
                        </div>

                        <div className={`${styles.list_img} ${styles.list_img_1}`}>
                            <Image src="/ads/analisis.svg" alt="presupuesto publicidad google" width={250} height={200}/>
                        </div>

                    </div>                        

                </section>

                <section className={styles.container_service}>
                    <div className={styles.service_content}>
                        <h5 className={styles.service_content_title}>
                            Desde {globals.publicity}* + inversión**
                        </h5>
                        <p className={styles.service_content_description}>*El valor puede ser mayor de acuerdo a la complejidad de la campaña</p>
                        <p className={styles.service_content_description}>**Costo mensual, sin mínimo de inversión</p>
                        <h5 className={styles.service_content_aux_title}>Escribinos por WhatsApp o dejanos tus datos y nos comunicaremos con vos para brindarte un asesoramiento 
                            personalizado</h5>
                    </div>

                    <div>

                    </div>

                    <ContactForm />
                </section>
            </Layout>
        </Fragment>
    )
}

import {Fragment} from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "../../components/Layout"
import HeadMeta from "../../components/HeadMeta"
import styles from "../../styles/Individual_Pages.module.css"


export default function landing() {
    return (
        <Fragment>

            <HeadMeta title="nombre | Lorem Soluciones Web" metaDescription="agregar descripcion"/>

            <Layout>

                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <h1 className={styles.entry_content_title}>Landing Page</h1>
                        <p className={styles.entry_content_description}>
                            Landing Page o página de aterrizaje, es aquella en donde mostramos la información más 
                            relevante de nuestro producto o servicio, y consiste en una sola página en donde mostramos 
                            información básica y concreta de lo que hacemos, algunas imágenes, información de contacto 
                            y/o un formulario, con el propósito de captar la atención de potenciales clientes. 
                            La principal función de la Landing Page es simple, guiar al cliente sutilmente para haga lo que queremos, 
                            que en este caso es que se contacte con vos, o que te conozca y adquiera lo que ofreces por medio
                            de un estratégico diseño que te ofrecemos. No dudes más y empezá a potenciar tu negocio!
                        </p>
                    </div>
                </section>

                <section className={styles.site_info_container}>
                    <div className={styles.site_info_content_container}>
                        <div className={`${styles.card_item} ${styles.card_item_1}`}>
                            <h5>Precio</h5>
                            <p>AR$9.900</p>
                        </div>
                        <div className={`${styles.card_item} ${styles.card_item_2}`}>
                            <h5>Páginas</h5>
                            <p>1</p>
                        </div>
                        <div className={`${styles.card_item} ${styles.card_item_3}`}>
                            <h5>Imágenes máximas</h5>
                            <p>10</p>
                        </div>
                        <div className={`${styles.card_item} ${styles.card_item_4}`}>
                            <h5>Botón de WhatsApp</h5>
                            <div className={styles.card_wa_container}>
                                <Image src="/wa_icon.png" alt="whatsapp" width={40} height={40}/>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </Fragment>
    )
}

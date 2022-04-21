import { Fragment } from "react";
import Layout from "../../components/Layout"
import HeadMeta from "../../components/HeadMeta"
import styles from "../../styles/Contact.module.css"

export default function index() {
    return (
        <Fragment>
            <HeadMeta title="Contacto | Lorem Soluciones Web" metaDescription="Contactanos para obtener una atención personalizada
            sobre diseño web, publicidad en Google, mantenimiento web y paquetes"/>

            <Layout>
                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <h1 className={styles.entry_title}>Contacto Diseño Web</h1>
                        <p className={styles.entry_description}>
                            Te brindamos distintos canales para que puedas obtener asesoramiento totalmente personalizado
                            y gratuito, contratar servicios o recibir asistencia técnica, no dudes en comunicarte!
                        </p>
                    </div>
                </section>

                <section className={styles.contact_channels_container}>
                    <div className={styles.contact_channels_content_container}>

                    </div>
                </section>
            </Layout>
        </Fragment>
    )
}

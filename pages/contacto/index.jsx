import { Fragment } from "react";
import Layout from "../../components/Layout"
import HeadMeta from "../../components/HeadMeta"
import styles from "../../styles/Contact.module.css"
import globals from "../../globals";
import Link from "next/link"
import ContactForm from "../../components/ContactForm"

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
                        <div className={styles.contact_element}>
                            <h4>Teléfono:</h4>
                            <Link href={`tel:${globals.contact.number}`}>{globals.contact.number}</Link>
                        </div>
                        <div className={styles.contact_element}>
                            <h4>Email:</h4>
                            <Link href={`mailto:${globals.contact.mail}?`}>
                                {globals.contact.mail}</Link>
                        </div>
                    </div>
                </section>

                <section className={styles.form_container}>
                    <div className={styles.form_container_content}>
                        <h4 className={styles.form_title}>
                            O dejanos tus datos a continuación y nos comunicaremos con vos a la brevedad
                        </h4>

                        <ContactForm />
                    </div>
                </section>
            </Layout>
        </Fragment>
    )
}

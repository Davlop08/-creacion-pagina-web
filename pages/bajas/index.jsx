import HeadMeta from "../../components/HeadMeta"
import Layout from "../../components/Layout"
import ContactForm from "../../components/ContactForm"
import { Fragment } from "react"
import styles from "../../styles/Errors.module.css"

export default function Index (){

    return(
        <Fragment>
            <HeadMeta title="Bajas | Diseño Web AR" metaDescription="Si necesitas dar de baja tu servicio prestado por nosotros, entrá y empezá el proceso"></HeadMeta>

            <Layout>
                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <h1 className={styles.entry_content_title}>Dar de baja el servicio</h1>
                        <p className={styles.entry_content_description}>
                            Para realizar consultas, informar errores o darte de baja,
                            comunicate al 
                            <a href="https://api.whatsapp.com/send?phone=5491162039196&text=Hola%2C%20quiero%20darme%20de%20baja" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.wa_link}> WhatsApp, </a> o dejanos tus datos y nos comunicaremos con vos para
                            gestionar tu solicitud. Recordá que si estás insatisfecho con el servicio, o tenés alguna queja o
                            reclamo, detallalo en el mensaje, así podemos mejorar el servicio que te ofrecemos y lo pienses
                            dos veces!
                        </p>
                    </div>
                </section>

                <section className={styles.form_container}>
                    <ContactForm/>
                </section>

                <section className={styles.entry_container}>

                    <div className={styles.entry_content_container}>
                        <p className={styles.entry_content_description}>
                            Lamentamos los inconvenientes causados, trabajamos constantemente para brindarte el mejor
                            servicio posible
                        </p>
                    </div>
                </section>
            </Layout>
        </Fragment>
    )
}
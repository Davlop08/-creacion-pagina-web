import HeadMeta from "../../components/HeadMeta"
import Layout from "../../components/Layout"
import ContactForm from "../../components/ContactForm"
import { Fragment } from "react"
import styles from "../../styles/Errors.module.css"

export default function Index (){

    return(
        <Fragment>
            <HeadMeta title="Reporte De Errores | Diseño Web AR" metaDescription=""></HeadMeta>

            <Layout>
                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <h1 className={styles.entry_content_title}>Informe de errores</h1>
                        <p className={styles.entry_content_description}>
                            ¿Tuviste algún problema? No te preocupes, dejanos tus datos a continuación y nos
                            comunicaremos con vos a la brevedad para solucionarlo, pero, si lo preferís, podés escribirnos por 
                            <a href="https://api.whatsapp.com/send?phone=5491162039196&text=Hola%2C%20estoy%20teniendo%20un%20problema" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.wa_link}> WhatsApp. </a>Por favor indicanos el 
                            motivo del problema con el mayor detalle posible con el fin de solucionarlo de una manera más eficaz.
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
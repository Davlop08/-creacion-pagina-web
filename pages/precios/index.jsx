import {Fragment} from "react"
import styles from "../../styles/Prices.module.css"
import Layout from "../../components/Layout"
import Services_Cards from "../../components/Services_Cards"
import ContactForm from "../../components/ContactForm"

export default function index() {
    return (
        <Fragment>

            <Layout>
                <section className={styles.entry_section}>
                    <div className={styles.entry_content_container}>
                        <h1 className={styles.entry_title}><strong>Precios Diseño Web</strong></h1>
                        <p className={styles.entry_description}>
                            Te ofrecemos los mejores precios para crear tu página o sitio web, publicidad en Google,
                            administración, mantenimiento y paquetes completos para que empieces a ofrecer tus productos o 
                            servicios online.
                        </p>
                    </div>

                </section>

                <section className={styles.arrow_container}>
                    <div className={styles.arrow}>
                        <span></span>
                        <span></span>
                        <span></span>  
                    </div>
                </section>

                <Services_Cards/>

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

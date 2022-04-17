import {Fragment} from "react"
import styles from "../../styles/Prices.module.css"
import Layout from "../../components/Layout"

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

                <section className={styles.services_section}>
                    
                </section>
            </Layout>

        </Fragment>
    )
}

import Layout from "../../components/Layout"
import HeadMeta from "../../components/HeadMeta"
import {Fragment} from "react"
import styles from "../../styles/About.module.css"

export default function index() {
    return (
        <Fragment>

            <Layout>
                <section className={styles.entry_container}>
                    <div className={styles.entry_content}>
                        <h1 className={styles.entry_title}>
                            Nosotros
                        </h1>

                        <p className={styles.entry_description}>
                            ¡Hola! muchas gracias por interesarte en nuestra agencia de diseño web y marketing digital!
                        </p>
                    </div>
                </section>
            </Layout>
        </Fragment>
    )
}



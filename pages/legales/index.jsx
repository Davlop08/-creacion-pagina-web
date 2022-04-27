import Layout from "../../components/Layout"
import {Fragment} from "react"
import HeadMeta from "../../components/HeadMeta"
import styles from "../../styles/Legals.module.css"

export default function index() {
    return (
        <Fragment>
            <HeadMeta title="Legales Y Términos | Diseño Web AR" 
            metaDescription="Conocé los términos y condiciones para la contratación de nuestros servicios de diseño web y mareting digital"></HeadMeta>

            <Layout>
                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <h1 className={styles.entry_title}>Términos, condiciones y avisos legales</h1>
                        <p className={styles.entry_description}>
                            Conocé nuestros términos y condiciones, a fin de evitar malentendidos y tengas el mejor
                            servicio posible por nuestra parte
                        </p>
                    </div>
                </section>

                <section className={styles.terms_container}>
                    <div className={styles.terms_content}>
                        <div className={styles.terms_title}>
                            <h3>Sobre el contenido de los sitios web</h3> 
                        </div>

                        <ul className={styles.terms_list}>
                            <div className={styles.terms_list_item_container}>
                                <li className={styles.terms_list_item}>
                                    El cliente tiene total responsabilidad sobre el contenido del sitio web, ya sea sobre
                                    productos que venda, servicios ofrecidos, la legalidad de los mismos y posesión de derechos de 
                                    autor sobre el contenido audiovisual utilizado.
                                </li>

                                <li className={styles.terms_list_item}>
                                    <strong className={styles.marker}>Diseño Web AR</strong> no se responsabiliza por contenido que pueda ser susceptible y/o dañino para distintas
                                    comunidades u organizaciones, solamente ofrecemos el servicio de diseño.
                                </li>

                                <li className={styles.terms_list_item}>
                                    Sin embargo, todos nuestros sitios deben aprobar un control de contenido previo al 
                                    desarrollo, el cuál determinará si el contenido es apto o no para ser realizado, el cuál
                                    consiste en revisión de textos, imágenes y demás elementos, con tal de prevenir desinformación, incitación al odio,
                                    pornografía y demás factores que consideremos que puedan dañar nuestra reputación, y dañar u ofender a las personas.
                                </li>

                            </div>
                        </ul>

                    </div>
                </section>
            </Layout>

        </Fragment>
    )
}

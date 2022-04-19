import {Fragment} from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "../../components/Layout"
import HeadMeta from "../../components/HeadMeta"
import styles from "../../styles/Individual_Pages.module.css"
import Pages_Includes from "../../components/Pages_Includes"


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

                <Pages_Includes price="AR$9.900" pages="1" imgs="10"/>
            </Layout>
        </Fragment>
    )
}

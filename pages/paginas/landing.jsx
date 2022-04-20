import {Fragment} from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "../../components/Layout"
import HeadMeta from "../../components/HeadMeta"
import styles from "../../styles/Individual_Pages.module.css"
import Pages_Includes from "../../components/Pages_Includes"
import ContactForm from "../../components/ContactForm"
import globals from "../../globals"



export default function landing() {
    return (
        <Fragment>

            <HeadMeta 
            title="Landing Page | Lorem Soluciones Web" 
            metaDescription="Conocé el precio de una landing page profesional, la opción ideal si querés convertir visitantes en
            clientes con una sola página web. Diseño web profesional"
            />

            <Layout>

                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <h1 className={styles.entry_content_title}>Landing Page</h1>
                        <p className={styles.entry_content_description}>
                            Landing Page o página de aterrizaje, es aquella en donde mostrás la información más 
                            relevante de tu producto o servicio, y consiste en una sola página en donde mostrás 
                            información básica y concreta de lo que haces, algunas imágenes, información de contacto 
                            y/o un formulario, con el propósito de captar la atención de potenciales clientes. 
                            La principal función de la Landing Page es simple, convertir visitantes en clientes, 
                            y esto se logra guiando a dicho visitante sutilmente para haga lo que queremos, 
                            que en este caso es que se contacte con vos, o que te conozca y adquiera lo que ofreces por medio
                            de un estratégico diseño que te ofrecemos. No dudes más y empezá a potenciar tu negocio!
                        </p>
                    </div>
                </section>

                <Pages_Includes 
                price={'AR' + globals.pagesPrices.landing}
                pages="1" 
                imgs="10" 
                cart="No aplica" 
                stock="No aplica" 
                mail="No aplica" 
                mp="No aplica" 
                clients="No aplica"/>

                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <p className={styles.entry_content_description}>Para contratar este servicio escribinos por 
                            <Link  
                            href="https://api.whatsapp.com/send?phone=5491162039196&text=Hola%2C%20estoy%20interesado%20en%20la%20p%C3%A1gina%20Landing">
                                <a className={styles.contact_wa_link}> WhatsApp </a>
                            </Link>
                            o dejanos tus datos y nos comunicaremos con vos.
                        </p>
                    </div>
                </section>

                <ContactForm/>
            </Layout>
        </Fragment>
    )
}

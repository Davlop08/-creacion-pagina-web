import {Fragment} from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "../../components/Layout"
import HeadMeta from "../../components/HeadMeta"
import styles from "../../styles/Individual_Pages.module.css"
import Pages_Includes from "../../components/Pages_Includes"
import ContactForm from "../../components/ContactForm"


export default function personalizado() {
    return (
        <Fragment>

            <HeadMeta title="Diseño Web Personalizado | Lorem Soluciones Web" metaDescription="El sitio web personalizado te permite tener
            un sitio completamente único y personalizado a tu medida"/>

            <Layout>
                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <h1 className={styles.entry_content_title}>Sitio Web Personalizado</h1>
                        <p className={styles.entry_content_description}>
                            Con el sitio web personalizado vas a tener total libertad de elegir la estructura de tu sitio web,
                            lo que te permite tener un sitio único sin basarte en plantillas, con las características que necesites. 
                            Esto es ideal si tenés una idea en mente, y con nuestro asesoramiento concluirá en un gran proyecto que cumpla
                            al 100% con tus expectativas!
                        </p>
                    </div>
                </section>

                <Pages_Includes 
                price="A convenir" 
                pages="A convenir" 
                imgs="A convenir" 
                cart="A convenir" 
                stock="A convenir" 
                mail="A convenir" 
                mp="A convenir" 
                clients="A convenir"/>

                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <p className={styles.entry_content_description}>Para contratar este servicio escribinos por 
                            <Link  
                            href="https://api.whatsapp.com/send?phone=5491162039196&text=Hola%2C%20estoy%20interesado%20en%20un%20sitio%20web%20personalizado">
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

import {Fragment} from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "../../components/Layout"
import HeadMeta from "../../components/HeadMeta"
import styles from "../../styles/Individual_Pages.module.css"
import Pages_Includes from "../../components/Pages_Includes"
import ContactForm from "../../components/ContactForm"
import globals from "../../globals"


export default function basicoPlus() {
    return (
        <Fragment>

            <HeadMeta title="Sitio Web Básico + | Lorem Soluciones Web" metaDescription="agregar descripcion"/>

            <Layout>
                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <h1 className={styles.entry_content_title}>Sitio Web Básico +</h1>
                        <p className={styles.entry_content_description}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint maxime 
                            delectus esse sequi necessitatibus ad error possimus dicta rem!
                        </p>
                    </div>
                </section>

                <Pages_Includes 
                price={'AR' + globals.pagesPrices.basicaPlus} 
                pages="6" 
                imgs="30" 
                cart="No aplica" 
                stock="No aplica" 
                mail="cuenta de email basada en tu dominio" 
                mp="No aplica" 
                clients="No aplica"/>

                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <p className={styles.entry_content_description}>Para contratar este servicio escribinos por 
                            <Link  
                            href="https://api.whatsapp.com/send?phone=5491162039196&text=Hola%2C%20estoy%20interesado%20en%20el%20sitio%20web%20b%C3%A1sico%20%2B">
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

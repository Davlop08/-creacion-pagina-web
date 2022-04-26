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

            <HeadMeta title="Diseño Sitio Web Básico + | Diseño Web AR" metaDescription="Descubrí el precio del diseño web básico de hasta 6 páginas"/>

            <Layout>
                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <h1 className={styles.entry_content_title}>Sitio Web Básico +</h1>
                        <p className={styles.entry_content_description}>
                            El sitio web básico + consiste en una página principal y 5 secundarias, en las cuáles
                            podés agregar más detalles de tu negocio, por ejemplo una página de contacto, mostrar más
                            productos o servicios, una galería o lo que vos quieras mostrar! Esta opción es ideal como
                            sitio institucional. Te ofrecemos diseños atractivos,
                            y sobre todo que guían a tus usuarios para que adquieran tus productos.
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

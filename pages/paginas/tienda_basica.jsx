import {Fragment} from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "../../components/Layout"
import HeadMeta from "../../components/HeadMeta"
import styles from "../../styles/Individual_Pages.module.css"
import Pages_Includes from "../../components/Pages_Includes"
import ContactForm from "../../components/ContactForm"
import globals from "../../globals"


export default function tiendaBasica() {
    return (
        <Fragment>

            <HeadMeta title="Diseño Tienda Online Básica | Lorem Soluciones Web" metaDescription="Con la tienda online
            básica vas a poder empezar a vender tus productos de una manera rápida y sencilla"/>

            <Layout>
                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <h1 className={styles.entry_content_title}>Tienda Online Básica</h1>
                        <p className={styles.entry_content_description}>
                            La tienda básica es ideal si vendés pocos productos y por ello no es necesario 
                            un carrito o control de stock. Esta tienda no es recomendada si tenés varios productos 
                            que agregás o eliminás constantemente
                        </p>
                    </div>
                </section>

                <Pages_Includes 
                price={'AR' + globals.pagesPrices.tiendaBasica} 
                pages="3" 
                imgs="10" 
                cart="No aplica" 
                stock="No aplica" 
                mail="cuenta de email basada en tu dominio" 
                mp="Cobras tus productos con MercadoPago" 
                clients="No aplica"/>

                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <p className={styles.entry_content_description}>Para contratar este servicio escribinos por 
                            <Link  
                            href="https://api.whatsapp.com/send?phone=5491162039196&text=Hola%2C%20estoy%20interesado%20en%20la%20tienda%20basica">
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

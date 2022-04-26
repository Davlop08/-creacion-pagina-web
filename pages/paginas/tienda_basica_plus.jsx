import {Fragment} from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "../../components/Layout"
import HeadMeta from "../../components/HeadMeta"
import styles from "../../styles/Individual_Pages.module.css"
import Pages_Includes from "../../components/Pages_Includes"
import ContactForm from "../../components/ContactForm"
import globals from "../../globals"


export default function tiendaBasicaPlus() {
    return (
        <Fragment>

            <HeadMeta title="Diseño Tienda Online Básica + | Diseño Web AR" metaDescription="Descubrí el precio de la tienda online basica +, la cuál te permite tener un carrito de compras y una variedad más amplia de productos"/>

            <Layout>
                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <h1 className={styles.entry_content_title}>Tienda Online Básica +</h1>
                        <p className={styles.entry_content_description}>
                            La tienda básica + te permite llevar un poco más adelante tus ventas, ya que disponés de
                            un carrito de compras para que tus clientes puedan agregar varios productos, pero sigue 
                            estando limitado a productos que no cambian en el tiempo, ya que no se dispone
                            de un control de stock.
                        </p>
                    </div>
                </section>

                <Pages_Includes 
                price={'AR' + globals.pagesPrices.tiendaBasicaPlus} 
                pages="4" 
                imgs="20" 
                cart="Tus clientes podrán agregar sus productos al carrito" 
                stock="No aplica" 
                mail="Cuenta de email basada en tu dominio" 
                mp="Cobrás tus productos con MercadoPago" 
                clients="No aplica"/>

                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <p className={styles.entry_content_description}>Para contratar este servicio escribinos por 
                            <Link  
                            href="https://api.whatsapp.com/send?phone=5491162039196&text=Hola%2C%20estoy%20interesado%20en%20la%20tienda%20basica%20%2B">
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

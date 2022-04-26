import Layout from "../../components/Layout"
import HeadMeta from "../../components/HeadMeta"
import {Fragment} from "react"
import styles from "../../styles/About.module.css"
import Image from "next/image"

export default function index() {
    return (
        <Fragment>

            <HeadMeta title="Nosotros | Diseño web AR" 
            metaDescription="conozca nuestra agencia de diseño web y marketing digital y nuestra principal misión: Impulsar tu negocio">

            </HeadMeta>

            <Layout>
                <section className={styles.entry_container}>
                    <div className={styles.entry_content}>
                        <h1 className={styles.entry_title}>
                            Nosotros
                        </h1>

                        <p className={styles.entry_description}>
                            ¡Hola! muchas gracias por interesarte en nuestra agencia de diseño web y marketing digital!
                            mi nombre es David, soy el fundador de Diseño Web AR, en la cual, junto con mi equipo, tenemos 
                            el propósito de hacer crecer aún más el negocio de nuestros clientes, ofreciendo estrategias
                            de marketing de acuerdo a sus necesidades y presupuesto, que entendemos que puede llegar a ser costoso,
                            es por eso que tratamos de reducir lo más posible nuestros precios, no solo para atraer más clientes,
                            sino porque entendemos las circunstancias actuales y lo difícil que es empezar un emprendimiento.
                        </p>
                        <p className={styles.entry_description}>
                            Es por eso que te ofrecemos sitios web atractivos, lo mejor optimizados posibles para un mejor posicionamiento 
                            orgánico en la web, adaptables a todos los dispositivos y con las últimas tecnologías del mercado, porque sabemos
                            que cada centavo que invertis en tu negocio vale muchísimo, y merecés un buen sitio sin importar lo básico que sea.
                        </p>
                        <p className={styles.entry_description}>
                            Recibirás asesoramiento gratuito, contrates o no nuestros servicios, y se te guiará para que tu idea se potencie
                            aún más y obtengas algo más que el resultado esperado, así que no dudes en contratar nuestros servicios y empezá
                            a crecer aún más!
                        </p>

                        <Image src="/main_logo.svg" 
                        alt="agencia de diseño web y marketing digital en argentina" 
                        width={300}
                        height={250}></Image>
                    </div>
                </section>
            </Layout>
        </Fragment>
    )
}



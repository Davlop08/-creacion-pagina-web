import {Fragment} from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "../../components/Layout"
import HeadMeta from "../../components/HeadMeta"
import styles from "../../styles/Individual_Pages.module.css"


export default function tiendaBasica() {
    return (
        <Fragment>

            <HeadMeta title="nombre | Lorem Soluciones Web" metaDescription="agregar descripcion"/>

            <Layout>
                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <h1 className={styles.entry_content_title}>Tienda Online Básica</h1>
                        <p className={styles.entry_content_description}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint maxime 
                            delectus esse sequi necessitatibus ad error possimus dicta rem!
                        </p>
                    </div>
                </section>
            </Layout>
        </Fragment>
    )
}

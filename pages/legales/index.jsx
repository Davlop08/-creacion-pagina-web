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
                            <h3>Sobre Los sitios web, contenido y derechos de titularidad</h3> 
                        </div>
                        <ul className={styles.terms_list}>
                            <div className={styles.terms_list_item_container}>
                                <li className={styles.terms_list_item}>
                                    El cliente es el dueño del 100% de su sitio web.
                                </li>
                                <li className={styles.terms_list_item}>
                                    así mismo, el cliente tiene total responsabilidad sobre el contenido del mismo, ya sea sobre
                                    productos que venda, servicios ofrecidos y derechos de autor sobre el contenido utilizado.
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
                                <li className={styles.terms_list_item}>
                                    El cliente será el titular del dominio y hosting (hospedaje) del sitio.
                                </li>
                                <li className={styles.terms_list_item}>
                                    En caso de que el cliente decida dejar de utilizar nuestros servicios y decida trasladarse
                                    a otra agencia o administrar el hospedaje por su cuenta, se cederán los archivos y el código
                                    que hace funcionar su sitio web, de los cuáles mantendremos una copia por 30 días en caso de que
                                    el cliente pierda dichos archivos. Pasado ese tiempo, se eliminarán definitivamente y se dará la baja
                                    de cliente.
                                </li>
                                <li className={styles.terms_list_item}>
                                    De acuerdo al punto <strong className={styles.marker}>06</strong> se debe tener en cuenta que las tecnologías utilizadas en los sitios web pueden ser distintas 
                                    de acuerdo al tipo de sitio web o la complejidad del mismo, lo cuál puede provocar que se necesiten 
                                    distintos tipos de hosting (hospedaje), lo cuál será informado al cliente al entregarse los archivos.
                                </li>
                                <li className={styles.terms_list_item}>
                                    En caso de que se presenten errores debidos al código fuente o de los servidores, el cliente tiene el derecho
                                    de informarlo y de exigir una pronta solución, para que pueda seguir ofreciendo sus servicios con normalidad.
                                </li>
                                
                            </div>
                        </ul>

                        <div className={styles.terms_title}>
                            <h3>Sobre la confidencialidad y manejo de datos personales</h3> 
                        </div>

                        <ul className={styles.terms_list}>
                            <div className={styles.terms_list_item_container}>
                                <li className={styles.terms_list_item}>
                                    El cliente deberá proporcionar información personal para la contratación de nuestros servicios,
                                    los cuales utilizamos para dar el alta de la titularidad de hosting y dominio, y el alta de cliente, para lo cual 
                                    se exige dicha información sin excepción.
                                </li>
                                <li className={styles.terms_list_item}>
                                    Dicha información personal no será utilizada para ningún otro fin que el indicado en el punto <strong className={styles.marker}>01</strong>,
                                    a excepción del correo electrónico y número telefónico, los cuales se utilizarán para activar distintos servicios
                                    que la exigen, como Google Analytics, y para contactar al cliente en caso de requerirlo.
                                </li>
                                <li className={styles.terms_list_item}>
                                    En el remoto caso de investigación policial relacionada a algún sitio web desarrollado por nosotros, y solo en ese caso,
                                    se brindará la información necesaria a las autoridades, incluyendo la información personal y de contacto del titular del sitio web
                                </li>
                            </div>
                        </ul>

                    </div>
                </section>
            </Layout>

        </Fragment>
    )
}

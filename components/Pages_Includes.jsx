import Image from "next/image"
import styles from "../styles/Includes.module.css"

export default function Pages_Includes({price, pages, imgs, cart, stock, mail, mp, clients}) {
    return (
        <section className={styles.site_info_container}>
            
            <div className={styles.site_info_description_container}>
                <div className={styles.site_info_description_content_container}>
                    <h4 className={styles.site_info_description_title}>
                        Tu sitio contiene las siguientes características, los cuadros marcados como 
                        &ldquo;No aplica&ldquo; no están incluidos:
                    </h4>
                </div>
            </div>

            <div className={styles.site_info_content_container}>
                <div className={`${styles.card_item} ${styles.card_item_1}`}>
                    <h5>Precio</h5>
                    <p>{price}</p>
                </div>
                <div className={`${styles.card_item} ${styles.card_item_2}`}>
                    <h5>Páginas</h5>
                    <p>{pages}</p>
                </div>
                <div className={`${styles.card_item} ${styles.card_item_3}`}>
                    <h5>Imágenes</h5>
                    <p>{imgs}</p>
                </div>
                <div className={`${styles.card_item} ${styles.card_item_4}`}>
                    <h5>Botón de WhatsApp</h5>
                    <p>Si</p>
                </div>
                <div className={`${styles.card_item} ${styles.card_item_13}`}>
                    <h5>Formulario</h5>
                    <p>Para que te contacten directo desde la web</p>
                </div>
                <div className={`${styles.card_item} ${styles.card_item_6}`}>
                    <h5>Redes sociales</h5>
                    <p>Enlaces a tus redes sociales</p>
                </div>
                <div className={`${styles.card_item} ${styles.card_item_17}`}>
                    <h5>Mapa en la web</h5>
                    <p>Tus clientes verán tu ubicación directo en tu web</p>
                </div>
                <div className={`${styles.card_item} ${styles.card_item_14}`}>
                    <h5>Correo profesional</h5>
                    <p>{mail}</p>
                </div>
                <div className={`${styles.card_item} ${styles.card_item_5}`}>
                    <h5>Hosting</h5>
                    <p>Alojamiento gratuito por 1 año</p>
                </div>
                <div className={`${styles.card_item} ${styles.card_item_7}`}>
                    <h5>Dominio</h5>
                    <p>Dominio.com gratuito por 1 año</p>
                </div>
                <div className={`${styles.card_item} ${styles.card_item_10}`}>
                    <h5>SSL</h5>
                    <p>Tu sitio será seguro</p>
                </div>
                <div className={`${styles.card_item} ${styles.card_item_8}`}>
                    <h5>Perfil de negocio</h5>
                    <p>Tu negocio aparecerá en los resultados por zonas en Google y Maps</p>
                </div>
                <div className={`${styles.card_item} ${styles.card_item_9}`}>
                    <h5>Google Analytics</h5>
                    <p>Podrás ver las estadísticas de tu sitio</p>
                </div>
                <div className={`${styles.card_item} ${styles.card_item_11}`}>
                    <h5>Carrito de compras</h5>
                    <p>{cart}</p>
                </div>
                <div className={`${styles.card_item} ${styles.card_item_12}`}>
                    <h5>Control de stock</h5>
                    <p>{stock}</p>
                </div>
                <div className={`${styles.card_item} ${styles.card_item_15}`}>
                    <h5>MercadoPago</h5>
                    <p>{mp}</p>
                </div>
                <div className={`${styles.card_item} ${styles.card_item_16}`}>
                    <h5>Alta de clientes</h5>
                    <p>{clients}</p>
                </div>
            </div>
        </section>
    )
}

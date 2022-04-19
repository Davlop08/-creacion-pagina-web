import Image from "next/image"
import styles from "../styles/Includes.module.css"

export default function Pages_Includes({price, pages, imgs}) {
    return (
        <section className={styles.site_info_container}>
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
                <h5>Imágenes máximas</h5>
                <p>{imgs}</p>
            </div>
            <div className={`${styles.card_item} ${styles.card_item_4}`}>
                <h5>Botón de WhatsApp</h5>
                <div className={styles.card_wa_container}>
                    <Image src="/wa_icon.png" alt="whatsapp" width={40} height={40}/>
                </div>
            </div>
        </div>
    </section>
    )
}

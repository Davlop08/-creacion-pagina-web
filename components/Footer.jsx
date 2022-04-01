
export default function Footer({footerContent}) {
    return (
        <footer>
            {footerContent}
        </footer>
    )
}

Footer.defaultProps = {
    footerContent: "agregar contenido al footer"
}

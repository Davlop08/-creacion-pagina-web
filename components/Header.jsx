
export default function Header({headerContent}) {
    return (
        <header>
            <nav>
                {headerContent}
            </nav>
        </header>
    )
}

Header.defaultProps = {
    headerContent: "agregar contenido al header"
}
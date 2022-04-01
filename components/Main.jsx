
export default function Main({children}) {
    return (
        <main>
            {children}
        </main>
    )
}

Main.defaultProps = {
    children: "agregar contenido al Main"
}
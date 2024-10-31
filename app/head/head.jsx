import styles from "./head.module.css"

export default function Head() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <h1>Anime+</h1>
                </div>

                <nav className={styles.nav}>

                    <ul className={styles.navList}>
                        <li className={styles.navItem} href="home">Inicio</li>
                        <li className={styles.navItem} href="sobre">Sobre</li>
                        <li className={styles.navItem} href="contatos">Contatos</li>
                        <li className={styles.navItem} href="registro">Registro</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
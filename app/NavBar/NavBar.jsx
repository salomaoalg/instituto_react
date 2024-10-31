import styles from "./NavBar.module.css"
import Link from "next/link"
import BodySobre from "../bodySobre/page"

export default function NavBar() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <h1>Anime+</h1>
                </div>

                <nav className={styles.nav}>

                    <ul className={styles.navList}>
                        <li className={styles.navItem}><Link href="/">Home</Link></li>
                        <li className={styles.navItem}><Link href="/bodySobre">Sobre</Link></li>
                        <li className={styles.navItem} href="contatos">Contatos</li>
                        <li className={styles.navItem} href="registro">Registro</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
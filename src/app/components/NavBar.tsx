import styles from './NavBar.module.css'

export default function NavBar() {

    return (
        <nav className={styles.nav}>
            <a href="/" className={styles.MH}>MH</a>
            <section className={styles.section}>
                    <a href="/">hjem</a>
                    <a href="/info">info</a>
            </section>
            <a href="https://github.com/mchtsz" target="_blank">
                <img src="/github.png" alt="github" />
            </a>
        </nav>
    )
}
import styles from "./links.module.css"
import NavLinks from "./navLinks/navLinks"

const LinksArray = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
    {
        title: 'Blog',
        path: '/blog'
    }
]

const session = true;
const isAdmin = true;

const Links = () => {
    return (
        <div className={styles.links}>
            {LinksArray.map((link=>(
                <NavLinks item={link} key={link.title}/>
            )))}

            {session ? (
                <>
                {isAdmin && <NavLinks item={{title: "Admin", path: "/admin"}} key={"Admin"} />}
                <button className={styles.logout}>Logout</button>
                </>
            ) : (
                <NavLinks item={{title: 'Login', path: '/login'}} key={"login"} />
            )}
        </div>
    )
}

export default Links
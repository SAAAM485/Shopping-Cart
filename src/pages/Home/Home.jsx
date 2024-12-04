import styles from "../pages.module.css";

const Home = () => {
    return (
        <div className={styles.page}>
            <h1>Welcome to Bagel&apos;s Store</h1>
            <img
                src="/bagel.jpeg"
                alt="The Store Owner, Bagel."
                style={{
                    objectFit: "cover",
                }}
            />
        </div>
    );
};

export default Home;

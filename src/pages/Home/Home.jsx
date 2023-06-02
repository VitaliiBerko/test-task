import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Welcome to home page!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sit
            consectetur quisquam tempora, nihil eaque voluptates explicabo,
            temporibus tempore quibusdam saepe obcaecati, facere laborum
            corporis ex earum exercitationem recusandae impedit? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Dicta, saepe.
            Perferendis, odio magni excepturi asperiores est modi mollitia
            tempore ad animi similique maiores ullam nemo quia facere
            reprehenderit quaerat obcaecati! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sunt porro explicabo velit itaque
            reprehenderit repellat quasi magni, veritatis provident aspernatur
            delectus! Eveniet quia minus, quibusdam reprehenderit vero quasi
            pariatur molestiae nihil. Ducimus nostrum natus aliquam facere
            sapiente eligendi odit distinctio, veritatis debitis quis error
            iusto magnam atque, nam ad repellat?
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

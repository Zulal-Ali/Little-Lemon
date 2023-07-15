import OrderContainer from "../components/OrderContainer";
import LemonContainer from "../components/LemonContainer";
import styles from "./HOME.module.css";
const HOME = () => {
  return (
    <div className={styles.home}>
      <div className={styles.cardsWrapper}>
        <div className={styles.cards}>
          <div className={styles.homecards}>
            <div className={styles.homecard}>
              <div className={styles.cardMealCard}>
                <div className={styles.greekSaladParent}>
                  <b className={styles.greekSalad}>Greek Salad</b>
                  <div
                    className={styles.theFamousGreek}
                  >{`The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. `}</div>
                  <div className={styles.div}>$12.99</div>
                </div>
                <img
                  className={styles.cardMealCardChild}
                  alt=""
                  src="/rectangle-1@2x.png"
                />
              </div>
              <div className={styles.homecardChild} />
              <div className={styles.homecardChild} />
            </div>
            <div className={styles.homecard}>
              <div className={styles.cardMealCard}>
                <div className={styles.greekSaladParent}>
                  <b className={styles.greekSalad}>Brushetta</b>
                  <div className={styles.theFamousGreek}>
                    Our Bruschetta is made from grilled bread that has been
                    smeared with garlic and seasoned with salt and olive oil.
                    Toppings of tomato, veggies, beans, cured pork, or cheese
                    are examples of variations. In Italy, a brustolina grill is
                    frequently used to create bruschetta.
                  </div>
                  <div className={styles.div}>$7.99</div>
                </div>
                <img
                  className={styles.cardMealCardChild}
                  alt=""
                  src="/rectangle-11@2x.png"
                />
              </div>
              <div className={styles.homecardChild} />
              <div className={styles.homecardChild} />
            </div>
            <div className={styles.homecard}>
              <div className={styles.cardMealCard}>
                <div className={styles.greekSaladParent}>
                  <b className={styles.greekSalad}>Grilled Fish</b>
                  <div className={styles.theFamousGreek}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam sed cursus.
                  </div>
                  <div className={styles.div}>$20.00</div>
                </div>
                <img
                  className={styles.cardMealCardChild}
                  alt=""
                  src="/rectangle-12@2x.png"
                />
              </div>
              <div className={styles.homecardChild} />
              <div className={styles.homecardChild} />
            </div>
            <div className={styles.homecard}>
              <div className={styles.cardMealCard}>
                <div className={styles.greekSaladParent}>
                  <b className={styles.greekSalad}>Pasta</b>
                  <div className={styles.theFamousGreek}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquet nec in ornare.
                  </div>
                  <div className={styles.div}>$18.99</div>
                </div>
                <img
                  className={styles.cardMealCardChild}
                  alt=""
                  src="/rectangle-13@2x.png"
                />
              </div>
              <div className={styles.homecardChild} />
              <div className={styles.homecardChild} />
            </div>
            <div className={styles.homecard}>
              <div className={styles.cardMealCard}>
                <div className={styles.greekSaladParent}>
                  <b className={styles.greekSalad}>Lemon Dessert</b>
                  <div className={styles.theFamousGreek}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla odio enim vitae.
                  </div>
                  <div className={styles.div}>$6.99</div>
                </div>
                <img
                  className={styles.cardMealCardChild}
                  alt=""
                  src="/rectangle-1@2x.png"
                />
              </div>
              <div className={styles.homecardChild} />
              <div className={styles.homecardChild} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeChild} />
      <OrderContainer />
      <LemonContainer />
      <LemonContainer />
      <LemonContainer />
      <img className={styles.navbarIcon} alt="" src="/navbar.svg" />
    </div>
  );
};

export default HOME;

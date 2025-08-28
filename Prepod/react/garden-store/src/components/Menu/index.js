import styles from './index.module.css';
import logo from '../../images/logo.svg';
import cart from '../../images/cart.svg';
import burgerMenuIcon from '../../images/burger-menu-icon.svg';


export const Menu = () => {
  return (
    <nav className={styles.navigationWrapper}>
      <div className={styles.logo}>
        <img src={logo} alt='main logo'/>
      </div>

      <ul className={styles.navItemsWrapper}>
        <li>Main page</li>
        <li>Categories</li>
        <li>All products</li>
        <li>All sales</li>
      </ul>

      <div className={styles.cart}>
        <img src={cart} alt='cart icon'/>
      </div>
      <div className={styles.burgerMenu}>
        <img src={burgerMenuIcon} alt='burger menu'/>
      </div>
    </nav>
  );
};

import styles from './header.module.scss'
import { BellIcon, BellpointIcon, GearIcon, ProfileImage } from 'assets/svg'

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <ul>
        <li>
          <button type='button' className={styles.bellIcon}>
            <BellIcon />
            <BellpointIcon />
          </button>
        </li>
        <li>
          <button type='button'>
            <GearIcon />
          </button>
        </li>
        <li>
          <button type='button' className={styles.profile}>
            <ProfileImage />
            <span>사용자명</span>
          </button>
        </li>
      </ul>
    </header>
  )
}

export default Header

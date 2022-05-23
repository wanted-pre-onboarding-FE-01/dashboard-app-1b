import cx from 'classnames'
import { Link, NavLink } from 'react-router-dom'
import styles from './lnb.module.scss'
import { ArrowIcon, LogoImage, ManageADImage, DashboardImage, BulbIcon } from 'assets/svg'

const LNB = () => {
  return (
    <div className={styles.gnbWrapper}>
      <div className={styles.logoWrapper}>
        <LogoImage />
      </div>

      <form className={styles.lnbService}>
        <h3>서비스</h3>
        <div>
          <ArrowIcon className={styles.arrowIcon} />
          <input type='text' value='어쩌고저쩌고울라불라불루짱' readOnly />
        </div>
      </form>
      <nav className={styles.lnbNav}>
        <h3>광고센터</h3>
        <ul>
          <li>
            <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              <DashboardImage className={styles.gnbIcon} />
              대시보드
            </NavLink>
          </li>
          <li>
            <NavLink to='manageAD' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              <ManageADImage />
              광고관리
            </NavLink>
          </li>
        </ul>
      </nav>

      <button type='button' className={styles.guide}>
        <BulbIcon />
        <div className={styles.guideWrapper}>
          <p>레버 이용 가이드</p>
          <p>시작하기 전에 알아보기</p>
        </div>
      </button>
      <p className={styles.policy}>레버는 함께 만들어갑니다.</p>
      <Link to='#' className={styles.termsOfService}>
        이용약관
      </Link>
    </div>
  )
}

export default LNB

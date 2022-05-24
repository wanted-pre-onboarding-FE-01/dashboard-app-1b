import styles from './lnb.module.scss'
import cx from 'classnames'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Link, NavLink } from 'react-router-dom'

import { service } from 'state/dashBoard'
import { serviceDropdown } from 'state/dropdown'

import Dropdown from 'components/Dropdown'
import { LogoImage, ManageADImage, DashboardImage, BulbIcon } from 'assets/svg'

const LNB = () => {
  const [selectedService, setSelectedService] = useRecoilState(service)
  const serviceList = useRecoilValue(serviceDropdown)

  return (
    <aside className={styles.gnbWrapper}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <LogoImage />
        </div>

        <div className={styles.box}>
          <h3>서비스</h3>
          <Dropdown list={serviceList} action={setSelectedService} selected={selectedService} big />
        </div>

        <div className={styles.box}>
          <h3>광고센터</h3>
          <ul>
            <li>
              <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                <DashboardImage />
                대시보드
              </NavLink>
            </li>
            <li>
              <NavLink to='managing' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                <ManageADImage />
                광고관리
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <button className={styles.guide} type='button'>
          <BulbIcon />
          <div className={styles.message}>
            <p>레버 이용 가이드</p>
            <p>시작하기 전에 알아보기</p>
          </div>
        </button>

        <div className={styles.policy}>
          <p>레버는 함께 만들어갑니다.</p>
          <Link to='/'>이용약관</Link>
        </div>
      </div>
    </aside>
  )
}

export default LNB

import { ArrowIcon } from 'assets/svg'
import { useRef, useState } from 'react'
import cx from 'classnames'
import styles from './dropdown.module.scss'
import { useClickAway } from 'react-use'
import { adStatus } from 'state/dashBoard'
import { useSetRecoilState } from 'recoil'

const LIST: IItem[] = [
  { display: '전체 광고', value: 'all' },
  { display: '진행중', value: 'active' },
  { display: '중단됨', value: 'ended' },
]

interface IItem {
  display: string
  value: string
}

const Dropdown = () => {
  const [openState, setOpenState] = useState(false)
  const [display, setDisplay] = useState('전체 광고')
  const setAdState = useSetRecoilState(adStatus)

  const dropdownRef = useRef(null)

  const changeOpenStateHandler = () => {
    setOpenState((prev) => !prev)
  }

  const changeDisplayHandler = (item: IItem) => {
    setDisplay(item.display)
    setAdState(item.value)
    setOpenState(false)
  }

  useClickAway(dropdownRef, () => setOpenState(false))

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        type='button'
        className={cx({ [styles.displayActive]: openState }, styles.display)}
        onClick={changeOpenStateHandler}
      >
        {display}
        <ArrowIcon />
      </button>

      <ul className={cx({ [styles.isActive]: openState }, styles.list)}>
        {LIST.map((item) => (
          <li key={item.value}>
            <button type='button' onClick={() => changeDisplayHandler(item)}>
              {item.display}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown

import styles from './admanaging.module.scss'
import { useMemo } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { adStatus } from 'state/dashBoard'
import { adManagingDropdown } from 'state/dropdown'

import { statusKrToEn } from 'utils/formatConversion'

import Dropdown from 'components/Dropdown'
import Card from './Card'
import data from '../../data/wanted_FE_ad-list-data-set.json'

const ADmanaging = () => {
  const [adState, setAdState] = useRecoilState(adStatus)
  const adList = useRecoilValue(adManagingDropdown)

  const filterData = useMemo(() => {
    const state = statusKrToEn(adState)
    if (state === 'all') {
      return data.ads
    }
    return data.ads.filter((item) => item.status === state)
  }, [adState])

  return (
    <div className={styles.managing}>
      <h1 className={styles.h1}>광고관리</h1>

      <div className={styles.cardContainer}>
        <div className={styles.categoryBox}>
          <Dropdown list={adList} action={setAdState} selected={adState} />
          <button className={styles.createBtn} type='button'>
            광고 만들기
          </button>
        </div>

        <ul className={styles.adList}>
          {filterData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ADmanaging

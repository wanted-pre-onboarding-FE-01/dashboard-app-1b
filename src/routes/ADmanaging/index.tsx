import styles from './admanaging.module.scss'
import data from '../../data/wanted_FE_ad-list-data-set.json'
import Card from './Card'
import Dropdown from 'routes/ADmanaging/Dropdown'
import { useRecoilValue } from 'recoil'
import { adStatus } from 'state/dashBoard'
import { useMemo } from 'react'

const ADmanaging = () => {
  const adState = useRecoilValue(adStatus)

  const filterData = useMemo(() => {
    if (adState === 'all') {
      return data.ads
    }
    return data.ads.filter((item) => item.status === adState)
  }, [adState])

  return (
    <div className={styles.managing}>
      <h1 className={styles.h1}>광고관리</h1>

      <div className={styles.cardContainer}>
        <div className={styles.categoryBox}>
          <Dropdown />
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

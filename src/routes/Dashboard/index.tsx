import DailyMean from './DailyMean'
import DailyChart from './DailyChart'
import DatePicker from './DatePicker'

import styles from './dashboard.module.scss'

const Dashboard = () => {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.h1}>대시보드</h1>
        <div className={styles.datePickerWrapper}>
          <DatePicker />
        </div>
      </div>
      <div className={styles.boardWrapper}>
        <h2 className={styles.h2}>통합 광고 현황</h2>
        <div className={styles.chartWrapper}>
          <DailyMean />
          <DailyChart />
        </div>
      </div>
      <div className={styles.boardWrapper}>
        <h2 className={styles.h2}>매체 현황</h2>
        <div className={styles.chartWrapper} />
      </div>
    </>
  )
}

export default Dashboard

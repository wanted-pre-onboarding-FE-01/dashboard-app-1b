import DailyMean from './DailyMean'
import DailyChart from './DailyChart'
import DatePicker from './DatePicker'
import MediaChannelGraph from './MediaChannelGraph'
import MediaChannelTable from './MediaChannelTable'

import styles from './dashboard.module.scss'
import DataFilterButtons from './DataFilterButtons'

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
          <DataFilterButtons />
          <DailyChart />
        </div>
      </div>
      <div className={styles.boardWrapper}>
        <h2 className={styles.h2}>매체 현황</h2>
        <div className={styles.chartWrapper}>
          <MediaChannelGraph />
          {/* <MediaChannelTable /> */}
        </div>
      </div>
    </>
  )
}

export default Dashboard

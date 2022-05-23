import styles from './dashboard.module.scss'

const Dashboard = () => {
  return (
    <>
      <h1 className={styles.h1}>대시보드</h1>
      <div className={styles.boardWrapper}>
        <h2 className={styles.h2}>통합 광고 현황</h2>
        <div className={styles.chartWrapper} />
      </div>
      <div className={styles.boardWrapper}>
        <h2 className={styles.h2}>매체 현황</h2>
        <div className={styles.chartWrapper} />
      </div>
    </>
  )
}

export default Dashboard

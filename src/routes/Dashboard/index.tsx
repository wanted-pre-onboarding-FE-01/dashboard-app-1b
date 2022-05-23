import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import styles from './dashboard.module.scss'

import Error from './Error'
import View from './View'

const Dashboard = () => {
  return (
    <>
      <h1 className={styles.h1}>대시보드</h1>
      <div className={styles.boardWrapper}>
        <h2 className={styles.h2}>통합 광고 현황</h2>
        <div className={styles.chartWrapper}>
          <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary fallbackRender={Error}>
              <View />
            </ErrorBoundary>
          </Suspense>
        </div>
      </div>
      <div className={styles.boardWrapper}>
        <h2 className={styles.h2}>매체 현황</h2>
        <div className={styles.chartWrapper}>
          <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary fallbackRender={Error}>
              <View />
            </ErrorBoundary>
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default Dashboard

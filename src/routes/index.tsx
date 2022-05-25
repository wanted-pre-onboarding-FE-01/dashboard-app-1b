import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'

import LNB from 'routes/_shared/LNB/index'
import Header from 'routes/_shared/Header/index'
import Dashboard from './Dashboard'
import ADmanaging from './ADmanaging'
import LoadingPage from 'components/LoadingPage'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <LNB />

      <div className={styles.container}>
        <Header />
        <LoadingPage />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='managing' element={<ADmanaging />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App

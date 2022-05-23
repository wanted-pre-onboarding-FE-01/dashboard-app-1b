import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'

import LNB from 'routes/_shared/LNB/index'
import Header from 'routes/_shared/Header/index'
import Dashboard from './Dashboard'
import ADmanaging from './ADmanaging'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <LNB />
      <Header />
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='ADmanaging' element={<ADmanaging />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App

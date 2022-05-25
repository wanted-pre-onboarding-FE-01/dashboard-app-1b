import { useRecoilValue } from 'recoil'
import { categoryState, dateState } from 'state/dashBoard'

import DAILY_DATA from 'data/wanted_FE_trend-data-set.json'
import styles from './dailyChart.module.scss'
import dayjs from 'dayjs'
import { filterDailyByCategory, unitPicker } from 'utils'
import TwoDataChart from './TwoDataChart'
import OneDataChart from './OneDataChart'

const DailyChart = () => {
  const {
    report: { daily },
  } = DAILY_DATA

  const { startDate, endDate } = useRecoilValue(dateState)
  const filterDaily = daily.filter((day) => {
    const date = dayjs(day.date)
    return date.isBetween(startDate, endDate, 'date', '[]')
  })

  const { oneSelectCategory, twoSelectCategory, weekly } = useRecoilValue(categoryState)

  const data = [filterDailyByCategory({ daily: filterDaily, category: oneSelectCategory, weekly })]

  if (twoSelectCategory) {
    data.push(filterDailyByCategory({ daily: filterDaily, category: twoSelectCategory, weekly }))
  }

  const unit = [unitPicker(oneSelectCategory), unitPicker(twoSelectCategory)]

  return (
    <div className={styles.wrapper}>
      <TwoDataChart
        data={data}
        unit={unit}
        inView={Boolean(twoSelectCategory) && oneSelectCategory !== twoSelectCategory}
      />
      <OneDataChart
        data={data[0]}
        unit={unit[0]}
        inView={!twoSelectCategory || oneSelectCategory === twoSelectCategory}
      />
    </div>
  )
}

export default DailyChart

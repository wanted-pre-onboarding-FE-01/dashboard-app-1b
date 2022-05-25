import DATA from 'data/wanted_FE_trend-data-set.json'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { getDailyMean, numberToDot } from 'utils'
import DailyMeanItem from './DailyMeanItem'

import styles from './dailyMean.module.scss'
import { useRecoilValue } from 'recoil'
import { datePrevSelector, dateState } from 'state/dashBoard'

dayjs.extend(isBetween)

const DailyMean = () => {
  const {
    report: { daily },
  } = DATA

  const { startDate, endDate } = useRecoilValue(dateState)
  const { prevStartDate, prevEndDate } = useRecoilValue(datePrevSelector)

  const filterDaily = daily.filter((day) => {
    const date = dayjs(day.date)
    return date.isBetween(startDate, endDate, 'date', '[]')
  })

  const filterPrevDaily = daily.filter((day) => {
    const date = dayjs(day.date)
    return date.isBetween(prevStartDate, prevEndDate, 'date', '[]')
  })

  const { roas, cost, imp, click, conv, sales } = getDailyMean(filterDaily)
  const {
    roas: prevRoas,
    cost: prevCost,
    imp: prevImp,
    click: prevClick,
    conv: prevConv,
    sales: prevSales,
  } = getDailyMean(filterPrevDaily)

  return (
    <div className={styles.wrapper}>
      <DailyMeanItem
        term='ROAS'
        value={`${numberToDot({ num: roas, fixed: 2 })}`}
        prevDiff={roas - prevRoas}
        unit='%'
      />
      <DailyMeanItem term='광고비' value={`${numberToDot({ num: cost })}`} prevDiff={cost - prevCost} unit='원' />
      <DailyMeanItem term='노출 수' value={`${numberToDot({ num: imp })}`} prevDiff={imp - prevImp} unit='회' />
      <DailyMeanItem term='클릭수' value={`${numberToDot({ num: click })}`} prevDiff={click - prevClick} unit='회' />
      <DailyMeanItem term='전환 수' value={`${numberToDot({ num: conv })}`} prevDiff={conv - prevConv} unit='회' />
      <DailyMeanItem term='매출' value={`${numberToDot({ num: sales })}`} prevDiff={sales - prevSales} unit='원' />
    </div>
  )
}

export default DailyMean

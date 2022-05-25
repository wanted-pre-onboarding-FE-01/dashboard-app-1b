import { useRecoilValue } from 'recoil'
import { dateState } from 'state/dashBoard'

import { DateRangePicker, RangeKeyDict } from 'react-date-range'
import { ko } from 'date-fns/locale'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import DAILY_DATA from 'data/wanted_FE_trend-data-set.json'

interface IProps {
  containerRef: React.RefObject<HTMLDivElement>
  handleChange: (range: RangeKeyDict) => void
  inView: boolean
}

const DateRange = ({ containerRef, handleChange, inView }: IProps) => {
  const dateRange = useRecoilValue(dateState)

  const {
    report: { daily },
  } = DAILY_DATA

  if (!inView) return null

  return (
    <div ref={containerRef}>
      <DateRangePicker
        locale={ko}
        onChange={handleChange}
        editableDateInputs={false}
        showMonthAndYearPickers={false}
        minDate={new Date(daily[0].date)}
        maxDate={new Date(daily[daily.length - 1].date)}
        ranges={[
          {
            startDate: new Date(dateRange.startDate),
            endDate: new Date(dateRange.endDate),
            key: 'selection',
          },
        ]}
        rangeColors={['#586CF5']}
        months={2}
        direction='horizontal'
        showDateDisplay={false}
        staticRanges={[]}
        inputRanges={[]}
      />
    </div>
  )
}

export default DateRange

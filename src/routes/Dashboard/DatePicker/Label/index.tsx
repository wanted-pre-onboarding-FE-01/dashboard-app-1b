import styles from './label.module.scss'
import { dateToKorean } from 'utils/dateToKorean'
import { dateState } from 'state/dashBoard'
import { useRecoilValue } from 'recoil'
import { ArrowIcon } from 'assets/svg'

interface IProps {
  handleToggleOpen: () => void
  inView: boolean
}

const Label = ({ handleToggleOpen, inView }: IProps) => {
  const dateRange = useRecoilValue(dateState)

  if (!inView) return null

  return (
    <div className={styles.dateInputContainer}>
      <label htmlFor='dateInput'>
        {`${dateToKorean(dateRange.startDate)} ~ ${dateToKorean(dateRange.endDate)}`} <ArrowIcon />
      </label>
      <input id='dateInput' type='date' readOnly onClick={handleToggleOpen} />
    </div>
  )
}

export default Label

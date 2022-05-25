import { useState } from 'react'
import cx from 'classnames'

import styles from './dropdownButton.module.scss'
import DropdownList from './DropdownList'
import { ArrowIcon } from 'assets/svg'

interface IProps {
  buttonType: 'dataBtn1' | 'dataBtn2' | 'dateBtn'
  buttonName: string
}

const DropdownButton = ({ buttonType, buttonName }: IProps) => {
  const [showList, setShowList] = useState(false)

  const handleClickBtn = () => {
    setShowList((pre) => !pre)
  }
  const handleOnBlur = () => {
    setShowList(false)
  }

  return (
    <div className={styles.dropdownCont} onBlur={handleOnBlur}>
      <button
        type='button'
        className={cx(styles.dropdownButton, styles[buttonType], styles[buttonName], { [styles.clicked]: showList })}
        onClick={handleClickBtn}
      >
        {buttonName}
        <ArrowIcon className={styles.clicked} />
      </button>
      {showList && <DropdownList buttonType={buttonType} />}
    </div>
  )
}

export default DropdownButton

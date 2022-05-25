import BigNumber from 'bignumber.js'
import styles from './mediaChannelTable.module.scss'
import { rawData } from './calcTotalSum'

const MediaChannelTable = () => {
  const categoryKR = ['페이스북', '구글', '카카오', '네이버', '총계']
  return (
    <div className={styles.tableWrapper}>
      <table>
        <thead>
          <tr>
            {rawData.header.map((item) => {
              return <th key={`tr-${item}`}>{item}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {rawData.category.map((item, i) => {
            return (
              <tr key={`tr-${item}`}>
                <td className={styles.categoryKR}>{categoryKR[i]}</td>
                <td>{Math.floor(rawData.data[item].cost).toLocaleString()}</td>
                <td>
                  {Math.floor(
                    new BigNumber(rawData.data[item].cost).multipliedBy(rawData.data[item].roas).toNumber()
                  ).toLocaleString()}
                </td>
                <td>{Math.floor(rawData.data[item].roas).toLocaleString()}</td>
                <td>{Math.floor(rawData.data[item].imp).toLocaleString()}</td>
                <td>{Math.floor(rawData.data[item].click).toLocaleString()}</td>
                <td>{Math.floor(rawData.data[item].ctr).toLocaleString()}</td>
                <td>{Math.floor(rawData.data[item].cpc).toLocaleString()}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default MediaChannelTable

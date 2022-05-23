import { useQuery } from 'react-query'

import { getCoronaRawDataApi } from 'services/corona'
import styles from './dashboard.module.scss'
import { isAxiosError } from 'utils/axios'

import Chart from './Chart'
import Corona from './Corona'

const View = () => {
  const { data } = useQuery(['getCoronaRawDataApi'], () => getCoronaRawDataApi().then((res) => res.data), {
    refetchOnWindowFocus: true,
    suspense: true,
    useErrorBoundary: true,
    onError(err) {
      if (isAxiosError(err)) {
        // eslint-disable-next-line no-console
        console.log(err)
      }
    },
  })

  return (
    <>
      <Chart data={data} />
      <div className={styles.overflowWrapper}>
        <Corona />
      </div>
    </>
  )
}

export default View

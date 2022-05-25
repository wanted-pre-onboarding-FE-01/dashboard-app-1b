import BigNumber from 'bignumber.js'
import { filterData, dataStructure, TData, COMPANIES } from 'data/media-manufacturing'

const totalData: TData = {
  totalSum: dataStructure,
}

COMPANIES.forEach((item) => {
  const newFilterData = totalData.totalSum
  const oldFilterData = filterData[item]

  newFilterData.click = new BigNumber(newFilterData.click).plus(oldFilterData.click).toNumber()
  newFilterData.convValue = new BigNumber(newFilterData.convValue).plus(oldFilterData.convValue).toNumber()
  newFilterData.cost = new BigNumber(newFilterData.cost).plus(oldFilterData.cost).toNumber()
  newFilterData.cpa = new BigNumber(newFilterData.cpa).plus(oldFilterData.cpa).toNumber()
  newFilterData.cpc = new BigNumber(newFilterData.cpc).plus(oldFilterData.cpc).toNumber()
  newFilterData.ctr = new BigNumber(newFilterData.ctr).plus(oldFilterData.ctr).toNumber()
  newFilterData.imp = new BigNumber(newFilterData.imp).plus(oldFilterData.imp).toNumber()
  newFilterData.roas = new BigNumber(newFilterData.roas).plus(oldFilterData.roas).toNumber()
})

/* COMPANIES.push('totalSum') */

export const rawData = {
  header: ['', '광고비', '매출', '광고수익률(ROAS)', '노출수', '클릭 수', '클릭률(CTR)', '클릭당비용(CPC)'],
  category: ['facebook', 'gooogle', 'kakao', 'naver', 'toalSum'],
  data: Object.assign(filterData, totalData),
}

import BigNumber from 'bignumber.js'
import { groupBy, cloneDeep } from 'lodash'
import data from './wanted_FE-media-channel-data-set.json'

export type TData = Record<
  string,
  {
    click: number
    convValue: number
    cost: number
    cpa: number
    cpc: number
    ctr: number
    cvr: number
    imp: number
    roas: number
  }
>

export const dataStructure = {
  click: 0,
  convValue: 0,
  cost: 0,
  cpa: 0,
  cpc: 0,
  ctr: 0,
  cvr: 0,
  imp: 0,
  roas: 0,
}

export const filterData: TData = {
  facebook: cloneDeep(dataStructure),
  google: cloneDeep(dataStructure),
  kakao: cloneDeep(dataStructure),
  naver: cloneDeep(dataStructure),
}

export const COMPANIES = ['facebook', 'google', 'kakao', 'naver']

export const groupByData = groupBy(data, 'channel')

// TODO :: 추후에 DateTime Picker 구현하면 변경
const startDate = new Date('2022-02-01')
const endDate = new Date('2022-02-02')

COMPANIES.forEach((category) => {
  groupByData[category].forEach((v) => {
    const date = new Date(v.date)
    const target = filterData[category]
    if (startDate <= date && date <= endDate) {
      target.click = new BigNumber(target.click).plus(v.click).toNumber()
      target.convValue = new BigNumber(target.convValue).plus(v.convValue).toNumber()
      target.cost = new BigNumber(target.cost).plus(v.cost).toNumber()
      target.cpa = new BigNumber(target.cpa).plus(v.cpa).toNumber()
      target.cpc = new BigNumber(target.cpc).plus(v.cpc).toNumber()
      target.ctr = new BigNumber(target.ctr).plus(v.ctr).toNumber()
      target.imp = new BigNumber(target.imp).plus(v.imp).toNumber()
      target.roas = new BigNumber(target.roas).plus(v.roas).toNumber()
    }
  })
})

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

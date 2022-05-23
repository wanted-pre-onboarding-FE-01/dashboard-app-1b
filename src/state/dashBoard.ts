import { atom } from 'recoil'

export const service = atom<string[]>({
  key: '#service',
  default: ['매드업'],
})

interface IDate {
  startDate: Date
  endDate: Date
}

export const date = atom<IDate>({
  key: '#date',
  default: {
    startDate: new Date(),
    endDate: new Date(),
  },
})

type TCategory = 'ROAS' | '광고비' | '노출수' | '클릭수' | '전환수' | '매출'

interface ICategory {
  categories: TCategory[]
  weekly: boolean
}

export const category = atom<ICategory>({
  key: '#category',
  default: {
    categories: ['ROAS'],
    weekly: true,
  },
})

type TAdStatus = 'all' | 'active' | 'ended'

export const adStatus = atom<TAdStatus>({
  key: '#adStatus',
  default: 'all',
})

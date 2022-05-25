import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryStack,
  VictoryTheme,
  VictoryLegend,
  VictoryLabel,
  // VictoryTooltip,
} from 'victory'
import BigNumber from 'bignumber.js'
import { COMPANIES, filterData, groupByData } from 'data/media-manufacturing'
import { CHART_STYLE } from './chartStyle'
import { useRecoilValue } from 'recoil'
import { dateState } from 'state/dashBoard'

const CATEGORYS = ['광고비', '매출', '노출수', '클릭수', '전환수']

const MediaChannelGraph = () => {
  const date = useRecoilValue(dateState)

  const sum = {
    costSum: 0,
    salesSum: 0,
    impSum: 0,
    clickSum: 0,
    convSum: 0,
  }

  const chartData: { category: string; value: number }[][] = []

  COMPANIES.forEach((company) => {
    groupByData[company].forEach((v) => {
      const selectDate = new Date(v.date)
      const startDate = new Date(date.startDate)
      const endDate = new Date(date.endDate)
      const target = filterData[company]

      if (startDate <= selectDate && selectDate <= endDate) {
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

  COMPANIES.forEach((company) => {
    const target = filterData[company]
    const sales = new BigNumber(target.roas).multipliedBy(target.cost).div(100).toNumber()
    const conv = new BigNumber(target.click).multipliedBy(target.roas).toNumber()

    sum.costSum = new BigNumber(sum.costSum).plus(target.cost).toNumber()
    sum.salesSum = Math.floor(new BigNumber(sum.salesSum).plus(sales).toNumber())
    sum.impSum = new BigNumber(sum.impSum).plus(target.imp).toNumber()
    sum.clickSum = new BigNumber(sum.clickSum).plus(target.click).toNumber()
    sum.convSum = Math.floor(new BigNumber(sum.convSum).plus(conv).toNumber())
  })

  COMPANIES.forEach((company) => {
    const target = filterData[company]
    const sales = new BigNumber(target.roas).multipliedBy(target.cost).div(100).toNumber()
    const conv = new BigNumber(target.click).multipliedBy(target.roas).toNumber()

    const costPercentage = Math.floor((target.cost * 100) / sum.costSum)
    const salesPercentage = Math.floor((sales * 100) / sum.salesSum)
    const impPercentage = Math.floor((target.imp * 100) / sum.impSum)
    const clickPercentage = Math.floor((target.click * 100) / sum.clickSum)
    const convPercentage = Math.floor((conv * 100) / sum.convSum)

    chartData.push([
      { category: CATEGORYS[0], value: costPercentage },
      { category: CATEGORYS[1], value: salesPercentage },
      { category: CATEGORYS[2], value: impPercentage },
      { category: CATEGORYS[3], value: clickPercentage },
      { category: CATEGORYS[4], value: convPercentage },
    ])
  })

  return (
    <VictoryChart
      width={1000}
      domainPadding={{ x: 90, y: 10 }}
      theme={VictoryTheme.material}
      animate={{
        duration: 1000,
        onLoad: { duration: 1000 },
        easing: 'linear',
      }}
    >
      <VictoryLegend
        x={620}
        y={333}
        orientation='horizontal'
        gutter={50}
        style={{ labels: { fill: CHART_STYLE.grayColor } }}
        colorScale={[...CHART_STYLE.colorscale]}
        data={[{ name: '네이버' }, { name: '카카오' }, { name: '구글' }, { name: '페이스북' }]}
      />
      <VictoryAxis
        tickFormat={CATEGORYS}
        style={{ axis: { stroke: '#EDEFF1' }, tickLabels: { fill: CHART_STYLE.grayColor } }}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={(x) => `${x}%`}
        tickLabelComponent={<VictoryLabel dy={15} textAnchor='start' />}
        style={{ axis: { stroke: 'none' }, tickLabels: { fill: CHART_STYLE.grayColor, fontWeight: 'bold' } }}
      />
      <VictoryStack
        colorScale={[...CHART_STYLE.colorscale]}
        labels={[sum.costSum, sum.salesSum, sum.impSum, sum.clickSum, sum.convSum]}
      >
        <VictoryBar data={chartData[3]} {...CHART_STYLE.bar} />
        <VictoryBar data={chartData[2]} {...CHART_STYLE.bar} />
        <VictoryBar data={chartData[1]} {...CHART_STYLE.bar} />
        <VictoryBar data={chartData[0]} {...CHART_STYLE.bar} cornerRadius={{ top: 8 }} />
      </VictoryStack>
    </VictoryChart>
  )
}

export default MediaChannelGraph

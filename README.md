# 📈 매드업 기업 과제
<img src="https://user-images.githubusercontent.com/73621658/170202585-a89f1fa8-7da2-4cd6-9798-2c1306258df2.png">
🍀 JSON데이터를 활용한 차트 만들기

- **Github Repository URL** <br/> https://github.com/wanted-pre-onboarding-FE-01/dashboard-app-1b
- **배포 URL** <br/> https://madup1-b.netlify.app/

<br/>

# 실행 방법
> git clone https://github.com/wanted-pre-onboarding-FE-01/dashboard-app-1b.git  ➝ yarn install ➝ yarn start

<br/>

# 🗂 프로젝트 소개
- **개발 기간** 22.05.23 - 22.05.26
- **팀원** 강도희, 김민효, 이우성, 전해강, 정규재
- **프로젝트 개요** <br/>
본 프로젝트는 매드업 과제로, 매드업에서 제공한 data-set.json을 가공하여 데이터를 시각화해주는 광고 관리센터 페이지를 구현한 프로젝트입니다.

<br/>

# 📁 폴더 구조
<details>
    <summary>펼치기</summary>
📦src<br/>
 ┣ 📂assets<br/>
 ┃ ┗ 📂svg<br/>
 ┃ ┃ ┣ 📜.DS_Store<br/>
 ┃ ┃ ┣ 📜arrow.svg<br/>
 ┃ ┃ ┣ 📜bell.svg<br/>
 ┃ ┃ ┣ 📜bellpoint.svg<br/>
 ┃ ┃ ┣ 📜bulb.svg<br/>
 ┃ ┃ ┣ 📜caret-down.svg<br/>
 ┃ ┃ ┣ 📜caret-up.svg<br/>
 ┃ ┃ ┣ 📜dashboard.svg<br/>
 ┃ ┃ ┣ 📜gear.svg<br/>
 ┃ ┃ ┣ 📜index.js<br/>
 ┃ ┃ ┣ 📜logo.svg<br/>
 ┃ ┃ ┣ 📜manageAD.svg<br/>
 ┃ ┃ ┣ 📜profile.svg<br/>
 ┃ ┃ ┗ 📜spinner.svg<br/>
 ┣ 📂components<br/>
 ┃ ┣ 📂Dropdown<br/>
 ┃ ┃ ┣ 📜dropdown.module.scss<br/>
 ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┗ 📂LoadingPage<br/>
 ┃ ┃ ┣ 📜index.tsx<br/>
 ┃ ┃ ┗ 📜loadingPage.module.scss<br/>
 ┣ 📂data<br/>
 ┃ ┣ 📜wanted_FE-media-channel-data-set.json<br/>
 ┃ ┣ 📜wanted_FE_ad-list-data-set.json<br/>
 ┃ ┗ 📜wanted_FE_trend-data-set.json<br/>
 ┣ 📂routes<br/>
 ┃ ┣ 📂ADmanaging<br/>
 ┃ ┃ ┣ 📂Card<br/>
 ┃ ┃ ┃ ┣ 📜card.module.scss<br/>
 ┃ ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┃ ┣ 📜admanaging.module.scss<br/>
 ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┣ 📂Dashboard<br/>
 ┃ ┃ ┣ 📂DailyChart<br/>
 ┃ ┃ ┃ ┣ 📜OneChartStyle.ts<br/>
 ┃ ┃ ┃ ┣ 📜OneDataChart.tsx<br/>
 ┃ ┃ ┃ ┣ 📜TwoDataChart.tsx<br/>
 ┃ ┃ ┃ ┣ 📜XAxis.tsx<br/>
 ┃ ┃ ┃ ┣ 📜dailyChart.module.scss<br/>
 ┃ ┃ ┃ ┣ 📜index.tsx<br/>
 ┃ ┃ ┃ ┗ 📜twoChartStyle.ts<br/>
 ┃ ┃ ┣ 📂DailyMean<br/>
 ┃ ┃ ┃ ┣ 📂DailyMeanItem<br/>
 ┃ ┃ ┃ ┃ ┣ 📂DataList<br/>
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┃ ┃ ┃ ┣ 📂RateContainer<br/>
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.tsx<br/>
 ┃ ┃ ┃ ┃ ┃ ┗ 📜rateContainer.module.scss<br/>
 ┃ ┃ ┃ ┃ ┣ 📜dailyMeanItem.module.scss<br/>
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┃ ┃ ┣ 📜dailyMean.module.scss<br/>
 ┃ ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┃ ┣ 📂DataFilterButtons<br/>
 ┃ ┃ ┃ ┣ 📂DropdownList<br/>
 ┃ ┃ ┃ ┃ ┣ 📜OneDropDownList.tsx<br/>
 ┃ ┃ ┃ ┃ ┣ 📜TwoDropDownList.tsx<br/>
 ┃ ┃ ┃ ┃ ┣ 📜WeeklyDownList.tsx<br/>
 ┃ ┃ ┃ ┃ ┣ 📜dropdownList.module.scss<br/>
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┃ ┃ ┣ 📜DropdownButton.tsx<br/>
 ┃ ┃ ┃ ┣ 📜categoryDict.ts<br/>
 ┃ ┃ ┃ ┣ 📜dropdownButton.module.scss<br/>
 ┃ ┃ ┃ ┣ 📜index.module.scss<br/>
 ┃ ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┃ ┣ 📂DatePicker<br/>
 ┃ ┃ ┃ ┣ 📂DateRange<br/>
 ┃ ┃ ┃ ┃ ┣ 📜dateRange.module.scss<br/>
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┃ ┃ ┣ 📂Label<br/>
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx<br/>
 ┃ ┃ ┃ ┃ ┗ 📜label.module.scss<br/>
 ┃ ┃ ┃ ┣ 📜datePicker.module.scss<br/>
 ┃ ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┃ ┣ 📂MediaChannelGraph<br/>
 ┃ ┃ ┃ ┣ 📜chartStyle.ts<br/>
 ┃ ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┃ ┣ 📂MediaChannelTable<br/>
 ┃ ┃ ┃ ┣ 📜companyKRDict.ts<br/>
 ┃ ┃ ┃ ┣ 📜index.tsx<br/>
 ┃ ┃ ┃ ┗ 📜mediaChannelTable.module.scss<br/>
 ┃ ┃ ┣ 📜.DS_Store<br/>
 ┃ ┃ ┣ 📜dashboard.module.scss<br/>
 ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┣ 📂_shared<br/>
 ┃ ┃ ┣ 📂Header<br/>
 ┃ ┃ ┃ ┣ 📜header.module.scss<br/>
 ┃ ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┃ ┗ 📂LNB<br/>
 ┃ ┃ ┃ ┣ 📜index.tsx<br/>
 ┃ ┃ ┃ ┗ 📜lnb.module.scss<br/>
 ┃ ┣ 📜.DS_Store<br/>
 ┃ ┣ 📜index.tsx<br/>
 ┃ ┗ 📜routes.module.scss<br/>
 ┣ 📂state<br/>
 ┃ ┣ 📜dashBoard.ts<br/>
 ┃ ┗ 📜dropdown.ts<br/>
 ┣ 📂styles<br/>
 ┃ ┣ 📂base<br/>
 ┃ ┃ ┣ 📜_fonts.scss<br/>
 ┃ ┃ ┣ 📜_more.scss<br/>
 ┃ ┃ ┗ 📜_reset.scss<br/>
 ┃ ┣ 📂constants<br/>
 ┃ ┃ ┗ 📜_colors.scss<br/>
 ┃ ┣ 📂mixins<br/>
 ┃ ┃ ┣ 📜_flexbox.scss<br/>
 ┃ ┃ ┣ 📜_position.scss<br/>
 ┃ ┃ ┣ 📜_responsive.scss<br/>
 ┃ ┃ ┣ 📜_typography.scss<br/>
 ┃ ┃ ┗ 📜_visual.scss<br/>
 ┃ ┣ 📜index.js<br/>
 ┃ ┗ 📜index.scss<br/>
 ┣ 📂types<br/>
 ┃ ┣ 📜adType.d.ts<br/>
 ┃ ┣ 📜channel.d.ts<br/>
 ┃ ┣ 📜daily.d.ts<br/>
 ┃ ┣ 📜dashBoardCategory.d.ts<br/>
 ┃ ┗ 📜dashBoardCategory.ts<br/>
 ┣ 📂utils<br/>
 ┃ ┣ 📜.DS_Store<br/>
 ┃ ┣ 📜dateToKorean.ts<br/>
 ┃ ┣ 📜filterDailyByCategory.ts<br/>
 ┃ ┣ 📜formatConversion.ts<br/>
 ┃ ┣ 📜getBarChartData.ts<br/>
 ┃ ┣ 📜getDailyMean.ts<br/>
 ┃ ┣ 📜getMediaData.ts<br/>
 ┃ ┣ 📜index.ts<br/>
 ┃ ┣ 📜numberToDot.ts<br/>
 ┃ ┗ 📜unitPicker.ts<br/>
 ┣ 📜.DS_Store<br/>
 ┣ 📜index.tsx<br/>
 ┣ 📜react-app-env.d.ts<br/>
 ┣ 📜reportWebVitals.ts<br/>
 ┗ 📜setupTests.ts<br/>
</details>

<br/>

# 🔨 기술 스택
<div align="center">
 <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
 <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
 <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/>
 <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
 <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
 <img src="https://img.shields.io/badge/Recoil-764ABC?style=flat-square&logo=Recoil&logoColor=white"/>

 <br/>

|라이브러리|내용|버전|
|:---:|:---:|:---:|
| react-use | 리액트 편의 | 17.3.2 |
| dayjs | 날짜 관련 | 1.11.2 |
| lodash | 자바스크립트 편의 | 4.17.21 |
| victory | 차트 라이브러리 | 36.4.0 |
| bignumber.js | 정밀도 산술 관련 | 4.17.21 |
| classnames | styles 관련 | 2.3.1 |
| framer-motion | 애니메이션 관련 | 6.3.3 |
| react-date-range | Date Picker 관련 | 1.4.0 |

<br/>

</div>

# 🏞 기능 설명 with GIF

### 대시보드

<img src="https://user-images.githubusercontent.com/73621658/170205488-64a983e1-28d7-4836-8231-989dc9a61aeb.gif">

<br/>

### Date Picker

<details>
    <summary>구현 방법</summary>

## React Date Range 

1. Recoil로 전역 상태 관리 데이터를 설정하여 날짜의 범위를 설정하였습니다.
```ts
interface IDate {
  startDate: string
  endDate: string
}

export const dateState = atom<IDate>({
  key: '#date',
  default: {
    startDate: '2022-02-01',
    endDate: '2022-02-07',
  },
})
```
2. react date range 라이브러리를 사용하여 날짜 데이터를 다시 설정하였습니다.
```ts

const handleChange = ({ selection: { startDate, endDate } }: RangeKeyDict) => {
    setDateRange({
      startDate: dayjs(startDate).format(DAY_FORMAT),
      endDate: dayjs(endDate).format(DAY_FORMAT),
    })
  }

return (
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
)
```

</details>

### Dropdown Buttons(DataFilter Buttons)

<details>
    <summary>구현 방법</summary>

### 외부 클릭 기능
1.  onBlurEvnet와 onMouseEvnet를 이용하여 클릭한 버튼의 외부를 클릭할 경우 나타났던 드롭다운이 사라집니다.
``` tsx
// in DropdownButton.tsx
<div className={styles.dropdownCont} onBlur={handleOnBlur}>

// in DropdownList.tsx
<li key={key}>
  <button type='button' className={cx(styles.listItem)} onMouseDown={handleClick} value={data}>
    {data}
  </button>
</li>
```

2. 첫 번째 데이터 선택 버튼에는 차트에 표시될 모든 정보가 표시됩니다. 기본 값으로 ROAS를 가집니다. 

3. 두 번째 데이터 선택 버튼에는 첫 번째 데이터 선택 버튼에서 선택된 값을 제외한 모든 값을 리스트로 가집니다. 기본 값으로 "없음"을 가집니다. 버튼의 값이 없음 일 경우 차트에 데이터를 표시하지 않습니다.

```tsx
DATA_LIST.filter((item) => item !== categoryDict[oneSelectCategory])
  .filter((item) => {
    if (!twoSelectCategory) return item !== '없음'
      return twoSelectCategory && item !== categoryDict[twoSelectCategory]
})
```

</details>

### Daily Data Chart

<details>
    <summary>구현 방법</summary>

1. BigNumber JS를 이용하여 필요한 데이터를 가공하였습니다.
```ts
interface IProps {
  daily: IDaily[]
  category: TDashBoardCategory
  weekly?: boolean
}

interface IOutput {
  x: string
  y: number
}

export const filterDailyByCategory = ({ daily, category, weekly = false }: IProps): IOutput[] => {
  if (weekly) {
    if (category !== 'sales')
      return daily.filter((_, index) => index % 7 === 0).map((item) => ({ x: item.date, y: item[category] }))
    return daily
      .filter((_, index) => index % 7 === 0)
      .map((item) => {
        const y = new BigNumber(item.roas).multipliedBy(item.cost).dividedBy(100).toNumber()
        return {
          x: item.date,
          y,
        }
      })
  }
  if (category !== 'sales') return daily.map((item) => ({ x: item.date, y: item[category] }))
  return daily.map((item) => {
    const y = new BigNumber(item.roas).multipliedBy(item.cost).dividedBy(100).toNumber()
    return {
      x: item.date,
      y,
    }
  })
}
```

2. Victory JS를 이용하여 해당 데이터를 차트로 표현하였습니다.
```ts
 <VictoryChart
  height={500}
  theme={VictoryTheme.material}
  width={window.innerWidth}
  domainPadding={50}
  containerComponent={<VictoryVoronoiContainer />}
  animate={{
    duration: 2000,
    onLoad: { duration: 1000 },
    easing: 'linear',
  }}
>
  <VictoryAxis
    tickFormat={(tick) => dateToKorean(tick, true)}
    scale={{ x: 'time' }}
    fixLabelOverlap
    tickLabelComponent={<VictoryLabel renderInPortal />}
    {...ONE_CHART_STYLE.xAxis}
  />
  <VictoryAxis
    dependentAxis
    tickLabelComponent={<VictoryLabel renderInPortal dx={20} dy={-10} />}
    {...ONE_CHART_STYLE.yAxis}
    tickFormat={(tick) => `${numberToDot({ num: tick })} ${unit}`}
  />

  <VictoryLine
    data={data}
    labels={({ datum }) => `${numberToDot({ num: datum.y })}`}
    y={(datum) => datum.y}
    {...ONE_CHART_STYLE.line}
    labelComponent={
      <VictoryTooltip
        style={{ fontSize: 20, fill: '#ffffff' }}
        renderInPortal
        flyoutStyle={{
          stroke: 'none',
          fill: '#3A474E',
        }}
        cornerRadius={5}
        flyoutPadding={{
          left: 25,
          right: 25,
          top: 10,
          bottom: 10,
        }}
        pointerLength={0}
        dy={-15}
      />
    }
  />
  <VictoryScatter data={data} y={(datum) => datum.y} size={7} {...ONE_CHART_STYLE.scratter} />
</VictoryChart>
```


</details>

<br/>

### 매체 현황

<img src="https://user-images.githubusercontent.com/73621658/170247527-60aab129-b6a1-4d0a-8dd6-db39be7ac369.gif"/>

---

### 광고관리

<img src="https://user-images.githubusercontent.com/73621658/170206126-ae325471-5679-4734-9623-0284b411c1fd.gif">

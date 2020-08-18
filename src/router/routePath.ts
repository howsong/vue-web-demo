enum PATHS {
  ROOT = '/',
  LOGIN = '/login',
  HOME = '/home',
  ECHARTS = '/echarts',
  ELEMENT = '/elementDemos',
  SCENARIO = '/scenatio',
  SCENARIO_LIST = 'list',
  SCENARIO_EXAMPLE = 'example'
}

export const topNavMenu = [
  { title: '首页', path: PATHS.HOME },
  { title: 'echarts图表', path: PATHS.ECHARTS },
  { title: 'Element示例', path: PATHS.ELEMENT },
  {
    title: 'TEST',
    path: PATHS.ECHARTS,
    children: [
      { title: 'TEST1', path: '1' },
      { title: 'TEST2', path: '2' }
    ]
  },
  { title: '业务场景', path: PATHS.SCENARIO }
]

export default PATHS

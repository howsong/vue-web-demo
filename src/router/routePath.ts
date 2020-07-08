enum PATHS {
  ROOT = '/',
  LOGIN = '/login',
  HOME = '/home',
  ECHARTS = '/echarts'
}

export const topNavMenu = [
  { title: '首页', path: PATHS.HOME },
  { title: 'echarts图表', path: PATHS.ECHARTS },
  {
    title: 'TEST',
    path: PATHS.ECHARTS,
    children: [
      { title: 'TEST1', path: '1' },
      { title: 'TEST2', path: '2' }
    ]
  }
]

export default PATHS

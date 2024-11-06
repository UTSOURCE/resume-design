import customCss from '../../customCss';

export default {
  id: 'CampusExperience_6', // 组件唯一性id
  componentName: 'CampusExperience_6', // 组件名
  commentType: '', // 组件类型
  icon: '', // 组件icon
  title: '校园经历', // 组件中文名称
  description: '校园经历模块', // 组件描述信息
  screenShot: {
    width: '100%',
    url: '',
    name: 'CampusExperience_6.png'
  }, // 组件快照
  keywords: '基础信息', // 组件关键词，用于搜索
  category: 'campus_experience', // 组件分类
  props: {}, // 组件属性
  css: {
    position: 'relative',
    themeColor: '#079cfa',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: {
      top: 10,
      right: 30,
      bottom: 20,
      left: 30
    }
  }, // 组件样式
  customCss: customCss['CampusExperience_6'],
  dataSource: {}, // 组件单独数据
  customProps: {} // 自定义属性字段
};
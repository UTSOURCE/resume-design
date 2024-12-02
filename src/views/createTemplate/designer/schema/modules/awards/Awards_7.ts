import customCss from '../../customCss';

export default {
  id: 'Awards_7', // 组件唯一性id
  componentName: 'Awards_7', // 组件名
  commentType: '', // 组件类型
  icon: '', // 组件icon
  title: '荣誉奖项', // 组件中文名称
  description: '荣誉奖项模块', // 组件描述信息
  screenShot: {
    width: '100%',
    url: '',
    name: 'Awards_7.png'
  }, // 组件快照
  keywords: '荣誉奖项', // 组件关键词，用于搜索
  category: 'awards', // 组件分类
  props: {}, // 组件属性
  css: {
    position: 'relative',
    themeColor: '#254665',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: {
      top: 20,
      right: 30,
      bottom: 20,
      left: 30
    }
  }, // 组件样式
  customCss: customCss['Awards_7'],
  dataSource: {}, // 组件单独数据
  customProps: {
    ModuleTitleCpt: 'ModuleTitle_8'
  } // 自定义属性字段
};
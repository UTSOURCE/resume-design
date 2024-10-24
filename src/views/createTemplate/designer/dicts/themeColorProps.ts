// 配置哪一些属性需要跟随主题色改变
const themeColorProps: any = {
  ResumeTitle_1: {
    css: ['background'], // 主题样式需要设置为主题色的css属性
    customCss: {} // 自定义样式中，需要设置为主题色的prop，以及对应的css属性
  },
  ResumeTitle_2: {
    css: ['background'],
    customCss: {}
  },
  BaseInfo_3: {
    css: [],
    customCss: {
      moduleTitle: ['borderColor']
    }
  },
  JobIntention_1: {
    css: [],
    customCss: {
      moduleTitle: ['color', 'borderColor'],
      moduleTitleFont: ['color', 'borderColor']
    }
  },
  JobIntention_2: {
    css: [],
    customCss: {
      moduleTitle: ['color', 'borderColor'],
      moduleTitleFont: ['color', 'borderColor']
    }
  }
};
export default themeColorProps;

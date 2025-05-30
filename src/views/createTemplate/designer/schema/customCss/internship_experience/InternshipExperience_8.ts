export default [
  {
    title: '模块标题整体样式',
    prop: 'moduleTitle',
    css: {
      width: '100%',
      height: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderWidth: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      margin: {
        top: 0,
        right: 0,
        bottom: 5,
        left: 0
      },
      borderStyle: 'solid',
      background: 'none',
      borderColor: '#0b70bd',
      color: '#0b70bd'
    }
  },
  {
    title: '模块标题图标样式',
    prop: 'moduleTitleIcon',
    css: {
      width: 26,
      height: 26,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: -13,
      left: -13,
      background: '#0b70bd',
      borderWidth: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      margin: {
        top: 0,
        right: 0,
        bottom: 20,
        left: 0
      },
      borderStyle: 'solid',
      borderColor: '#0b70bd',
      borderRadius: {
        topLeft: '50%',
        topRight: '50%',
        bottomLeft: '50%',
        bottomRight: '50%'
      },
      color: '#fff',
      zIndex: 1
    }
  },
  {
    title: '模块标题右侧模块样式',
    prop: 'moduleTitleRightBox',
    css: {
      height: '100%',
      flex: 1,
      position: 'relative',
      borderWidth: {
        top: 1,
        right: 0,
        bottom: 0,
        left: 0
      },
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      borderStyle: 'solid',
      background: 'none',
      borderColor: '#0b70bd',
      color: '#0b70bd'
    }
  },
  {
    title: '模块标题字体样式',
    prop: 'moduleTitleFont',
    css: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: 2,
      background: 'none',
      borderWidth: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      margin: {
        top: 0,
        right: 70,
        bottom: 0,
        left: 0
      },
      borderColor: 'rgb(0, 0, 0)',
      borderStyle: 'solid'
    }
  },
  {
    title: '实习经验信息整体样式',
    prop: 'internshipExperienceBox',
    css: {
      width: '100%',
      background: 'none',
      display: 'flex',
      flexDirection: 'column',
      borderWidth: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 185
      },
      borderColor: 'rgb(0, 0, 0)',
      borderStyle: 'solid'
    }
  },
  {
    title: '实习经验标题列表整体样式',
    prop: 'internshipExperienceList',
    css: {
      width: '100%',
      lineHeight: 2.5,
      letterSpacing: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 14,
      color: '#757575',
      fontWeight: 600,
      background: 'none',
      borderWidth: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      margin: {
        top: 0,
        right: 0,
        bottom: 5,
        left: 0
      },
      borderColor: 'rgb(0, 0, 0)',
      borderStyle: 'solid'
    }
  },
  {
    title: '实习经验内容样式',
    prop: 'jobContentBox',
    css: {
      width: '100%',
      lineHeight: 1.5,
      letterSpacing: 1,
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: 14,
      color: '#757575',
      fontWeight: 500,
      background: 'none',
      borderWidth: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      borderColor: 'rgb(0, 0, 0)',
      borderStyle: 'solid'
    }
  },
  {
    title: '实习经验内容小标题样式',
    prop: 'contentTtile',
    css: {
      width: 120,
      lineHeight: 1.5,
      letterSpacing: 1,
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: 14,
      color: 'rgb(102, 102, 102)',
      fontWeight: 600,
      background: 'none',
      borderWidth: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      borderColor: 'rgb(0, 0, 0)',
      borderStyle: 'solid'
    }
  },
  {
    title: '实习经验内容列表整体样式',
    prop: 'internshipExperienceUl',
    css: {
      width: '100%',
      color: '#757575',
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
      margin: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
      },
      padding: {
        bottom: 0,
        left: 15,
        right: 0,
        top: 0
      },
      background: ''
    }
  },
  {
    title: '实习经验内容单个列表样式',
    prop: 'internshipExperienceLi',
    css: {
      width: '100%',
      listStyle: 'disc',
      listStylePosition: 'outside',
      letterSpacing: 1,
      lineHeight: 2,
      fontSize: 14,
      textAlign: 'justify',
      margin: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
      },
      padding: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
      },
      background: ''
    }
  }
];

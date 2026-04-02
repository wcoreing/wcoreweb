export const projects = [
  {
    id: 'nest',
    name: 'Nest — 让书签真正为你所用',
    shortDescription: 'AI 驱动的书签智能整理工具，让收藏夹重新变得井井有条',
    description: 'Nest 是一款革命性的书签管理工具，利用 AI 技术自动分析和分组书签。它不是简单地按域名分类，而是真正理解内容，按主题、用途、领域重新归类。',
    tags: ['浏览器扩展', 'AI', 'TypeScript'],
    highlights: [
      { icon: '✨', title: 'AI 智能分组', desc: '分析书签内容，按主题自动归类，创意度可调' },
      { icon: '📂', title: '可视化书签树', desc: '实时展示完整结构，支持搜索、拖拽、编辑' },
      { icon: '🕐', title: '版本历史', desc: '自动保存快照，一键恢复任意版本' },
      { icon: '🔒', title: '隐私优先', desc: '本地运行，数据不上传，完全掌控' }
    ],
    painPoints: [
      '书签栏越来越乱，找一个链接要翻半天',
      '收藏了很多东西，但从来不知道自己收藏了什么',
      '想整理，但几百条书签手动分类太费时间',
      '整理完又乱了，下次还得重来'
    ],
    usage: [
      '安装浏览器扩展（Chrome / Edge）',
      '点击扩展图标打开 Nest',
      '选择要整理的书签目录',
      '点击「AI 分组」开始智能整理',
      '预览并调整分组结果',
      '满意后一键应用到书签'
    ],
    requirements: 'Chrome 88+ / Edge 88+',
    downloads: [
      { platform: 'Chrome 商店', url: '#', icon: '🌐' },
      { platform: 'Edge 商店', url: '#', icon: '🌐' }
    ],
    version: '1.0.0',
    updatedAt: '2024-04-01'
  }
]

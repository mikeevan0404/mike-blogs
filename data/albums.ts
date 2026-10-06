// 🛡️ 本文件由控制台自动生成，请勿手动修改
export interface Photo { url: string; caption?: string; }
export interface Album { id: string; title: string; description: string; cover: string; date: string; photos: Photo[]; }

export const albums: Album[] = [
  {
    id: 'shanghai',
    title: '上海',
    description: '外滩与陆家嘴的城市风景',
    cover: '/photos/shanghai-sunrise.jpg',
    date: '2026-10-06',
    photos: [
      { url: '/photos/shanghai-sunrise.jpg', caption: '日出时分的陆家嘴天际线' },
      { url: '/photos/shanghai-tower.jpg', caption: '蓝天下的东方明珠' },
      { url: '/photos/shanghai-night.jpg', caption: '外滩夜景' },
    ],
  },
  {
    id: 'changsha',
    title: '长沙',
    description: '橘子洲与岳麓山下的湘江风光',
    cover: '/photos/changsha-orangeisland.jpg',
    date: '2026-10-06',
    photos: [
      { url: '/photos/changsha-orangeisland.jpg', caption: '橘子洲头航拍' },
      { url: '/photos/changsha-dusk.jpg', caption: '黄昏时分的橘子洲' },
      { url: '/photos/changsha-yuelu.jpg', caption: '岳麓山下湘江畔' },
    ],
  },
  {
    id: 'chengdu',
    title: '成都',
    description: '锦里、都江堰与青城山的蜀地风景',
    cover: '/photos/chengdu-jinli.jpg',
    date: '2026-10-06',
    photos: [
      { url: '/photos/chengdu-jinli.jpg', caption: '锦里古街入口' },
      { url: '/photos/chengdu-dujiangyan.jpg', caption: '都江堰夜景' },
      { url: '/photos/chengdu-qingcheng.jpg', caption: '青城山顶远眺' },
    ],
  },
];

import router from 'next/router'
import icon_progress_protect from '@/assets/img/icon-progress-protect.png'
import icon_gps_week from '@/assets/img/icon-gps-week.png'

export const questionConfig = [
  {
    leftText: '司机服务规则',
    rightTexts: ['取消规则', '收费规则', '服务质量', '安全驾驶', '干扰平台运营', '严重违规行为', '物品遗失原则']
  },
  {
    leftText: '账号及软件',
    rightTexts: [
      '软件及时更新',
      '如何下载新哎呦喂司机APP',
      '无法提现',
      '为什么被封号',
      '车牌信息显示错误',
      '如何提现',
      '顺路模式说明',
      '以下场景易被判断为刷单'
    ]
  },
  {
    leftText: '接单服务前',
    rightTexts: [
      '乘客要求修改目的地',
      '无法出车怎么办',
      '如何取消订单',
      '乘客取消订单怎么办',
      '为什么订单常被取消',
      '被封号怎么办',
      '订单为什么这么少',
      '行程中避免计价丢失的小技巧'
    ]
  },
  {
    leftText: '接驾服务中',
    rightTexts: [
      '找不到乘客怎么办',
      '行程中发生交通事故怎么办',
      '路桥费、停车费等附加费用由谁支付',
      '司机去接乘客遇到以下场景，怎么办',
      '行程最终价格和预估价格不一致，怎么办',
      '遇到交通管制怎么办',
      '新手司机不认路，怎么办',
      '乘客想吸烟，怎么办',
      '乘客中途下车，怎么办'
    ]
  },
  {
    leftText: '接驾服务后',
    rightTexts: [
      '发现乘客遗失物品，怎么办',
      '乘客索要发票怎么办',
      '服务结束停靠安全注意',
      '目的地不方便停车怎么办',
      '乘客未支付订单怎么办'
    ]
  }
]

export const helpConfig = [
  {
    logo: icon_progress_protect,
    text: '进程保护设置',
    link: () => router.push('/process-protect-faq')
  },
  {
    logo: icon_gps_week,
    text: 'GPS信号弱处理方法',
    link: () => router.push('/gps-faq')
  }
]

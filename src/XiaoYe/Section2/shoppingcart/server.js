const express = require('express');

const app = express();

const data = [
  {
    id: 1,
    name: '华为Mate60pro',
    price: 6999.00,
    image: 'https://res.vmallres.com/pimages//uomcdn/CN/pms/202309/gbom/6942103109508/428_428_00DCC42890DED616DA1DB8F906B0928Dmp.png',
    intro: '卫星通话，超可靠玄武架构，全焦段超清影像',
    max_order: 1,
    hot: true,
    high: true
  },
  {
    id: 2,
    name: '小米14Pro',
    price: 3999.00,
    image: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1666797637.51469523.png',
    intro: '承袭徕卡专业光学设计，搭载新一代 Summilux 镜头，以非凡影像力，瞬间猎获真实光影。第三代骁龙®8移动平台，震撼性能，轻巧释放。全等深微曲屏，突破传统形态限制，满而不溢。更有全新小米澎湃OS，以人为中心，打造「人车家全生态」操作系统。Xiaomi 14 Pro，超越旗舰，超乎所想。',
    max_order: 1,
    hot: false,
    high: true
  },
  {
    id: 3,
    name: '索尼 WH-1000XM5',
    price: 9999.00,
    image: 'https://www.sonystyle.com.cn/content/dam/sonystyle/products/headphone/wh_1000xm5/product/1000xm5_800x800_b1.jpg',
    intro: '一般非常好看的数码产品',
    max_order: 2,
    hot: false,
    high: false
  },
  {
    id: 4,
    name: '3108 Silent静谧机械键盘',
    price: 399.00,
    image: 'https://www.akkogear.com/wp-content/uploads/2020/05/3108_silent_800_1.jpg',
    intro: '机械键盘哦',
    max_order: 99,
    hot: true,
    high: false
  },
];

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  next();
});

app.get('/products', (req, res) => {
  res.json(data);
});

app.get('/detail/:id', (req, res) => {
  /**
   * post => req.body 
   * get => req.params
   */
  const {id} = req.params;
  const detail = data.find(item => item.id == id);

  res.json(detail);
})

app.listen(3000);


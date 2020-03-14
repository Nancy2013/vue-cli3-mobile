module.exports = {
    "plugins": {
      "postcss-import": {}, // 解决文件导入
      "postcss-url": {}, // 图片路径
      "autoprefixer": {}, // to edit target browsers: use "browserslist" field in package.json
      "postcss-aspect-ratio-mini": {},  // 支持aspect-ratio语法,处理元素容器宽高比
      "postcss-write-svg": { // 支持在postcss中绘制svg
        utf8: false
      },
      "postcss-cssnext": {}, // 支持css新语法
      "postcss-px-to-viewport": {
        // viewportWidth: 750,  //视窗的宽度，对应的是我们设计稿的宽度，一般是750
        // viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
        viewportWidth: 375,  //视窗的宽度，对应的是我们设计稿的宽度，一般是750
        viewportHeight: 667, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
        unitPrecision: 3,       // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        viewportUnit: 'vw',     // 指定需要转换成的视窗单位，建议使用vw
        selectorBlackList: ['.ignore',],  // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        minPixelValue: 1,       // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        mediaQuery: false       // 是否允许在媒体查询中转换`px`
      }, 
      "postcss-viewport-units":{}, // // 适配IOS8以及Android4.4以下版本，会给元素自动添加content属性覆盖原来属性
      "cssnano": { // 压缩css代码,css-loader中已引进  
        "cssnano-preset-advanced": { //取消z-index自动转化
          zindex: false,
          autoprefixer: false
        },
      },
    }
  }
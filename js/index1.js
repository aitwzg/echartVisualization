$(function () {
  (function () {
    // console.log(111);
    $('.monitor .tabs').on('click', 'a', function () {
      console.log(111);
      $(this).addClass('active').siblings('a').removeClass('active');
      $('.monitor .content').eq($(this).index()).show().siblings('.content').hide();
    });
    $('.marquee-view .marquee').each(function () {
      var rows = $(this).children().clone();
      $(this).append(rows);
    });
  })();

  (function () {
    var myChart = echarts.init(document.querySelector('.pie'));
    var option = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      // 注意颜色写的位置
      color: [
        "#006cff",
        "#60cda0",
        "#ed8884",
        "#ff9f7f",
        "#0096ff",
        "#9fe6b8",
        "#32c5e9",
        "#1d9dff"
      ],
      series: [
        {
          name: "点位统计",
          type: "pie",
          // 如果radius是百分比则必须加引号
          radius: ["10%", "60%"],
          center: ["50%", "50%"],
          roseType: "radius",
          data: [
            { value: 20, name: "云南" },
            { value: 26, name: "北京" },
            { value: 24, name: "山东" },
            { value: 25, name: "河北" },
            { value: 20, name: "江苏" },
            { value: 25, name: "浙江" },
            { value: 30, name: "四川" },
            { value: 42, name: "湖北" }
          ],
          // 修饰饼形图文字相关的样式 label对象
          label: {
            fontSize: 10,
            color: "#fff"
          },
          // 修饰引导线样式
          labelLine: {
            // 连接到图形的线长度
            length: 4,
            // 连接到文字的线长度
            length2: 5
          }
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      // 让我们的图表调用 resize这个方法
      myChart.resize();
    });
  })();

  (function () {
    var myChart = echarts.init(document.querySelector('.bar'));
    var option = {
      color: new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
          { offset: 0, color: "#00fffb" },
          { offset: 1, color: "#0061ce" }
        ]
      ),
      tooltip: {
        trigger: 'item'
      },
      grid: {
        left: '0%',
        right: '4%',
        bottom: '3%',
        top: "10%",
        containLabel: true,
        show: true,
        borderColor: 'rgba(0,240,255,.3)'
      },
      xAxis: [
        {
          type: 'category',
          data: [
            "上海",
            "广州",
            "北京",
            "深圳",
            "合肥",
            "",
            "......",
            "",
            "杭州",
            "厦门",
            "济南",
            "成都",
            "重庆"
          ],
          axisTick: {
            alignWithLabel: false,
            show: false
          },
          axisLabel: {
            color: "#4c9bfd"
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0,240,255,.3)'
            }
          }

        }
      ],
      yAxis: [
        {
          type: 'value',
          axisTick: {
            // alignWithLabel: false,
            show: false
          },
          axisLabel: {
            color: "#4c9bfd"
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0,240,255,.3)'
            }
          },
          splitLine: {
            lineStyle: {
              color: "rgba(0,240,255,.3)"
            }
          }
        }
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: [
            2100,
            1900,
            1700,
            1560,
            1400,
            {
              name: '', value: 1200, itemStyle: { color: "#254065" },
              emphasis: {
                itemStyle: {
                  color: '#254065'
                }
              },
              tooltip: {
                extraCssText: "opacity:0"
              }
            },
            {
              name: '', value: 1200, itemStyle: { color: "#254065" },
              emphasis: {
                itemStyle: {
                  color: '#254065'
                }
              },
              tooltip: {
                extraCssText: "opacity:0"
              }
            },
            {
              name: '', value: 900, itemStyle: { color: "#254065" },
              emphasis: {
                itemStyle: {
                  color: '#254065'
                }
              },
              tooltip: {
                extraCssText: "opacity:0"
              }
            },
            900,
            750,
            600,
            480,
            240
          ]
        }
      ]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
      // 让我们的图表调用 resize这个方法
      myChart.resize();
    });

  })();
  (function () {
    // // 1. 准备数据
    // var data = {
    //   day365: { orders: '20,301,987', amount: '99834' },
    //   day90: { orders: '301,987', amount: '9834' },
    //   day30: { orders: '1,987', amount: '3834' },
    //   day1: { orders: '987', amount: '834' }
    // }

    // var Orders = $('.order h4').eq(0);
    // var Amount = $('.order h4').eq(1);
    // $('.order').on('click', '.filter a', function () {
    //   $(this).addClass('active').siblings().removeClass('active');
    //   var currdata = data[this.dataset.key];
    //   // index = $(this).index();
    //   console.log(currdata.orders);
    //   Orders.html(currdata.orders);
    //   Amount.html(currdata.amount);
    // });

    // 1. 准备数据
    var data = [
      { orders: '20,301,987', amount: '99834' },
      { orders: '301,987', amount: '9834' },
      { orders: '1,987', amount: '3834' },
      { orders: '987', amount: '834' }
    ]

    var Orders = $('.order h4').eq(0);
    var Amount = $('.order h4').eq(1);
    $('.order').on('click', '.filter a', function () {
      $(this).addClass('active').siblings().removeClass('active');
      var currdata = data[$(this).index()];
      index = $(this).index();
      // console.log(currdata.orders);
      Orders.html(currdata.orders);
      Amount.html(currdata.amount);
    });



    var index = 0
    var AllTab = $('.order .filter a')
    var timer = setInterval(function () {
      index++
      if (index >= 4) index = 0
      AllTab.eq(index).click()
    }, 1000)
    // $('.order').hover(function(){
    //   clearInterval(tamer)
    // },)
    $(".order").hover(function () {
      clearInterval(timer);
    }, function () {
      clearInterval(timer);
      timer = setInterval(function () {
        index++;
        // console.log(index);
        if (index >= 4) index = 0;
        AllTab.eq(index).click();
      }, 1000);
    })
  })();














  (function () {

    // (1)准备数据
    var data = {
      year: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ],
      quarter: [
        [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
        [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
      ],
      month: [
        [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
        [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
      ],
      week: [
        [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
        [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
      ]
    };
    var myChart = echarts.init(document.querySelector('.line'));

    var option = {
      color: ['#00f2f1', '#ed3f35'],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        right: '10%',
        textStyle: {
          color: '#4c9bfd'
        },
        data: ['预期销售额', '实际销售额']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '20%',
        show: true,
        borderColor: "#012f4a",
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', "9月", "10月", '11月', '12月'],
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#4c9bfd"
        },
        axisLine: {
          show: false
        },
      },
      yAxis: {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#4c9bfd"
        },
        splitLine: {
          lineStyle: {
            color: '#012f4a'
          }
        }
        // axisLine:{
        //   show:false
        // },
      },
      series: [
        {
          name: '预期销售额',
          type: 'line',
          stack: 'Total',
          smooth: 'true',
          data: data.year[0]
        },
        {
          name: '实际销售额',
          type: 'line',
          stack: 'Total',
          smooth: 'true',
          data: data.year[1]
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      // 让我们的图表调用 resize这个方法
      myChart.resize();
    });

    $('.sales .caption').on('click', 'a', function () {
      index = $(this).index() - 1;
      $(this).addClass('active').siblings('a').removeClass('active');
      // console.log(data[$(this).attr("data-type")]);
      // console.log(data[this.dataset.type]);
      var arr = data[this.dataset.type];
      // console.log(arr);
      option.series[0].data = arr[0];
      option.series[1].data = arr[1];

      myChart.setOption(option);

    });

    var as = $('.sales .caption a');
    var index = 0;
    var timer = setInterval(function () {
      index++;
      if (index >= 4) index = 0;
      as.eq(index).click();
    }, 1000);
    $(".sales").hover(function () {
      clearInterval(timer);
    }, function () {
      clearInterval(timer);
      timer = setInterval(function () {
        index++;
        if (index >= 4) index = 0;
        as.eq(index).click();
      }, 1000);
    })
  })();

  (function () {

    var myChart = echarts.init(document.querySelector('.radar'));
    

    var option = {
      tooltip: {
        trigger: 'item',
        show: true,
        // 控制提示框组件的显示位置
        position: ["50%", "10%"],
        textStyle: {
          fontSize: 16
        }
      },
      radar: {
        shape: 'circle',
        center: ['50%', '50%'],
        radius: '50%',
        splitNumber: 4,
        name: {
          textStyle: {
            color: '#4c9bfd'
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255, 0.5)"
          }
        },
        splitArea: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255, 0.5)"
          }
        },
        indicator: [
          { name: "机场", max: 100 },
          { name: "商场", max: 100 },
          { name: "火车站", max: 100 },
          { name: "汽车站", max: 100 },
          { name: "地铁", max: 100 }
        ]
      },
      series: [
        {
          name: '北京',
          type: 'radar',
          symbol: 'circle',
          symbolSize: 5,
          itemStyle: {
            color: '#fff'
          },
          lineStyle: {
            normal: {
              color: "#fff",
              width: 1,
              opacity: 0.5
            }
          },
          label: {
            show: true,
            fontSize: 10,
            textStyle: {
              color: '#fff'
            },
          },
          data: [[34, 99, 27, 26, 44]],
          areaStyle: {
            color: "rgba(238, 197, 102, 0.6)"
          }
        }
      ]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
      // 让我们的图表调用 resize这个方法
      myChart.resize();
    });
  })();
  (function () {
    var myChart = echarts.init(document.querySelector('.gauge'));
    var option = {
      series: [
        {
          name: '销售进度',
          type: 'pie',
          radius: ['130%', '150%'],
          center: ['48%', '80%'],
          labelLine: {
            show: false
          },
          data: [
            {
              value: 100,
              itemStyle: { color: '#12274d' }
            },
            { value: 200, itemStyle: { color: 'transparent' } },
            {
              value: 100, itemStyle: {
                // 颜色渐变#00c9e0->#005fc1
                color: new echarts.graphic.LinearGradient(
                  // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                  0,
                  0,
                  0,
                  1,
                  [
                    { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                    { offset: 1, color: "#005fc1" } // 1 结束颜色
                  ]
                )
              }
            }
          ],
          hoverOffset: 0,
        }
      ],

    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      // 让我们的图表调用 resize这个方法
      myChart.resize();
    });
  })();

  (function () {
    var hotData = [
      {
        city: '北京',  // 城市
        sales: '25, 179',  // 销售额
        flag: true, //  上升还是下降
        brands: [   //  品牌种类数据
          { name: '可爱多', num: '9,086', flag: true },
          { name: '娃哈哈', num: '8,341', flag: true },
          { name: '喜之郎', num: '7,407', flag: false },
          { name: '八喜', num: '6,080', flag: false },
          { name: '小洋人', num: '6,724', flag: false },
          { name: '好多鱼', num: '2,170', flag: true },
        ]
      },
      {
        city: '河北',
        sales: '23,252',
        flag: false,
        brands: [
          { name: '可爱多', num: '3,457', flag: false },
          { name: '娃哈哈', num: '2,124', flag: true },
          { name: '喜之郎', num: '8,907', flag: false },
          { name: '八喜', num: '6,080', flag: true },
          { name: '小洋人', num: '1,724', flag: false },
          { name: '好多鱼', num: '1,170', flag: false },
        ]
      },
      {
        city: '上海',
        sales: '20,760',
        flag: true,
        brands: [
          { name: '可爱多', num: '2,345', flag: true },
          { name: '娃哈哈', num: '7,109', flag: true },
          { name: '喜之郎', num: '3,701', flag: false },
          { name: '八喜', num: '6,080', flag: false },
          { name: '小洋人', num: '2,724', flag: false },
          { name: '好多鱼', num: '2,998', flag: true },
        ]
      },
      {
        city: '江苏',
        sales: '23,252',
        flag: false,
        brands: [
          { name: '可爱多', num: '2,156', flag: false },
          { name: '娃哈哈', num: '2,456', flag: true },
          { name: '喜之郎', num: '9,737', flag: true },
          { name: '八喜', num: '2,080', flag: true },
          { name: '小洋人', num: '8,724', flag: true },
          { name: '好多鱼', num: '1,770', flag: false },
        ]
      },
      {
        city: '山东',
        sales: '20,760',
        flag: true,
        brands: [
          { name: '可爱多', num: '9,567', flag: true },
          { name: '娃哈哈', num: '2,345', flag: false },
          { name: '喜之郎', num: '9,037', flag: false },
          { name: '八喜', num: '1,080', flag: true },
          { name: '小洋人', num: '4,724', flag: false },
          { name: '好多鱼', num: '9,999', flag: true },
        ]
      }
    ];


    // 声明一个函数渲染函数

    function render(that) {

      that.addClass('active').siblings().removeClass();
      // console.log(hotData[$(this).index()].brands);
      var subHTML = '';
      $.each(hotData[that.index()].brands, function (index, item) {
        subHTML += `<li><span>${item.name}</span><span> ${item.num}<s class=${item.flag ? "icon-up" : "icon-down"}></s></span></li>`
      });
      // console.log(subHTML);
      $(".sub").html(subHTML);

    }



    var supHTML = '';
    $.each(hotData, function (index, item) {
      // console.log(item);
      // console.log(index);
      supHTML += `<li><span>${item.city}</span><span> ${item.sales} <s class=${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;

    });
    // console.log(supHTML);
    $(".sup").html(supHTML);

    $(".province .sup").on('mouseenter', 'li', function () {
      render($(this));
      // 写在上面下面都一样
      // index = $(this).index();
      // console.log(index);
    });
    // 所有的LI
    var lis = $('.province .sup li');
    // 第一个默认激活
    lis.eq(0).mouseenter();

    var index = 0;
    var timer = setInterval(function () {
      index++;
      if (index >= 5) index = 0;
      // lis.eq(index).mouseenter();
      render(lis.eq(index))
      // console.log(subHTML);
    }, 2000);

    $(".province .sup li").hover(
      function () {
        clearInterval(timer);
      // 写在上面下面都一样
        index = $(this).index();
        console.log(index);
      },
      function () {
        clearInterval(timer);
        timer = setInterval(function () {

          index++;
          if (index >= 5) index = 0;
          render(lis.eq(index))

        }, 2000)
      }
    );
  })();




});



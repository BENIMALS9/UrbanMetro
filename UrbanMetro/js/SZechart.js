$(function () {
    echart_1();
    echart_2();

    echart_3();
    echart_4();

    //echart_map();

	function echart_1() {
	      // 基于准备好的dom，初始化echarts实例
	      var myChart = echarts.init(document.getElementById('chart_1'));
	     var data = [
	         {value:89.82,name: '福田区'},
	         {value:34.05,name: '罗湖区'},
	         {value:10.88,name: '盐田区'},
	         {value:95.76,name: '南山区'},
				{value:75.16,name: '宝安区'},
				{value:43.42,name: '龙岗区'},
				{value:50.35,name: '龙华区'},
				{value: 0,name: '坪山区'},
				{value:11.72,name: '光明区'},
				{value: 0,name: '大鹏新区'},
	     ];
	     
	     option = {
	         backgroundColor: 'transparent',
	         tooltip: {
	             trigger: 'item',
	             formatter: "{a} <br/>{b}: {c} ({d}%)"
	         },
	         color: ['#1478fd', '#f36f8a', '#ffff43', '#25f3e6','#df00a7', '#e24b00', '#65d812', '#8f61de', '#ffaa7f', '#ffaa00'],
	         legend: { //图例组件，颜色和名字
	             left: '70%',
	             top: '40',
	             orient: 'vertical',
	             itemGap: 12, //图例每项之间的间隔
	             itemWidth: 16,
	             itemHeight: 12,
	     
	             icon: 'rect',
	             data: ['福田区','罗湖区','盐田区','南山区','宝安区','龙岗区','龙华区','坪山区','光明区','大鹏新区'],
	             textStyle: {
	                 color: [],
	                 fontStyle: 'normal',
	                 fontFamily: '微软雅黑',
	                 fontSize: 12,
	             },
				 selected: {
				 	'坪山区':false,
				 	'大鹏新区':false,
				 },
	         },
	         series: [{
	             name: '里程数/km',
	             type: 'pie',
	             clockwise: false, //饼图的扇区是否是顺时针排布
	             minAngle: 20, //最小的扇区角度（0 ~ 360）
	             center: ['35%', '50%'], //饼图的中心（圆心）坐标
	             radius: [50, 80], //饼图的半径
	             avoidLabelOverlap: true, ////是否启用防止标签重叠
	             itemStyle: { //图形样式
	                 normal: {
	                     borderColor: '#1e2239',
	                     borderWidth: 1.5,
	                 },
	             },
	     
	            label: { //标签的位置
	                formatter: "{b}{c}km\n\n",
	            	padding:[0,-55],
	            	textStyle: {
	            		fontSize:'11',
	            		color:'#9e9e9e',
	            	    fontWeight: 'bold'
	            	},
	              
	                emphasis: {
	                    show: true,
	                    textStyle: {
	            			fontSize:'15',
	            			color:'#fff',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	             data: data
	         }, {
	             name: '',
	             type: 'pie',
	             clockwise: false,
	             silent: true,
	             minAngle: 20, //最小的扇区角度（0 ~ 360）
	             center: ['35%', '50%'], //饼图的中心（圆心）坐标
	             radius: [0, 45], //饼图的半径
	             itemStyle: { //图形样式
	                 normal: {
	                     borderColor: '#1e2239',
	                     borderWidth: 1.5,
	                     opacity: 0.21,
	                 }
	             },
	             label: { //标签的位置
	                 normal: {
	                     show: false,
	                 }
	             },
	             data: data
	         }]
	     };
	      // 使用刚指定的配置项和数据显示图表。
	      myChart.setOption(option);
	      window.addEventListener("resize",function(){
	          myChart.resize();
	      });
	  }
	  
	///echart_2
	  function echart_2() {
	//       // 基于准备好的dom，初始化echarts实例
	      var myChart = echarts.init(document.getElementById('chart_2'));
			// // Schema:
			// // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
			 var futian=[[78.66,163.37,4018.2592,91.8467,6.6918,43.48823442],];
			 var luohu=[[78.75,103.99,2253.6945,37.8705,6.1459,21.05053672],];
			var yantian=[[74.99,24.29,612.7631,5.8531,5.183,4.537847369],];
			 var nanshan=[[187.53,149.36,5018.3646,84.958,8.3615,19.86745236],];
			var baoan=[[369.61,325.78,3612.1814,89.8584,3.513,5.295490939],];
			var longgang=[[388.22,238.64,4287.8617,67.6725,3.7139,5.80],];
			var longhua=[[175.58,167.28,2401.8151,49.7010,5.31,19.08],];
			var pingshan=[[166.31,44.63,701.6584,16.6592,2.60,0],];
			var guangming=[[155.44,62.50,341.6572,4.3036,3.70,4.12],];
			var dapeng=[[295.38,15.30,341.6572,4.3036,2.63,0],];
			
			
			var lineStyle = {
			    normal: {
			        width: 2,
			        opacity: 0.5
			    }
			};
			
			option = {
			   
			    title: {
			        text: 'AQI - 雷达图',
			        left: 'center',
			        textStyle: {
			            color: '#eee'
			        },
					show:false,
			    },
			    legend: {
			        bottom: 2,
					left: 2,
			        data: ['福田区','罗湖区','盐田区','南山区','宝安区','龙岗区','龙华区','坪山区','光明区','大鹏新区'],
			        itemGap: 5,
			        textStyle: {
			            color: '#fff',
			            fontSize: 10
			        },
			        selectedMode: 'multi',
					selected:{
						'福田区': true,
						'罗湖区': false,
						'盐田区':false,
						'南山区':false,
						'宝安区':false,
						'龙岗区':false,
						'龙华区':false,
						'坪山区':false,
						'光明区':false,
						'大鹏新区':false,
					}
			    },
			    radar: {
					center:['50%','45%'],
					radius:'55%',
			        indicator: [
			            {name: '土地面积', max: 400},
			            {name: '常住人口/万人', max:350},
			            {name: 'GDP/万元', max: 5020},
			            {name: '就业人口/万人', max:92},
			            {name: '房价均价（万元/平方米）', max:9},
			            {name: '地铁服务水平', max: 45}
			        ],
			        shape: 'circle',
			        splitNumber: 5,
			        name: {
			            textStyle: {
			                color: 'rgb(193, 188, 185)',
							fontSize:10
			            }
			        },
			        splitLine: {
			            lineStyle: {
			                color: [
			                    'rgba(101, 238, 238, 0.1)', 'rgba(37, 181, 172, 0.2)',
			                    'rgba(101, 238, 234, 0.4)', 'rgba(61, 209, 238, 0.6)',
			                    'rgba(108, 238, 238, 0.8)', 'rgba(69, 236, 238, 1.0)'
			                ].reverse(),
			            }
			        },
			        splitArea: {
			            show: false
			        },
			        axisLine: {
			            lineStyle: {
			                color: 'rgba(151, 255, 177, 0.5)'
			            }
			        }
			    },
			    series: [
			        {
			            name: '福田区',
			            type: 'radar',
			            lineStyle: lineStyle,
			            data: futian,
			            symbol: 'none',
			            itemStyle: {
			                color: '#1478fd'
			            },
			            areaStyle: {
			                opacity: 0.1
			            }
			        },
			        {
			            name: '罗湖区',
			            type: 'radar',
			            lineStyle: lineStyle,
			            data: luohu,
			            symbol: 'none',
			            itemStyle: {
			                color: '#e46984'
			            },
			            areaStyle: {
			                opacity: 0.05
			            }
			        },
			        {
			            name: '盐田区',
			            type: 'radar',
			            lineStyle: lineStyle,
			            data: yantian,
			            symbol: 'none',
			            itemStyle: {
			                color: '#c0c43f'
			            },
			            areaStyle: {
			                opacity: 0.05
			            }
			        },
					{
					    name: '南山区',
					    type: 'radar',
					    lineStyle: lineStyle,
					    data: nanshan,
					    symbol: 'none',
					    itemStyle: {
					        color: '#25f3e6'
					    },
					    areaStyle: {
					        opacity: 0.05
					    }
					},
					{
					    name: '宝安区',
					    type: 'radar',
					    lineStyle: lineStyle,
					    data: baoan,
					    symbol: 'none',
					    itemStyle: {
					        color: 'rgb(223, 0, 167)'
					    },
					    areaStyle: {
					        opacity: 0.05
					    }
					},
					{
					    name: '龙岗区',
					    type: 'radar',
					    lineStyle: lineStyle,
					    data: longgang,
					    symbol: 'none',
					    itemStyle: {
					        color: 'rgb(226, 75, 0)'
					    },
					    areaStyle: {
					        opacity: 0.05
					    }
					},
					{
					    name: '龙华区',
					    type: 'radar',
					    lineStyle: lineStyle,
					    data: longhua,
					    symbol: 'none',
					    itemStyle: {
					        color: 'rgb(101, 216, 18)'
					    },
					    areaStyle: {
					        opacity: 0.05
					    }
					},
					{
					    name: '坪山区',
					    type: 'radar',
					    lineStyle: lineStyle,
					    data: pingshan,
					    symbol: 'none',
					    itemStyle: {
					        color: 'rgb(143, 97, 222)'
					    },
					    areaStyle: {
					        opacity: 0.05
					    }
					},
					{
					    name: '光明区',
					    type: 'radar',
					    lineStyle: lineStyle,
					    data: guangming,
					    symbol: 'none',
					    itemStyle: {
					        color: 'rgb(255, 170, 127)'
					    },
					    areaStyle: {
					        opacity: 0.05
					    }
					},
					{
					    name: '大鹏新区',
					    type: 'radar',
					    lineStyle: lineStyle,
					    data: dapeng,
					    symbol: 'none',
					    itemStyle: {
					        color: 'rgb(255, 170, 0)'
					    },
					    areaStyle: {
					        opacity: 0.05
					    }
					}
			    ]
			};
	      
	      
	      // 使用刚指定的配置项和数据显示图表。
	      myChart.setOption(option);
	      window.addEventListener("resize",function(){
	          myChart.resize();
	      });
	      
	  }



    //chart_3
	//城市尺度主页
	//2004-2020年的日均客运量（万人次）和里程数（公里）的增长情况
	function echart_3(){
		var myChart = echarts.init(document.getElementById('chart_3'));
		var option = {
			title: {
				text: ''
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				top: '20',
				textStyle: {color: []},
				data: ['日均客流量/万人次','总里程数/公里']
			},
			color:["#ffff43","#c91e51"],
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			toolbox: {
				feature: {
					saveAsImage: {}
				}
			},
			xAxis: {
				type: 'category',
				axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
				axisLabel:{interval:0,rotate:40,textStyle:{color:'#fff',fontSize:10} },
				axisTick : {show: false},
				data: ['2003','2004', '2005', '2006', '2007', '2008', '2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020']
			},
			yAxis: {
				type: 'value',
				//axisTick : {show: false},
				splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
				axisLabel:{textStyle:{color:'#fff',fontSize:10} },
				axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
			},
			
			series: [
				{
					name: '日均客流量/万人次',
					type: 'line',
					symbol:"circle",
					symbolSize:10,
					data: [0,10,13.6,24.6,32.2,37.02,37.87,43.75,109.8,182,212.9,268.5,307.36,400,453.25,514.38,556.8]
				},
				{
					name: '总里程数/公里',
					type: 'line',
					symbol:"circle",
					symbolSize:10,
					data: [0,21.866,21.866,21.866,25.366,65.292,178.9,178.9,178.9,178.9,178.9,286.3,286.3,286.3,293.95,412.39]
				}
			]
		};
	
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize",function(){
			myChart.resize();
		});
	}
		
	//chart_4
	//城市尺度主页
	//深圳市2020地铁各线路的长度与站点数量
	function echart_4() {
		var myChart = echarts.init(document.getElementById('chart_4'));
		var myData = ['1号线', '2号线', '3号线', '4号线', '5号线', '6号线', '7号线', '8号线', '9号线', '10号线', '11号线']
		//线路长度数据
		var databeast = {
			1: [41, 40.1, 43.1, 31.3,47.65,49.4,30.1,12.36,36.18,29.3,51.9]
		}
		//线路站点数数据
		var databeauty = {
			1: [30,29,31,15,34,27,28,6,32,24,18]
		}
		var timeLineData = [1]
		var option = {
			baseOption: {
				backgroundColor: 'transparent',
				timeline: {
					show: false,
					top: 0,
					data: []
				},
				legend: {
					show:true,
					// align: 'center',
					left: '25%',
					top: 20,
					icon: 'rect',
					textStyle: {
						itemGap: 12, //图例每项之间的间隔
						color: [],
						fontStyle: 'normal',
						fontFamily: '微软雅黑',
						fontSize: 12,
					}
				},
				tooltip: {
					show: true,
					trigger: 'axis',
					formatter: '{b}<br/>{a}: {c}',
					axisPointer: {
						type: 'shadow'
					}
				},
	
				grid: [{
					show: false,
					left: '8%',
					top: 50,
					bottom: 0,
					containLabel: true,
					width: '30%'
				}, {
					show: false,
					left: '57%',
					top: 50,
					bottom: 0,
					width: '0%'
				}, {
					show: false,
					right: '8%',
					top: 50,
					bottom: 0,
					containLabel: true,
					width: '30%'
				}],
	
				xAxis: [{
					type: 'value',
					inverse: true,
					axisLine: {show: false},
					axisTick: {show: false},
					position: 'top',
					axisLabel: {show: false},
					splitLine: {show: false}}, 
					{gridIndex: 1,show: false}, 
					{gridIndex: 2,nameTextStyle: {color: '#50afff',fontSize: 12},
					
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					position: 'top',
					axisLabel: {
						show: false
					},
					splitLine: {
						show: false
					}
				}],
				yAxis: [{
					type: 'category',
					inverse: true,
					position: 'right',
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						show: false
					},
					data: myData
				}, 
				{
					gridIndex: 1,
					type: 'category',
					inverse: true,
					position: 'left',
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						show: true,
						textStyle: {
							color: '#fff',
							fontSize: 12
						}
	
					},
					data: myData.map(function(value) {
						return {
							value: value,
							textStyle: {
								align: 'center'
							}
						}
					})
				}, {
					gridIndex: 2,
					type: 'category',
					inverse: true,
					position: 'left',
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						show: false
	
					},
					data: myData
				}],
				series: [
				
				]
	
			},
			options: []
		}
	
		option.baseOption.timeline.data.push(timeLineData[0])
		option.options.push({
			tooltip: {
				trigger: 'axis',
				formatter: '{b}<br/>{a} ：{c} '
			},
			series: [{
				name: '里程数/公里',
				type: 'bar',
				barWidth: 15,
				label: {
					normal: {
						show: true,
						position: 'left',
						offset: [0, 0],
						textStyle: {
							color: '#fff',
							fontSize: 12
						}
					}
				},
				itemStyle: {
					normal: {
						color: '#0070f9',
						// barBorderRadius: 50
					}
				},
	
				data: databeast[timeLineData[0]]
			}, {
				name: '站点数/个',
				type: 'bar',
				barWidth: 15,
				xAxisIndex: 2,
				yAxisIndex: 2,
				label: {
					normal: {
						show: true,
						position: 'right',
						offset: [0, 0],
						textStyle: {
							color: '#fff',
							fontSize: 12
						}
					}
				},
				itemStyle: {
					normal: {
						color: '#25f3e6',
						// barBorderRadius: 50
					}
				},
				data: databeauty[timeLineData[0]]
			}]
		})
			
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
			window.addEventListener("resize",function(){
				myChart.resize();
			});
		}
	})
    

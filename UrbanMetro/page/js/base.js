$(function () {
    //echart_map();
    //echart_1 全市运营里程指标
    function echart_1() {
       // 基于准备好的dom，初始化echarts实例
           var myChart = echarts.init(document.getElementById('chart_1'));
           var option = {
               tooltip: {
                   trigger: 'axis',
           		//formatter: '{b}<br/>{a}: {c} 公里',
               },
       		color: ['#d93936', '#8cb8be','#f39373'],
               legend: [
       			{
       				top: '30',
       				textStyle: {color: [],fontSize:18},
       				name: ['总里程数/km','增长率/%']
       			},
       			// {
       			// 	top: '50',
       			// 	textStyle: {fontSize:14},
       			// 	name: ['线路里程数']
       			// }
               ],
           	//color:["#c91e51"],
               grid: [
                   {
       				left: '7%', top: '7%', width: '80%', height: '40%'
       			},
       			{
       				left: '7%', bottom: '4%', width: '80%', height: '40%'
       				//containLabel: true
       			}
       			
               ],
               toolbox: {
                   feature: {
					   dataView: {show: true, readOnly: false},
					   magicType: {show: true, type: ['line', 'bar',]},
					   restore: {show: true},
					   saveAsImage: {show: true}
                   },
				   top:'5',
				   color:'#fff'
               },
               xAxis: [
                   {
       				type: 'category',
       				axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
       				axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:14} },
       				axisTick : {show: false},
       				data: ['2003','2004', '2005', '2006', '2007', '2008', '2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'],
       				gridIndex:0
       			},
       			{
       				type: 'category',
       				axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
       				axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:14} },
       				axisTick : {show: false},
       				data: ['1号线', '2号线', '3号线', '4号线', '5号线', '6号线', '7号线', '8号线', '9号线', '10号线', '11号线'],
       				axisPointer: {
       				type: 'shadow'},
       				gridIndex:1
       			}
               ],
               yAxis: [
       		{
                   type: 'value',
				   name:'总里程数',
				   nameTextStyle:{color:'#fff',fontSize:17},
           		axisTick : {show: true},
                   splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
                   axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
           		axisLabel: {
           			textStyle:{color:'#fff',fontSize:14},
           		},
       			gridIndex:0
       		},
       		{
       			type: 'value',
       			name: '线路里程数',
				nameTextStyle:{color:'#fff',fontSize:17},
       			splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
       			axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
       			axisLabel: {
       				textStyle:{color:'#fff',fontSize:14},
       			},
       			gridIndex:1
       		}
       
               ],
               series: [
                   {
                       name: '总里程数/km',
                       type: 'line',
                       symbol:"circle",
                       symbolSize:10,
                       data: [0,21.866,21.866,21.866,25.366,65.292,178.9,178.9,178.9,178.9,178.9,286.3,286.3,286.3,293.95,412.39],
       				xAxisIndex:0,
       				yAxisIndex:0,
       				
                   },
           		{
           		    name: '增长率/%',
           		    type: 'line',
           		    symbol:"circle",
           		    symbolSize:10,
           			areaStyle: {},
           		    data: [100,0,0,0,0,16,157,174,0,0,0,0,60,0,0,3,40],
       				xAxisIndex:0,
       				yAxisIndex:0,
       			
           		},
       			{
       				name: '线路里程数',
       				type: 'bar',
       				data: [41,40.1,43.1,31.3,47.7,49.4,30.1,12.36,36.18,29.3,51.9],
       				xAxisIndex:1,
       				yAxisIndex:1,
       			}
       			
           	]
           };
           // 使用刚指定的配置项和数据显示图表。
           myChart.setOption(option);
       }
    
	
    //echart_2 
    function echart_2(){
        var myChart = echarts.init(document.getElementById('chart_2'));
    	var option = {
    	    tooltip: {
    	        trigger: 'axis',
    			formatter: '{b}<br/>{a}: {c} 公里',
    			axisPointer: {
    				type: 'shadow'
    			}
    	    },
    	    legend: {
    			top: '20',
    			textStyle: {color: [],fontSize:14},
    	        data: ['线路里程数']
    	    },
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
    	        axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:14} },
    	        axisTick : {show: false},
    	        data: ['1号线', '2号线', '3号线', '4号线', '5号线', '6号线', '7号线', '8号线', '9号线', '10号线', '11号线'],
    	        axisPointer: {
    	        	type: 'shadow'
    	        },
    		},
    	    yAxis: {
    			type: 'value',
    			name: '线路里程数',
    			splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
    			axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
    			axisLabel: {
    				textStyle:{color:'#fff',fontSize:14},
    			}
    		},
    		
    	    series: [
    	        {
    	        	name: '线路里程数',
    	        	type: 'bar',
    	        	data: [41,40.1,43.1,31.3,47.7,49.4,30.1,12.36,36.18,29.3,51.9]
    	        },
    	    ]
    	};
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        // window.addEventListener("resize",function(){
        //     myChart.resize();
        // });
    }
	
	
    //echart_3 各线路站点统计情况
    function echart_3() {
        var myChart = echarts.init(document.getElementById('chart_3'));
    	var option = {
    		// title: {
    		//     text: '各线路站点统计情况',
    		// 	textStyle:{color:'#fff',fontSize:20} 
    		// },
    		color: ['#aaffff','#5500ff','#5283c8','#f99576','#ffff43','#aaffff'],
    		tooltip: {
    			trigger: 'axis',
    			axisPointer: {            // 坐标轴指示器，坐标轴触发有效
    				type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    			}
    		},
    		legend: {
    			top:30,
    			textStyle: {color: []},
    			name: [ '换乘站数','非换乘站数','总站点数','里程数', '站点数', '平均站距'],
    		},
    		grid: [
    		    {
					left: '7%', top: '10%', width: '80%', height: '35%'
				},
				{
					left: '7%', bottom: '7%', width: '80%', height: '35%'
					//containLabel: true
				}
				
    		],
			toolbox: {
				feature: {
					dataView: {show: true, readOnly: false},
					magicType: {show: true, type: ['line', 'bar',]},
					restore: {show: true},
					saveAsImage: {show: true}
				},
				top:'5',
				color:'#fff'
			},
    		xAxis:[ {
    			type: 'category',
    			axisLabel:{textStyle:{color:'#fff',fontSize:16} },
    			axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
    			data: ['1号线', '2号线', '3号线', '4号线', '5号线', '6号线', '7号线', '8号线', '9号线', '10号线', '11号线'],
				gridIndex:0,
    		},
			{
				type: 'category',
				axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
				axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:15} },
				splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
				data: ['1号线', '2号线', '3号线', '4号线', '5号线', '6号线', '7号线', '8号线', '9号线', '10号线', '11号线'],
				axisPointer: {
					type: 'shadow'
				},
				gridIndex:1,
			},
			],
    		yAxis:[ {
    			type: 'value',
    			axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
    			axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:16} },
    			splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
    			axisTick : {show: false},
    			gridIndex:0,
    		},
			{
				type: 'value',
				name: '里程数',
				min: 0,
				max: 60,
				interval: 15,
				axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
				//splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
				axisLabel: {
					textStyle:{color:'#fff',fontSize:16},
					formatter: '{value} km',
				},
				nameTextStyle:{color:'#fff',fontSize:17},
				gridIndex:1,
			},
			{
				type: 'value',
				name: '平均站距',
				min: 0,
				max: 4,
				interval: 1,
				axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
				//splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
				axisLabel: {
					textStyle:{color:'#fff',fontSize:10},
					formatter: '{value} km'
				},
				nameTextStyle:{color:'#fff',fontSize:17},
				gridIndex:1,
			}
    		],
    		series: [
    			{
    				name: '总站点数',
    				type: 'line',
					lineStyle: {width: 3 },
    				label: {
    					show: true,
    					textStyle:{color:'#fff',fontSize:14} 
    				},
    				data: [30,29,31,15,34,27,28,6,32,24,18],
					xAxisIndex:0,
					yAxisIndex:0,
    			},
    			{
    				name: '换乘站数',
    				type: 'bar',
    				stack: '总量',
    				label: {
    					show: false,
    				},
    				data: [10,8,11,7,11,7,11,1,9,5,5],
					xAxisIndex:0,
					yAxisIndex:0,
    			},
    			{
    				name: '非换乘站数',
    				type: 'bar',
    				stack: '总量',
    				label: {
    					show: false,
    				},
    				data: [20,21,20,8,23,20,17,5,23,19,13],
					xAxisIndex:0,
					yAxisIndex:0,
    			},
				{
					name: '里程数',
					type: 'bar',
					data: [41,40.1,43.1,31.3,47.7,49.4,30.1,12.36,36.18,29.3,51.9],
					xAxisIndex:1,
					yAxisIndex:1,
				},
				{
					name: '站点数', 
					type: 'bar',
					data: [30,29,31,15,34,27,28,6,32,24,18],
					xAxisIndex:1,
					yAxisIndex:1,
				},
				{
					name: '平均站距',
					type: 'line',
					lineStyle: {width: 3 },
					yAxisIndex: 1,
					data: [1.37,1.38,1.39,2.09,1.4,1.38,1.08,2.06,1.13,1.22,2.88],
					xAxisIndex:1,
					yAxisIndex:2,
				}
    		]
    	};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    //echart_4
    function echart_4() {
        var myChart = echarts.init(document.getElementById('chart_4'));
    	var option = {
    	    title: {
    	        text: '线路平均运距',
    	    	textStyle:{color:'#fff',fontSize:20} 
    	    },
    		tooltip: {
    			trigger: 'axis',
    			axisPointer: {
    				type: 'cross',
    				crossStyle: {
    					color: '#999'
    				}
    			}
    		},
    		xAxis: {
    			type: 'category',
    			axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
    			axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:10} },
    			splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
    			data: ['1号线', '2号线', '3号线', '4号线', '5号线', '6号线', '7号线', '8号线', '9号线', '10号线', '11号线'],
    
    		},
    		
    	    yAxis: {
    			type: 'value',
    			name: '平均站距',
    			axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
    			splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
    			axisLabel: {
    				textStyle:{color:'#fff',fontSize:10},
    			}
    		},
    	    series: [
    			{
    				name: '平均站距',
    				type: 'line',
    				lineStyle: {width: 3 },
    				data: [1.37,1.38,1.39,2.09,1.4,1.38,1.08,2.06,1.13,1.22,2.88]
    			},
				
    		]
    	};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	
	
    //echart_5
    //线路的里程数、站点数、平均站间距（备用）
    function echart_5() {
        var myChart = echarts.init(document.getElementById('chart_5'));
    	var option = {
    		title: {
    		    text: '线路的里程数-站点数-平均站间距（备用）',
    			textStyle:{color:'#fff',fontSize:20} 
    		},
    		tooltip: {
    			trigger: 'axis',
    			axisPointer: {
    				type: 'cross',
    				crossStyle: {
    					color: '#999'
    				}
    			}
    		},
    		toolbox: {
				feature: {
					dataView: {show: true, readOnly: false},
					magicType: {show: true, type: ['line', 'bar',]},
					restore: {show: true},
					saveAsImage: {show: true}
				},
				top:'5',
				color:'#fff'
    		},
    		legend: {
    			top:20,
    			textStyle: {color: []},
    			data: ['里程数', '站点数', '平均站距']
    		},
    		color:['#c23531','#5555ff','#4788fb'],
    		xAxis: [
    			{
    				type: 'category',
    				axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
    				axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:10} },
    				splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
    				data: ['1号线', '2号线', '3号线', '4号线', '5号线', '6号线', '7号线', '8号线', '9号线', '10号线', '11号线'],
    				axisPointer: {
    					type: 'shadow'
    				}
    			}
    		],
    		yAxis: [
    			{
    				type: 'value',
    				name: '里程数',
    				min: 0,
    				max: 60,
    				interval: 15,
    				axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
    				//splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
    				axisLabel: {
    					textStyle:{color:'#fff',fontSize:10},
    					formatter: '{value} km',
    				}
    			},
    			{
    				type: 'value',
    				name: '平均站距',
    				min: 0,
    				max: 4,
    				interval: 1,
    				axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
    				//splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
    				axisLabel: {
    					textStyle:{color:'#fff',fontSize:10},
    					formatter: '{value} km'
    				}
    			}
    		],
    		series: [
    			{
    				name: '里程数',
    				type: 'bar',
    				data: [41,40.1,43.1,31.3,47.7,49.4,30.1,12.36,36.18,29.3,51.9]
    			},
    			{
    				name: '站点数', 
    				type: 'bar',
    				data: [30,29,31,15,34,27,28,6,32,24,18]
    			},
    			{
    				name: '平均站距',
    				type: 'line',
    				lineStyle: {width: 3 },
    				yAxisIndex: 1,
    				data: [1.37,1.38,1.39,2.09,1.4,1.38,1.08,2.06,1.13,1.22,2.88]
    			}
    		]
    	};
    		
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	
	
    //eChart_6 全市日均客运量与增长率
    function echart_6(){
        var myChart = echarts.init(document.getElementById('chart_6'));
    	var option = {
    	  //   title: {
    	  //       text: '网络日均客运量与增长率',
    			// textStyle:{color:'#fff',fontSize:20} 
    	  //   },
		  color: ['#ffaa7f','#c23531','#ffff43','#ffaa7f','#ffffff','#5283c8','#5500ff'],
    	    tooltip: {
    	        trigger: 'axis',
    			//formatter: '{b}<br/>{a}: {c} 公里',
    	    },
    	    legend: {
    			top: '380',
    			textStyle: {color: [],fontSize:14},
    	        name: ['日均客运量','增长率','公共交通客运量', '地铁客运量', '比重','客运强度','增长率']
    	    },
    	    grid: [
    	        {left: '7%', top: '7%', width: '38%', height: '38%'},
    	        {right: '7%', top: '7%', width: '38%', height: '38%'},
    	        {left: '15%', bottom: '7%', width: '65%', height: '38%'},
    	        // {right: '7%', bottom: '7%', width: '38%', height: '38%'}
    	    ],
    	    toolbox: {
				feature: {
					dataView: {show: true, readOnly: false},
					magicType: {show: true, type: ['line', 'bar',]},
					restore: {show: true},
					saveAsImage: {show: true}
				},
				top:'5',
				right:'100',
				color:'#fff'
    	    },
    	    xAxis: [{
    	        type: 'category',
    	        axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
    	        axisLabel:{interval:0,rotate:40,textStyle:{color:'#fff',fontSize:8} },
    	        axisTick : {show: false},
    	        data: ['2003','2004', '2005', '2006', '2007', '2008', '2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
				gridIndex:0,
    	    },
			{
				type: 'category',
				axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
				axisLabel:{interval:0,rotate:40,textStyle:{color:'#fff',fontSize:14} },
				splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
				data: ['2011','2012','2013','2014','2015','2016','2017','2018','2019'],
				axisPointer: {
					type: 'shadow'
				},
				gridIndex:1,
			},
			{
				type: 'category',
				axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
				axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:14} },
				axisTick : {show: false},
				data: ['2004', '2005', '2006', '2007', '2008', '2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
				gridIndex:2,
			},
			],
    	    yAxis: [{
    	        type: 'value',
    			axisTick : {show: true},
    	        splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
    	        axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
    			axisLabel: {
    				textStyle:{color:'#fff',fontSize:14},
					
    			},
				name:'日均客运量/万乘次每日',
				nameTextStyle:{color:'#fff',fontSize:14},
				gridIndex:0,
				},
				
				{
					type: 'value',
					name: '客运量',
					axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
					//splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
					axisLabel: {
						textStyle:{color:'#fff',fontSize:12},
						formatter: '{value} 万人次/年',
					},
					nameTextStyle:{color:'#fff',fontSize:15},
					gridIndex:1,
				},
				{
					type: 'value',
					name: '比重',
					min: 0,
					max: 100,
					axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
					//splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
					axisLabel: {
						textStyle:{color:'#fff',fontSize:14},
						formatter: '{value} %'
					},
					nameTextStyle:{color:'#fff',fontSize:15},
					gridIndex:1,
				},
				{
					type: 'value',
					name: '增长率',
					axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
					//splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
					axisLabel: {
						textStyle:{color:'#fff',fontSize:14},
						formatter: '{value} '
					},
					nameTextStyle:{color:'#fff',fontSize:17},
					gridIndex:2,
				},
				
				
    	   
			],
    	    series: [
    	        {
    	            name: '日均客运量/万乘次每日',
    	            type: 'line',
    	            symbol:"circle",
    	            symbolSize:10,
    	            data: [0,10,13.6,24.6,32.2,37.02,37.87,43.75,109.8,182,212.9,268.5,307.36,400,453.25,514.38,556.8],
					xAxisIndex:0,
					yAxisIndex:0,
    	        },
    			{
    			    name: '增长率/%',
    			    type: 'line',
    			    symbol:"circle",
    			    symbolSize:10,
    				areaStyle: {},
    			    data: [100.00 ,36.00 ,80.88 ,30.89 ,14.97 ,2.30 ,15.53 ,150.97 ,65.76 ,16.98 ,26.12 ,14.47 ,30.14 ,13.31 ,13.49 ,8.25 ],
					xAxisIndex:0,
					yAxisIndex:0,
				},
				{
					name: '公共交通客运量', 
					type: 'bar',
					data: [306023,347221,355123,373255,358191,353874,368049,390319,403536],
					xAxisIndex:1,
					yAxisIndex:1,
				},
				{
					name: '地铁客运量',
					type: 'bar',
					data: [45984,78128,91715,103674,112187,129713,165436,187747,202122],
					xAxisIndex:1,
					yAxisIndex:1,
				},
				{
					name: '比重',
					type: 'line',
					lineStyle: {width: 3 },
					yAxisIndex: 1,
					data: [15.0,22.5,25.8,27.8,31.3,36.6,44.9,48.1,50.0],
					xAxisIndex:1,
					yAxisIndex:2,
				},
				{
				    name: '客运强度',
				    type: 'bar',
				    data: [0.46 ,0.62 ,1.13 ,1.47 ,1.69 ,1.49 ,0.67 ,0.61 ,1.02 ,1.19 ,1.50 ,1.72 ,1.40 ,1.58 ,1.80 ,1.89 ],
					xAxisIndex:2,
					yAxisIndex:3,
				},
				{
				    name: '增长率',
				    type: 'line',
				    symbol:"circle",
				    symbolSize:10,
					areaStyle: {},
				    data: [0.36 ,0.81 ,0.31,0.15 ,-0.12 ,-0.55,-0.08 ,0.66,0.17 ,0.26 ,0.14 ,-0.19 ,0.13 ,0.13 ,0.05 ,-1.00 ],
					xAxisIndex:2,
					yAxisIndex:3,
				},
    		]
    	};
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	
	
    //echart_7
    function echart_7() {
        var myChart = echarts.init(document.getElementById('chart_7'));
    	var option = {
    		title: {
    		    text: '地铁客运量比重',
    			textStyle:{color:'#fff',fontSize:20} 
    		},
    		tooltip: {
    			trigger: 'axis',
    			axisPointer: {
    				type: 'cross',
    				crossStyle: {
    					color: '#999'
    				}
    			}
    		},
    		toolbox: {
    			feature: {
    				dataView: {show: true, readOnly: false},
    				magicType: {show: true, type: ['line', 'bar']},
    				restore: {show: true},
    				saveAsImage: {show: true}
    			}
    		},
    		legend: {
    			top:20,
    			textStyle: {color: []},
    			data: ['公共交通客运量', '地铁客运量', '比重']
    		},
    		color:['#c23531','#5555ff','#4788fb'],
    		xAxis: [
    			{
    				type: 'category',
    				axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
    				axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:10} },
    				splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
    				data: ['2011','2012','2013','2014','2015','2016','2017','2018','2019'],
    				axisPointer: {
    					type: 'shadow'
    				}
    			}
    		],
    		yAxis: [
    			{
    				type: 'value',
    				name: '客运量',
    				axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
    				//splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
    				axisLabel: {
    					textStyle:{color:'#fff',fontSize:10},
    					formatter: '{value} 万人次/年',
    				}
    			},
    			{
    				type: 'value',
    				name: '比重',
    				min: 0,
    				max: 100,
    				axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
    				//splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
    				axisLabel: {
    					textStyle:{color:'#fff',fontSize:10},
    					formatter: '{value} %'
    				}
    			}
    		],
    		series: [
    			{
    				name: '公共交通客运量', 
    				type: 'bar',
    				data: [306023,347221,355123,373255,358191,353874,368049,390319,403536]
    			},
    			{
    				name: '地铁客运量',
    				type: 'bar',
    				data: [45984,78128,91715,103674,112187,129713,165436,187747,202122]
    			},
    			{
    				name: '比重',
    				type: 'line',
    				lineStyle: {width: 3 },
    				yAxisIndex: 1,
    				data: [15.0,22.5,25.8,27.8,31.3,36.6,44.9,48.1,50.0]
    			}
    		]
    	};
    		
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	
	
    //echart_8
    function echart_8(){
        var myChart = echarts.init(document.getElementById('chart_8'));
    	var option = {
    	    title: {
    	        text: '网络客运强度与增长率，万乘次/公里·日',
    			textStyle:{color:'#fff',fontSize:20} 
    	    },
    	    tooltip: {
    	        trigger: 'axis'
    	    },
    	    legend: {
    			top: '20',
    			textStyle: {color: []},
    	        data: ['客运强度','增长率']
    			
    	    },
    		color:["#61a0a8","#d48265"],
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
    	    xAxis: [
    			{
    				type: 'category',
    				axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
    				axisLabel:{interval:0,rotate:40,textStyle:{color:'#fff',fontSize:10} },
    				axisTick : {show: false},
    				data: ['2004', '2005', '2006', '2007', '2008', '2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019']
    			},
    		],
    	    yAxis: [
    			{
    				type: 'value',
    				name: '增长率',
    				axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
    				//splitLine: {show: true,lineStyle:{ color:'#2c3459'}},
    				axisLabel: {
    					textStyle:{color:'#fff',fontSize:10},
    					formatter: '{value} '
    				}
    			},
    		],
    		
    	    series: [
    			{
    			    name: '客运强度',
    			    type: 'bar',
    			    data: [0.46 ,0.62 ,1.13 ,1.47 ,1.69 ,1.49 ,0.67 ,0.61 ,1.02 ,1.19 ,1.50 ,1.72 ,1.40 ,1.58 ,1.80 ,1.89 ]
    			},
    			{
    			    name: '增长率',
    			    type: 'line',
    			    symbol:"circle",
    			    symbolSize:10,
    				areaStyle: {},
    			    data: [0.36 ,0.81 ,0.31,0.15 ,-0.12 ,-0.55,-0.08 ,0.66,0.17 ,0.26 ,0.14 ,-0.19 ,0.13 ,0.13 ,0.05 ,-1.00 ]
    			},
    	    ],
    	};
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	
	
    //echart_9
    function echart_9() {
        var myChart = echarts.init(document.getElementById('chart_9'));
        var dataBJ = [
            [80,80,85,80,80,100,80,80,80,80,120]
        ];
        var lineStyle = {
            normal: {
                width: 1.5,
                opacity: 0.6
            }
        };
        var option = {
            backgroundColor: '#161627',
            title: {
                text: '线路运营最高速度雷达图',
                left: 'center',
    			top:30,
                textStyle: {
                    color: '#eee'
                }
            },
            legend: {
                bottom: 30,
                data: ['深圳'],
                itemGap: 20,
                textStyle: {color: []},
                selectedMode: 'single'
            },
            radar: {
                indicator: [
                    {name: '1号线', max: 130},
                    {name: '2号线', max: 130},
                    {name: '3号线', max: 130},
                    {name: '4号线', max: 130},
                    {name: '5号线', max: 130},
                    {name: '6号线', max: 130},
                    {name: '7号线', max: 130},
                    {name: '8号线', max: 130},
                    {name: '9号线', max: 130},
                    {name: '10号线', max: 130},
    				{name: '11号线', max: 130}
                ],
                shape: 'circle',
                splitNumber: 11,
                name: {
                    textStyle: {
                        color: 'rgb(238, 197, 102)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)'
                        ].reverse()
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(238, 197, 102, 0.5)'
                    }
                }
            },
            series: [
                {
                    name: '深圳',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataBJ,
                    symbol: 'none',
                    itemStyle: {
                        color: '#F9713C'
                    },
                    areaStyle: {
                        opacity: 0.2
                    }
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
	
	
    //echart_10 各区地铁相关指标统计
    function echart_10() {
        var myChart = echarts.init(document.getElementById('chart_10'));
        myChart.clear();
        var data1 = [
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
        var data2 = [
        	    {value: 73,name: '福田区'},
        	    {value: 40,name: '罗湖区'},
        	    {value: 5,name: '盐田区'},
        	    {value: 60,name: '南山区'},
        		{value: 32,name: '宝安区'},
        		{value: 40,name: '龙岗区'},
        		{value: 24,name: '龙华区'},
        		{value: 0,name: '坪山区'},
        		{value: 10,name: '光明区'},
        		{value: 0,name: '大鹏新区'},
        	];


        
        option = {
			title:[
				{
					text:"各区地铁里程数饼状图",
					top:25,
					left:250,
					textStyle:{color:"#fff"}
				},
				{
					text:"各区地铁站点数饼状图",
					top:25,
					right:250,
					textStyle:{color:"#fff"}
				},
				{
					text:"各区服务水平与站点里程数对比直方图",
					top:500,
					left:7,
					textStyle:{color:"#fff"}
				},
			],
            backgroundColor: 'transparent',
            // tooltip: [{
            //     trigger: 'item',
            //     formatter: "{a} <br/>{b}: {c} ({d}%)"
            // },
        	tooltip:{
        		trigger: 'axis',
        		axisPointer: {
        		    type: 'cross',
        		    crossStyle: {
        		        color: '#00ffff',	
        		    },
        		},
        	},

            color: ['#df00a7', '#e24b00', '#ffff43', '#25f3e6','#0035f9', '#ff0000', '#65d812', '#8f61de', '#ffaa7f', '#ffaa00','#ff55ff','#ff5500','#00ffff'],
            legend:[
        	{ //图例组件，颜色和名字
                left: '45%',
                top: '50',
                orient: 'vertical',
                itemGap: 12, //图例每项之间的间隔
                itemWidth: 20,
                itemHeight: 20,
        		selected: {
        			'坪山区':false,
        			'大鹏新区':false,
        		},
                icon: 'rect',
                data: ['福田区','罗湖区','盐田区','南山区','宝安区','龙岗区','龙华区','坪山区','光明区','大鹏新区'],
                textStyle: {
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 15,
                },
        		
            },
        	{
        		left: 27,
        	    data: ['里程数', '站点数', '服务水平'],
        		top:550,
        		textStyle:{fontSize:15,color:'#fff',}
        	},
        	],
        	grid: [
        	    {left: '30%', bottom: '7%', width: '60%', height: '38%'},
        	],
        	
        	toolbox: {
        	        feature: {
        	            dataView: {show: true, readOnly: false},
        	            magicType: {show: true, type: ['line', 'bar',]},
        	            restore: {show: true},
        	            saveAsImage: {show: true}
        	        },
        			top:'5',
        			color:'#fff',
        	    },
        	
        	xAxis: [
        	        {
        	            type: 'category',
        	            data: ['福田区','罗湖区','盐田区','南山区','宝安区','龙岗区','龙华区','坪山区','光明区','大鹏新区'],
        	            axisPointer: {
        	                type: 'shadow'
        	            },
        				axisLabel:{textStyle:{fontSize:'15',color:'#fff'}},
        				
        	        }
        	    ],
        	yAxis: [
        	        {
        	            type: 'value',
        	            name: '里程数',
        	            min: 0,
        	            max: 100,
        	            //interval: 20,
        	            axisLabel: {
        	                formatter: '{value}km',
        					textStyle:{fontSize:'15',color:'#fff'},
        					
        	            },
        				nameTextStyle:{color:'#fff'},
        	        },
        	        {
        	            type: 'value',
        	            name: '站点数',
        	            min: 0,
        	            max: 100,
        	            //interval: 20,
        	            axisLabel: {
        	                formatter: '{value}个',
        					textStyle:{fontSize:'15',color:'#fff'},
        	            },
        				nameTextStyle:{color:'#fff'},
        	        }
        	    ],
        	   
            series: [{
        		
                name: '里程数/km',
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['25%', '25%'], //饼图的中心（圆心）坐标
                radius: [60, 100], //饼图的半径
                avoidLabelOverlap: true, ////是否启用防止标签重叠
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                    },
        		
                },
        		labelLine:{
        			length:20,
        			length2:50,
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
                data: data1
            }, {
                name: '',
                type: 'pie',
                clockwise: false,
                silent: true,
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['25%', '25%'], //饼图的中心（圆心）坐标
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
                data: data1
            },
        		{
        	    name: '站点数/个',
        	    type: 'pie',
        	    clockwise: false, //饼图的扇区是否是顺时针排布
        	    minAngle: 20, //最小的扇区角度（0 ~ 360）
        	    center: ['75%', '25%'], //饼图的中心（圆心）坐标
        	    radius: [60, 100], //饼图的半径
        	    avoidLabelOverlap: true, ////是否启用防止标签重叠
        	    itemStyle: { //图形样式
        	        normal: {
        	            borderColor: '#1e2239',
        	            borderWidth: 1.5,
        	        },
        	    },
        				
        	    labelLine:{
        	    	length:20,
        	    	length2:50,
        	    },
        	    label: { //标签的位置 
        	         formatter: "{b}{c}个\n\n",
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
        	    data: data2
        	}, {
        	    name: '',
        	    type: 'pie',
        	    clockwise: false,
        	    silent: true,
        	    minAngle: 20, //最小的扇区角度（0 ~ 360）
        	    center: ['75%', '25%'], //饼图的中心（圆心）坐标
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
        	    data: data2
        	},
        	{
        	    name: '里程数',
        	    type: 'bar',
				color: ['#ffaa7f'],
        	    data: [89.82,34.05,10.88,95.76,75.16,43.42,50.35,0,11.72,0]
        	},
			{
        	    name: '站点数',
        	    type: 'bar',
				color: ['#ffff43'],
        	    data: [73,40,5,60,32,40,24,0,10,0]
        	},
        	{
        	    name: '服务水平',
        	    type: 'line',
				color: ['#aaffff'],
				lineStyle: {width: 3 },
        	    yAxisIndex: 1,
        	    data: [43.49,21.05,4.54,19.87,5.30,5.79,19.08,0,4.13,0]
        	},
        	]
        	
        };
         // 使用刚指定的配置项和数据显示图表。
         myChart.setOption(option);
         window.addEventListener("resize",function(){
             myChart.resize();
         });    
    }
	
	
    //echart_11 各区其他指标统计
    function echart_11() {
        var myChart = echarts.init(document.getElementById('chart_11'));
        myChart.clear();
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
        // var futian=[
        // 	[78.66,163.37,4018.2592,91.8467,6.6918,43.48823442],
        // 	[78.75,103.99,2253.6945,37.8705,6.1459,21.05053672],
        // 	[74.99,24.29,612.7631,5.8531,5.183,4.537847369],
        // 	[187.53,149.36,5018.3646,84.958,8.3615,19.86745236],
        // 	[369.61,325.78,3612.1814,89.8584,3.513,5.295490939],
        // 	[388.22,238.64,4287.8617,67.6725,3.7139,5.80],
        // 	[166.31,44.63,701.6584,16.6592,5.31,19.08],
        // 	[155.44,62.50,341.6572,4.3036,2.60,0],
        // 	[295.38,15.30,341.6572,4.3036.3.70,4.12]
        // 	];
        
        
        
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
                bottom: '7%',
        		left: '10%',
                data: ['福田区','罗湖区','盐田区','南山区','宝安区','龙岗区','龙华区','坪山区','光明区','大鹏新区'],
				
                itemGap: 5,
                textStyle: {
                    color: '#fff',
                    fontSize: 20
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
			tooltip : {
			     //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
			        confine: true,
			        enterable: true, //鼠标是否可以移动到tooltip区域内
			     },
			toolbox: {
				feature: {
					dataView: {show: true, readOnly: false},
					saveAsImage: {show: true}
				},
				top:'5',
				color:'#fff'
			},
            // visualMap: {
            //     show: true,
            //     min: 0,
            //     max: 20,
            //     dimension: 6,
            //     inRange: {
            //         colorLightness: [0.5, 0.8]
            //     }
            // },
            radar: {
        		center:['50%','45%'],
        		radius:'65%',
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
        				fontSize:20
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
        myChart.setOption(option);
        
        // 使用刚指定的配置项和数据显示图表。
        
        // window.addEventListener("resize",function(){
        //     myChart.resize();
        // });
    }
    //散点图（相关关系）
    function echart_12() {
		var myChart = echarts.init(document.getElementById('chart_12'));
		myChart.clear();
		var toolTipData = [
			'福田区',
			'罗湖区',
			'盐田区',
			'南山区',
			'宝安区',
			'龙岗区',
			'龙华区',
			'坪山区',
			'光明区',
			'大鹏新区',
		];
		var dataAll = [
			[
				{value: [33.13, 40182.592], name: '福田区'},
				{value: [16.99, 22536.945], name: '罗湖区'},
				{value: [3.53, 6127.631], name: '盐田区'},
				{value: [34.58, 50183.646], name: '南山区'},
				{value: [21.45, 36121.814], name: '宝安区'},
				{value: [25.86, 42878.617], name: '龙岗区'},
				{value: [15.4, 24018.151], name: '龙华区'},
				{value: [0, 7016.584], name: '坪山区'},
				{value: [6.52, 9205.9], name: '光明区'},
				{value: [0, 3416.572], name: '大鹏新区'},

			],
			[
				{value: [33.13, 66918], name: '福田区'},
				{value: [16.99, 61459], name: '罗湖区'},
				{value: [3.53, 51830], name: '盐田区'},
				{value: [34.58, 83615], name: '南山区'},
				{value: [21.45, 35130], name: '宝安区'},
				{value: [25.86, 37139], name: '龙岗区'},
				{value: [15.4, 53142], name: '龙华区'},
				{value: [0, 26053], name: '坪山区'},
				{value: [6.52, 37066], name: '光明区'},
				{value: [0, 26303], name: '大鹏新区'},

			],
			[
				{value: [33.13, 20769], name: '福田区'},
				{value: [16.99, 13205], name: '罗湖区'},
				{value: [3.53, 3239], name: '盐田区'},
				{value: [34.58, 7965], name: '南山区'},
				{value: [21.45, 8214], name: '宝安区'},
				{value: [25.86, 6147], name: '龙岗区'},
				{value: [15.4, 9527], name: '龙华区'},
				{value: [0, 2684], name: '坪山区'},
				{value: [6.52, 4021], name: '光明区'},
				{value: [0, 518], name: '大鹏新区'},

			],
			[
				//土地
				// {value:[33.13,78.66],name: '福田区'},
				// {value:[16.99,78.75],name: '罗湖区'},
				// {value:[3.53,74.99],  name: '盐田区'},
				// {value:[34.58,187.53], name: '南山区'},
				// {value:[21.45,396.61], name: '宝安区'},
				// {value:[25.86,388.22], name: '龙岗区'},
				// {value:[15.4,175.58],  name: '龙华区'},
				// {value:[0,166.31],     name: '坪山区'},
				// {value:[6.52,155.44],  name: '光明区'},
				// {value:[0,295.38],      name: '大鹏新区'},

				//公共预算收入
				{value: [33.13, 1810.367], name: '福田区'},
				{value: [16.99, 999.621], name: '罗湖区'},
				{value: [3.53, 296.545], name: '盐田区'},
				{value: [34.58, 2682.16], name: '南山区'},
				{value: [21.45, 2600.271], name: '宝安区'},
				{value: [25.86, 2546.531], name: '龙岗区'},
				{value: [15.4, 1333.745], name: '龙华区'},
				{value: [0, 434.494], name: '坪山区'},
				{value: [6.52, 526.702], name: '光明区'},
				{value: [0, 252.645], name: '大鹏新区'},

			]
		];

		var markLineOpt = {
			animation: true,
			label: {
				formatter: 'y = 0.5 * x + 3',
				align: 'right'
			},
			lineStyle: {
				type: 'solid'
			},
			tooltip: {
				formatter: 'y = 0.5 * x + 3'
			},
			data: [[{
				coord: [0, 3],
				symbol: 'none'
			}, {
				coord: [20, 13],
				symbol: 'none'
			}]]
		};

		option = {
			title: {
				show: false,
				left: 'center',
				top: 0
			},
			grid: [
				{left: '7%', top: '7%', width: '38%', height: '38%'},
				{right: '7%', top: '7%', width: '38%', height: '38%'},
				{left: '7%', bottom: '7%', width: '38%', height: '38%'},
				{right: '7%', bottom: '7%', width: '38%', height: '38%'}
			],
			tooltip: {
				axisPointer: {
					type: 'cross', crossStyle: {
						color: '#00ffff',
					},
				},

				formatter: '{b}: ( {c} )'
			},
			toolbox: {
				feature: {
					dataView: {show: true, readOnly: false},
					saveAsImage: {show: true}
				},
				top: '5',
				color: '#fff'
			},
			xAxis: [
				{
					axisLabel: {
						textStyle: {color: '#fff'},
					},
					nameTextStyle: {color: '#fff'},
					//name:'服务面积',
					gridIndex: 0, min: 0, max: 40,
					splitLine: {
						show: false,
					},
					axisLine: {
						lineStyle: {
							color: '#a7a7a7',
						}
					}

				},
				{
					axisLabel: {
						textStyle: {color: '#fff'},
					},
					nameTextStyle: {color: '#fff'},
					name: '服务面积',
					gridIndex: 1, min: 0, max: 40,
					splitLine: {
						show: false,
					},
					axisLine: {
						lineStyle: {
							color: '#a7a7a7',
						}
					}
				},
				{
					axisLabel: {
						textStyle: {color: '#fff'},
					},
					nameTextStyle: {color: '#fff'},
					//name:'服务面积',
					gridIndex: 2, min: 0, max: 40,
					splitLine: {
						show: false,
					},
					axisLine: {
						lineStyle: {
							color: '#a7a7a7',
						}
					}
				},
				{
					axisLabel: {
						textStyle: {color: '#fff'},
					},
					nameTextStyle: {color: '#fff'},
					name: '服务面积',
					gridIndex: 3, min: 0, max: 40,
					splitLine: {
						show: false,
					},
					axisLine: {
						lineStyle: {
							color: '#a7a7a7',
						}
					}
				},

			],
			yAxis: [
				{
					axisLabel: {
						textStyle: {color: '#fff'},
					},
					splitLine: {
						show: false,
					},
					axisLine: {
						lineStyle: {
							color: '#a7a7a7',
						}
					},
					nameTextStyle: {color: '#fff'},
					name: 'GDP/千万元',
					gridIndex: 0, min: 3500, max: 60000
				},
				{
					axisLabel: {
						textStyle: {color: '#fff'},
					},
					splitLine: {
						show: false,
					},
					axisLine: {
						lineStyle: {
							color: '#a7a7a7',
						}
					},
					nameTextStyle: {color: '#fff'},
					name: '房均价(元/平方米)',
					gridIndex: 1, min: 25000, max: 90000
				},
				{
					axisLabel: {
						textStyle: {color: '#fff'},
					},
					splitLine: {
						show: false,
					},
					axisLine: {
						lineStyle: {
							color: '#a7a7a7',
						}
					},
					nameTextStyle: {color: '#fff'},
					name: '人口密度(人/平方公里)',
					gridIndex: 2, min: 500, max: 25000
				},
				{
					axisLabel: {
						textStyle: {color: '#fff'},
					},
					splitLine: {
						show: false,
					},
					axisLine: {
						lineStyle: {
							color: '#a7a7a7',
						}
					},
					nameTextStyle: {color: '#fff'},
					name: '公共预算收入/千万元',//'土地面积/平方公里',
					gridIndex: 3, min: 250, max: 3000
				},


			],
			series: [
				{
					name: 'I',
					type: 'scatter',
					xAxisIndex: 0,
					yAxisIndex: 0,
					data: dataAll[0],
					color: '#df00a7',

				},
				{
					name: 'II',
					type: 'scatter',
					xAxisIndex: 1,
					yAxisIndex: 1,
					data: dataAll[1],
					color: '#e24b00',
				},
				{
					name: 'III',
					type: 'scatter',
					xAxisIndex: 2,
					yAxisIndex: 2,
					data: dataAll[2],
					color: '#ffaa00',

				},
				{
					name: 'IV',
					type: 'scatter',
					xAxisIndex: 3,
					yAxisIndex: 3,
					data: dataAll[3],
					color: '#65d812',

				}
			]
		};
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		// window.addEventListener("resize",function(){
		//     myChart.resize();
		// });
	}
	
	
    //操作按钮
    $('.chart_map').click(function () {
		$('.center_text').css('display', 'none');
        $('.t_cos0').css('display', 'block');
		var new_element=document.createElement("script");
		new_element.setAttribute("type","text/javascript");
		new_element.setAttribute("src","./js/shenzhen_metro_map.js");
		document.body.appendChild(new_element);
        
        // echart_map();
    });
    $('.t_btn1').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos1').css('display', 'block');
        echart_1();
    });
    $('.t_btn2').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos2').css('display', 'block');
        echart_2();
    });
    $('.t_btn3').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos3').css('display', 'block');
        echart_3();
    });
    $('.t_btn4').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos4').css('display', 'block');
        echart_4();
    });
    $('.t_btn5').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos5').css('display', 'block');
        echart_5();
    });
    $('.t_btn6').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos6').css('display', 'block');
        echart_6();
    });
    $('.t_btn7').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos7').css('display', 'block');
        echart_7();
    });
    $('.t_btn8').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos8').css('display', 'block');
        echart_8();
    });
    $('.t_btn9').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos9').css('display', 'block');
        echart_9();
    });
    $('.t_btn10').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos10').css('display', 'block');
        echart_10();
    });
    $('.t_btn11').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos11').css('display', 'block');
        echart_11();
    });
    $('.t_btn12').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos12').css('display', 'block');
        echart_12();
    });
    // $('.t_btn13').click(function(){
    //     $('.center_text').css('display', 'none');
    //     $('.t_cos13').css('display', 'block');
    //     echart_13();
    // });
    $('.t_btn14').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos14').css('display', 'block');
    });
    //获取地址栏参数
    $(function(){
        function getUrlParms(name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
                if(r!=null)
                return unescape(r[2]);
                return null;
            }
            var id = getUrlParms("id");  
            if(id == 2){
                $('.center_text').css('display', 'none');
                $('.t_cos2').css('display', 'block');
                echart_2();
            }
            if(id == 3){
                $('.center_text').css('display', 'none');
                $('.t_cos3').css('display', 'block');
                echart_3();
            }
            if(id == 4){
                $('.center_text').css('display', 'none');
                $('.t_cos4').css('display', 'block');
                echart_4();
            }
            if(id == 5){
                $('.center_text').css('display', 'none');
                $('.t_cos5').css('display', 'block');
                echart_5();
            }
            if(id == 6){
                $('.center_text').css('display', 'none');
                $('.t_cos6').css('display', 'block');
                echart_6();
            }
            if(id == 7){
                $('.center_text').css('display', 'none');
                $('.t_cos7').css('display', 'block');
                echart_7();
            }
            if(id == 8){
                $('.center_text').css('display', 'none');
                $('.t_cos8').css('display', 'block');
                echart_8();
            }
            if(id == 9){
                $('.center_text').css('display', 'none');
                $('.t_cos9').css('display', 'block');
                echart_9();
            }
    });
});

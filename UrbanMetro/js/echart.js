

$(function () {
    var year = 2020;

    echart_1(year);

    echart_3(year);
    echart_4(0);

    echart_map('2020');


    //echart_1
    // 城市地铁里程数排名柱状图
    function echart_1(year) {
        var myChart = echarts.init(document.getElementById('chart_1'));
        var city_data =  $.ajax({
            url: "./data/city_data.json",
            type: "GET",
            dataType: "json",
            async: false,
            success: function(data){
            }
        });
        city_data = $.parseJSON(city_data.responseText)

        function sortJ(a,b){
            return b.mileages - a.mileages;
        };

        var city_name = [];
        var mileages = [];
        var lines = [];
        var stations = [];
        var regions = [];

        var data = city_data[year.toString()].sort(sortJ).slice(0, 10);

        data.forEach(function (v) {
            city_name.push(v.name);
            mileages.push(v.mileages);
            lines.push(v.lines);
            stations.push(v.stations);
            regions.push(v.region);
        })

        var name_color = [];

        for (var i = 0;i < 10; i++)
        {
            if (regions[i] == "1")
                name_color.push('#1478fd')
            else if (regions[i] == "2")
                name_color.push('#f6072a')
            else if (regions[i] == "3")
                name_color.push('#25f3e6')
            else if (regions[i] == "4")
                name_color.push('#4caed3')
            else if (regions[i] == "5")
                name_color.push('#cd7f32')
            else if (regions[i] == "6")
                name_color.push('#ffaaff')
            else if (regions[i] == "7")
                name_color.push('#55ff00')
            else if (regions[i] == "8")
                name_color.push('#eeff05')
        }

        var option = {
            tooltip: {
                show: true,
                trigger: 'axis',
                formatter: '{b}<br/>{a}: {c}',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                textStyle: {color: []},
                data: ['里程数/公里', '线路数/条','站点数/个'],
                top: 25
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisLabel:{textStyle:{color:'#fff',fontSize:10} },
            },
            yAxis: {
                type: 'category',
                inverse: true,
                axisLabel:{
                    textStyle:{
                        color: function(param, index) {
                            return name_color[index];
                        },
                        fontSize:15
                    }
                 },
                data: city_name
            },
            series: [
                {
                    name: '里程数/公里',
                    type: 'bar',
                    color:'#8b27fd',
                    data: mileages
                },
                {
                    name: '线路数/条',
                    type: 'bar',
                    color:'#e800f9',
                    data: lines
                },
                {
                    name: '站点数/个',
                    type: 'bar',
                    color:'#f1661d',
                    data: stations
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    // echart_map
    // 全国地铁地图可视化
    function echart_map(year) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_map'));

        var name_title = "投票统计";
        var subname = '';
        var nameColor = " rgb(55, 75, 113)";
        var name_fontFamily = '楷体';
        var name_fontSize = 52;
        var mapName = 'china';
        var data = [];
        var geoCoordMap = {};
        var toolTipData = [];
        var imgdata = [];
        var miles_2020 = [699,233,705,510,100,157,339,329,411,378,117,302,32,151,166,139,206,31,146,161,96,89,176,60,53,37,108,89,61,35,71,27,53,47,25,34,21,49,136,9,230,53];
        var line_2020 = [23,6,17,14,5,4,9,10,11,10,4,7,1,5,4,5,5,2,5,6,3,3,4,2,2,1,4,3,3,1,2,1,1,2,1,1,1,2,7,1,11,3];
        var miles_2015 = [527,136,548,260,51,150,95,202,178,225,55,63,14,52,53,60,76,27,25,21,21,56,24,28,139,214,42];
        var line_2015 = [18,4,14,10,2,5,3,5,5,6,2,2,1,2,2,3,2,1,1,1,1,2,1,1,9,9,2];
        var miles_2010 = [331,71,413,221,32,63,28,18,63,81,27,18,14,100,182,41];
        var line_2010 = [14,2,12,8,1,1,1,1,4,2,1,1,1,9,10,2];
        var miles_2005 = [122,45,93,51,20,48,11,17,21,21,70,219];
        var line_2005 = [3,1,5,3,1,1,1,1,2,1,5,9];
        var miles_2000 = [53,1,37,18,32,190];
        var line_2000 = [2,1,3,1,5,5];
        var miles_1990 = [43,7,127];
        var line_1990 = [2,1,4];

        /*获取地图数据*/
        myChart.showLoading();
        var mapFeatures = echarts.getMap(year).geoJson.features;
        myChart.hideLoading();
        var line_data;
        var miles_data;
        if (year == 2020)
        {
            line_data = line_2020;
            miles_data = miles_2020;
        }
        else if(year == 2015)
        {
            line_data = line_2015;
            miles_data = miles_2015;
        }
        else if(year == 2010)
        {
            line_data = line_2010;
            miles_data = miles_2010;
        }
        else if(year == 2005)
        {
            line_data = line_2005;
            miles_data = miles_2005;
        }
        else if(year == 2000)
        {
            line_data = line_2000;
            miles_data = miles_2000;
        }
        else if(year == 1990)
        {
            line_data = line_1990;
            miles_data = miles_1990;
        }
        var i = 0;
        var tool_data =  $.ajax({
            url: "./data/city_data.json",
            type: "GET",
            dataType: "json",
            async: false,
            success: function(data){
            }
        });
        tool_data = $.parseJSON(tool_data.responseText)
        mapFeatures.forEach(function(v) {
            var name = v.properties.cityname;
            geoCoordMap[name] = v.geometry.coordinates;
            data.push({
                name: name,
                value: miles_data[i]
            });
            toolTipData.push({
                name: name,
                value: [{
                    name: "开通线路（条）",
                    value: tool_data[year.toString()][i].lines
                },
                    {
                        name: "运营里程（公里）",
                        value: tool_data[year.toString()][i].mileages
                    },
                    {
                        name: "车站数量（个）",
                        value: tool_data[year.toString()][i].stations
                    }
                ]
            });
            i += 1;
        });

        mapFeatures.forEach(function(v) {
            var name = v.properties.cityname;
            geoCoordMap[name] = v.geometry.coordinates;
            imgdata.push({
                name: name,
                value: geoCoordMap[name]
            })

        });

        var max = 705, min = 1;
        var maxSize4Pin = 60,
            minSize4Pin = 12;

        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                    });
                }
            }
            return res;
        };
        option = {
            title: {
                show:false,
                text: name_title,
                subtext: subname,
                x: 'center',
                textStyle: {
                    color: nameColor,
                    fontFamily: name_fontFamily,
                    fontSize: name_fontSize
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    if (typeof(params.value)[2] == "undefined") {
                        var toolTiphtml = ''
                        for(var i = 0;i<toolTipData.length;i++){
                            if(params.name==toolTipData[i].name){
                                toolTiphtml += toolTipData[i].name+':<br>'
                                for(var j = 0;j<toolTipData[i].value.length;j++){
                                    toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                                }
                            }
                        }
                        return toolTiphtml;
                    } else {
                        var toolTiphtml = ''
                        for(var i = 0;i<toolTipData.length;i++){
                            if(params.name==toolTipData[i].name){
                                toolTiphtml += toolTipData[i].name+':<br>'
                                for(var j = 0;j<toolTipData[i].value.length;j++){
                                    toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                                }
                            }
                        }
                        return toolTiphtml;
                    }
                }
            },
            geo: {
                show: true,
                map: mapName,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: 'rgba(77,19,209,0.59)',
                        borderColor: '#e0dddd',
                    },
                    emphasis: {
                        areaColor: '#2B91B7',
                    }
                }
            },
            series: [{
                name: '散点',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: 3,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ffffff'
                    }
                }
            },
                {
                    type: 'map',
                    map: mapName,
                    zoom: 1.5,
                    geoIndex: 0,
                    aspectScale: 0.9, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#0227ad',
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    animation: false,
                    data: data
                },
                {
                    name: '点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'image://./img/sub2.png',
                    symbolSize: function(val) {
                        var a = (maxSize4Pin - minSize4Pin) / (max - min);
                        var b = minSize4Pin - a * min;
                        b = maxSize4Pin - a * max;
                        return a * val[2] + b;
                    },
                    label: {
                        normal: {
                            show: false,
                            textStyle: {
                                color: '#fff',
                                fontSize: 9,
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F62157',
                        }
                    },
                    zlevel: 6,
                    data: convertData(data),
                },
            ]
        };
        myChart.setOption(option);

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
        myChart.on('click', function (params) {
            console.log(params.name);
            if (params.name == '深圳')
            {
                window.location.href = "ShenZhen.html"
            }
         });

    }

    //echart_3
    // 区域城市地铁饼状图
    function echart_3(year) {
        var myChart = echarts.init(document.getElementById('chart_3'));
        //2020

        var data = []

        if (year == 2020)
        {
            data = [
                {value:4, name:'华北'},
                {value:3, name: '华中'},
                {value:15, name: '华东'},
                {value:5, name: '华南'},
                {value:4, name: '东北'},
                {value:3, name: '西北'},
                {value:3, name: '西南'},
                {value:6, name: '港澳台'}
            ];
        }
        else if (year == 2015)
        {
            data= [
                {value:2, name:'华北'},
                {value:3, name: '华中'},
                {value:8, name: '华东'},
                {value:3, name: '华南'},
                {value:4, name: '东北'},
                {value:1, name: '西北'},
                {value:3, name: '西南'},
                {value:3, name: '港澳台'}
            ];
        }
        else if (year == 2010)
        {
            data=[
                {value:2, name:'华北'},
                {value:1, name: '华中'},
                {value:2, name: '华东'},
                {value:3, name: '华南'},
                {value:3, name: '东北'},
                {value:'', name: '西北'},
                {value:2, name: '西南'},
                {value:3, name: '港澳台'}
            ];
        }
        else if (year == 2005)
        {
            data=[
                {value:2, name:'华北'},
                {value:1, name: '华中'},
                {value:2, name: '华东'},
                {value:2, name: '华南'},
                {value:2, name: '东北'},
                {value:'', name: '西北'},
                {value:1, name: '西南'},
                {value:2, name: '港澳台'}
            ];
        }
        else if (year == 2000)
        {
            data=[
                {value:2, name:'华北'},
                {value:'', name: '华中'},
                {value:1, name: '华东'},
                {value:1, name: '华南'},
                {value:'', name: '东北'},
                {value:'', name: '西北'},
                {value:'', name: '西南'},
                {value:2, name: '港澳台'}
            ];
        }
        else if (year == 1990)
        {
            data=[
                {value:2, name:'华北'},
                {value:'', name: '华中'},
                {value:'', name: '华东'},
                {value:'', name: '华南'},
                {value:'', name: '东北'},
                {value:'', name: '西北'},
                {value:'', name: '西南'},
                {value:1, name: '港澳台'}
            ];
        }


        var option = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                formatter: " {b} ({d}%) <br/> {a} : {c} 个"
            },
            color: ['#1478fd', '#cd7f32', '#f6072a', '#25f3e6','#4caed3','#55ff00','#ffaaff','#eeff05'],
            legend: { //图例组件，颜色和名字
                left: '65%',
                top: '50',
                orient: 'vertical',
                itemGap: 12, //图例每项之间的间隔
                itemWidth: 16,
                itemHeight: 12,

                icon: 'rect',
                data: ['华北','华中','华东','华南','东北','西北','西南','港澳台'],
                textStyle: {
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },

            series: [{
                name: '开通地铁的城市',
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

                label: {
                    normal: {
                        show: false,
                        position: 'inside',
                        formatter: "{d}%",
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
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
                minAngle: 0, //最小的扇区角度（0 ~ 360）
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

    // 地铁线路区域分布
    function echart_4(year) {

        var myChart = echarts.init(document.getElementById('chart_4'));

        var province_data =  $.ajax({
            url: "./data/province.json",
            type: "GET",
            dataType: "json",
            async: false,
            success: function(data){
            }
        });
        province_data = $.parseJSON(province_data.responseText)

        var data = [];
        var pd = Object.values(province_data[year])[1];

        pd.forEach(function(v) {
            var province = [];
            province = v.province;
            var province_data = [];
            province.forEach(function (v) {
                var city = [];
                if (v.city != undefined)
                {
                    city = v.city;
                    province_data.push({
                        name: v.name,
                        value: v.value,
                        children: city
                    });
                }
                else
                {
                    province_data.push({
                        name: v.name,
                        value: v.value,
                    });
                }
            });

            var region_color;
            if (v.name == "华北")
                region_color = '#1478fd';
            else if (v.name == "华东")
                region_color = '#f6072a';
            else if (v.name == "华南")
                region_color = '#25f3e6';
            else if (v.name == "东北")
                region_color = '#4caed3';
            else if (v.name == "西南")
                region_color = '#ffaaff';
            else if (v.name == "西北")
                region_color = '#55ff00';
            else if (v.name == "港澳台")
                region_color = '#eeff05';
            else if (v.name == "华中")
                region_color = '#cd7f32';
            data.push({
                name: v.name,
                value: v.value,
                itemStyle: {
                    color: region_color
                },
                children: province_data
            });

        })

        //option = null;
        option = {
            tooltip: {
                formatter: function (info) {
                    var value = info.value;
                    var treePathInfo = info.treePathInfo;
                    var treePath = [];

                    for (var i = 1; i < treePathInfo.length; i++) {
                        treePath.push(treePathInfo[i].name);
                    }

                    return [
                        '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
                        'Disk Usage: ' + formatUtil.addCommas(value) + ' KB',
                    ].join('');
                }
            },
            series: [{
                type: 'treemap',
                data: data,
                leafDepth: 2,
                levels: [
                    {
                        itemStyle: {
                            borderColor: '#555',
                            borderWidth: 4,
                            gapWidth: 4
                        }
                    },
                    {
                        colorSaturation: [0.3, 0.4],
                        itemStyle: {
                            borderColorSaturation: 0.7,
                            gapWidth: 2,
                            borderWidth: 2
                        }
                    },
                    {
                        itemStyle: {
                            borderColorSaturation: 0.6,
                            gapWidth: 1
                        }
                    }
                ]
            }]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }

        window.addEventListener("resize",function(){
            myChart.resize();
        });
        
    }

    // 时间轴交互及全页面的联动
    var info =  $.ajax({
        url: "./data/info.json",
        type: "GET",
        dataType: "json",
        async: false,
        success: function(data){
        }
    });
    info = $.parseJSON(info.responseText)

    var $li = $('.slide_items li')
    var $li_width = $li.width()
    var $ul = $('.slide_items')

    var $ul_dom = $('.slide_items')

    var go = 0;

    var ul_width = 0
    for(var i = 0; i< $li.length; i++ ){
        ul_width +=$li.eq(i).width()
    }
    $ul.width(ul_width)

    var flag = 0
    $('.button.next').on('click',function(e){
        go_next()
    })

    $('.button.prev').on('click',function(){
        go_prev()
    })
    $('.slide_items li').on('click',function(e){
        var index = $(this).index()
        flag = index
        go_next_item(index)
        return false;
    })
    var go_next_length =0


    function go_next(){

        if(flag > $li.length-2) {
            return false
        }
        flag = flag+1  //下标的标记
        go = go + $li_width
        go_next_length =  -go
        move() //移动函数
        // // 活跃的年份
        if(year == 2020) {
            year = 2015;
            echart_map(year);
            echart_1(year);
            echart_3(year);
            echart_4(1);
            console.log(year);
        }
        else if(year == 2015) {
            year = 2010;
            echart_map(year);
            echart_1(year);
            echart_3(year);
            echart_4(2);
            console.log(year);
        }
        else if(year == 2010) {
            year = 2005;
            echart_map(year);
            echart_1(year);
            echart_3(year);
            echart_4(3);
            console.log(year);
        }
        else if(year == 2005) {
            year = 2000;
            echart_map(year);
            echart_1(year);
            echart_3(year);
            echart_4(4);
            console.log(year);
        }
        else if(year == 2000) {
            year = 1990;
            echart_map(year);
            echart_1(year);
            echart_3(year);
            echart_4(5);
            console.log(year);
        }
        onYear(flag)
        title_switch(flag)
    }
    function go_next_item(index) {
        go = $li_width*index
        go_next_length =  -go
        move()
        if (index == 0)
        {
            year = 2020;
            echart_map(year);
            echart_1(year);
            echart_3(year);
            echart_4(0);
            console.log(year);
        }
        else if (index == 1)
        {
            year = 2015;
            echart_map(year);
            echart_1(year);
            echart_3(year);
            echart_4(1);
            console.log(year);
        }
        else if (index == 2)
        {
            year = 2010;
            echart_map(year);
            echart_1(year);
            echart_3(year);
            echart_4(2);
            console.log(year);
        }
        else if (index == 3)
        {
            year = 2005;
            echart_map(year);
            echart_1(year);
            echart_3(year);
            echart_4(3);
            console.log(year);
        }
        else if (index == 4)
        {
            year = 2000;
            echart_map(year);
            echart_1(year);
            echart_3(year);
            echart_4(4);
            console.log(year);
        }
        else if (index == 5)
        {
            year = 1990;
            echart_map(year);
            echart_1(year);
            echart_3(year);
            echart_4(5);
            console.log(year);
        }
        onYear(index)
        title_switch(index)

    }
    //  向右动画函数向左函数动画
    function go_prev(){
        if(flag <= 0) {
            return false
        }
        flag = flag-1   //下标的标记
        go = go - $li_width
        go_next_length = -go
        move() //移动函数
        if(year == 2015) {
            year = 2020;
            echart_map(year);
            echart_1(year);
            echart_3(year);
            echart_4(0);
            console.log(year);
        }
        else if(year == 2010) {
            year = 2015;
            echart_map(year);
            echart_1(year);
            echart_3(year);
            echart_4(1);
            console.log(year);
        }
        else if(year == 2005) {
            year = 2010;
            echart_map(year);
            echart_1(year);
            echart_3(year);
            echart_4(2);
            console.log(year);
        }
        else if(year == 2000) {
            year = 2005;
            echart_map(year);
            echart_1(year);
            echart_3(year);
            echart_4(3);
            console.log(year);
        }
        else if(year == 1990) {
            year = 2000;
            echart_map(year);
            echart_1(year);
            echart_3(year);
            echart_4(4);
            console.log(year);
        }
        onYear(flag);
        title_switch(flag);
    }
// 移动函数
    function move() {
        $ul_dom.stop().animate({
            'left' : go_next_length
        },800,'easeOutCirc')
    }
// 活跃的年份
    function onYear(index){
        var index
        $('.slide_items li').eq(index).addClass('on').siblings().removeClass('on')
    }

    function  title_switch(index) {
        if (index == 0)
            $('.title_year').text('2020年');
        else if (index == 1)
            $('.title_year').text('2015年');
        else if (index == 2)
            $('.title_year').text('2010年');
        else if (index == 3)
            $('.title_year').text('2005年');
        else if (index == 4)
            $('.title_year').text('2000年');
        else if (index == 5)
            $('.title_year').text('1990年');
        $('#cities').text(info[index].cities);
        $('#miles').text(info[index].mileages);
        $('#lines').text(info[index].lines);
        $('#avg_miles').text(parseFloat(info[index].mileages/info[index].cities).toFixed(2));
        $('#avg_lines').text(parseFloat(info[index].lines/info[index].cities).toFixed(2));
        $('#miles_city').text(info[index].most_miles);
        $('#lines_city').text(info[index].most_lines);
        var new_mmpic = "img/" + info[index].most_miles + ".png";
        var new_mlpic = "img/" + info[index].most_lines + ".png";
        $('#mm_pic').attr("src", new_mmpic);
        $('#ml_pic').attr("src", new_mlpic);
    }


})

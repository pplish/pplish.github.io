/**
 * @author wangjunping
 */

$(function(){
	Highcharts.setOptions({
		lang: {
			"rangeSelectorZoom": "",
			"rangeSelectorFrom": "",
			"rangeSelectorTo": "-"
		}
	});
	$.getJSON("http://www.hcharts.cn/datas/jsonp.php?filename=aapl-c.json&callback=?", function(data){
		$("#net_value").highcharts({
	        title: {
	            text: "每日净值走势"
	        },
	        xAxis: {
	        	crosshair: true,
	            gridLineWidth: 1,
	            gridLineColor: "#cccccc",
	            gridLineDashStyle: "Dash",
	            type: "datetime",
	            dateTimeLabelFormats: {
                    day: "%m-%d",
                    week: "%m-%d",
                    month: "%Y-%m",
                    year: "%Y"
	            }
	        },
	        yAxis: {
	            title: {
	                text: "单位 (元)"
	            }
	        },
	        tooltip: {
	            valueSuffix: " 元",
	            shared: true,
	            dateTimeLabelFormats: {
	            	day: "%Y/%m/%d"
	            }
	        },
	        navigator : {enabled: true, height: 20, margin: 5},
	        exporting: {enabled: false},
	        credits: {enabled: false},
	        rangeSelector: {
	        	enabled: true,
	        	buttonTheme: {display: "none"},
	        	inputDateFormat: "%Y-%m-%d",
	        	inputPosition: {y: 25},
	        	height: 0
	        },
	        legend: {
	            layout: "horizontal",
	            align: "left",
	            verticalAlign: "top",
	            borderWidth: 0,
	            y: 19
	        },
	        series: [{
	        	type: "line",
	            name: "净值",
	            data: data
	        }, {
	        	type: "line",
	            name: "基准净值",
	            data: [[1147651200000, 197.79],
					   [1147737600000, 194.98],
					   [1147824000000, 195.26],
					   [1147910400000, 193.18],
					   [1147996800000, 194.51],
					   [1148256000000, 193.38],
					   [1148342400000, 193.15],
					   [1148428800000, 193.34],
					   [1148515200000, 194.33],
					   [1148601600000, 193.55],
					   [1148947200000, 191.22],
					   [1149033600000, 199.77]]
	        }]
	    });
	});
    
    $("#year_yield_rate").highcharts({
        chart: {
            type: "column"
        },
        title: {
            text: "年收益率分布"
        },
        xAxis: {
            crosshair: true,
            gridLineWidth: 1,
            gridLineColor: "#cccccc",
            gridLineDashStyle: "Dash",
        },
        yAxis: {
            // min: 0,
            title: {
                text: "百分比 （%）"
            }
        },
        tooltip: {
            // headerFormat: '<span style="font-size:10px">{point.key} 年</span><table>',
            // pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                // '<td style="padding:0"><b>{point.y:.2f} %</b></td></tr>',
            // footerFormat: '</table>',
            shared: true,
			// useHTML: true,
        },
        navigator : {enabled: true, height: 20, margin: 5},
        exporting: {enabled: false},
        credits: {enabled: false},
        legend: {
            layout: "horizontal",
            align: "left",
            verticalAlign: "top",
            borderWidth: 0,
            y: 19
		},
        series: [{
            name: "年收益率",
            tooltip: {valueSuffix: " %"},
            data: [[2006, 17.79],
				   [2007, 14.98],
				   [2008, -15.26],
				   [2009, 13.18],
				   [2010, 14.51],
				   [2011, 13.38],
				   [2012, 13.15],
				   [2013, 13.34],
				   [2014, -14.33],
				   [2015, 13.55],
				   [2016, 11.22],
				   [2017, 19.77]]

        }, {
            name: "基准年收益率",
            tooltip: {valueSuffix: " %"},
            data: [[2006, 7.79],
				   [2007, 4.98],
				   [2008, 5.26],
				   [2009, 3.18],
				   [2010, 4.51],
				   [2011, 3.38],
				   [2012, 3.15],
				   [2013, 3.34],
				   [2014, -4.33],
				   [2015, 3.55],
				   [2016, -1.22],
				   [2017, 9.77]]
        }]
    });
});
				
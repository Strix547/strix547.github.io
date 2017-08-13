/**
 * Created  on 27.07.2017.
 * by Sergey Burmak
 *Burmak.pp.ua
 */

var UPDATE_INTERVAL = '5000';
var CHART_INTERVAL_UPDATE = '60000';
var CHART_URL1 = 'data/btcusd.json';
var CHART_URL2 = 'chart2.json';
var TABLE_URL = 'deals.json';

var FILTER_GET ='data/'; // Нвазния гет переменной для фильтров чата

var currentSymbol = 'BTCUSD';

setLeftUpdate('BTCUSD');
setLeftUpdate('ETHUSD');
setLeftUpdate('EOSUSD');
setLeftUpdate('LTCUSD');
setLeftUpdate('ETCUSD');
setLeftUpdate('XMRUSD');
setLeftUpdate('XRPUSD');

// TODO:  НЕ трогать дальше!

var CHART1 = '';
var CHART1__FILTER = '';

var CHART2 = '';
var CHART2__FILTER = '';
var CHART3__FILTER = '';


initChart1();
initChart2();
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    initTable();
});


function setChart1(s) {
    CHART_URL1 = 'data/' + s + '.json';
	currentSymbol = s;
   initChart1();
   // CHART2__FILTER = '?'+FILTER_GET+'=' + s;
   // updateChart2();

    initTable();
}
function setLeftUpdate(sym) {
    $.get('get.php?id=' + sym, function (res) {
        var json_res = JSON.parse(res);
		
        $('#' + sym).html('<td><a style="color:#fff;" onclick="setChart1(' + "'" + sym + "'" + ')" href="#">' + sym + '</a></td><td>' + json_res.last_price + '</td><td>' + json_res.volume + '</td>');
    });

    var t2 = setInterval(function () {
        $.get('get.php?id=' + sym, function (res) {
            var json_res = JSON.parse(res);
			
            $('#' + sym).html('<td><a style="color:#fff;" onclick="setChart1(' + "'" + sym + "'" + ')" href="#">' + sym + '</a></td><td>' + json_res.last_price + '</td><td>' + json_res.volume + '</td>');

          //  blick(sym);


        });
    }, UPDATE_INTERVAL);
}
function blick(id) {
    $("#" + id).css("color", function () {
        this.switch = !this.switch
        return this.switch ? "red" : ""
    });
    setTimeout(function () {
        $("#" + id).css("color", function () {
            this.switch = !this.switch
            return this.switch ? "red" : ""
        });
    }, 500)

}
function initChart1() {
    $.getJSON(CHART_URL1 + CHART1__FILTER, function (data) {

        // split the data set into ohlc and volume
        var ohlc = [],
            volume = [],
            dataLength = data.length,
            i = 0;

        for (i; i < dataLength; i += 1) {
            ohlc.push([
                Date.parse(data[i]['Time']), // the date
                data[i]['OpenPrice'], // open
                data[i]['HighPrice'], // high
                data[i]['LowPrice'], // low
                data[i]['ClosePrice'] // close
            ]);

            volume.push([
                Date.parse(data[i]['Time']), // the date
                data[i]['Volume'] // the volume
            ]);
        }


        // create the chart
        CHART1 = Highcharts.stockChart('container', {
            rangeSelector: {
                selected: 1
            },

            title: {
                text: currentSymbol + ' Historical 5m'
            },

            yAxis: [{
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'OHLC'
                },
                height: '60%',
                lineWidth: 2
            }, {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'Volume'
                },
                top: '65%',
                height: '35%',
                offset: 0,
                lineWidth: 2
            }],

            tooltip: {
                split: true
            },

            series: [{
                type: 'candlestick',
                name: currentSymbol,
                data: ohlc,
                dataGrouping: {
                    enabled: false
                }
            }, {
                type: 'column',
                name: 'Volume',
                data: volume,
                yAxis: 1,
                dataGrouping: {
                    enabled: false
                }
            }]
        });


        setInterval(function () {
            updateChart1();
        }, CHART_INTERVAL_UPDATE);
    });
}
function updateChart1() {
    $.getJSON(CHART_URL1 + CHART1__FILTER, function (data) {
        // split the data set into ohlc and volume
        var ohlc = [],
            volume = [],
            dataLength = data.length,
            i = 0;

        for (i; i < dataLength; i += 1) {
            ohlc.push([
                Date.parse(data[i]['Time']), // the date
                data[i]['OpenPrice'], // open
                data[i]['HighPrice'], // high
                data[i]['LowPrice'], // low
                data[i]['ClosePrice'] // close
            ]);

            volume.push([
                Date.parse(data[i]['Time']), // the date
                data[i]['Volume'] // the volume
            ]);
        }

        CHART1.series[0].setData(ohlc, true);
        CHART1.series[1].setData(volume, true);
    });
}

function initChart2() {
    var data_Ser = [];
    $.getJSON(CHART_URL2+CHART2__FILTER, function (data) {


        data.forEach(function (one) {
            data_Ser.push([
                one['Time'] * 1000, one['Value']
            ]);
        });

        // create the chart
        CHART2 = Highcharts.stockChart('container2', {

            title: {
                text: 'Trade success Equity'
            },

            subtitle: {
                text: 'Model portfolio equity chart since 01/01/2017'
            },

            xAxis: {
                breaks: [{ // Nights
                    from: Date.UTC(2011, 9, 6, 16),
                    to: Date.UTC(2011, 9, 7, 8),
                    repeat: 24 * 36e5
                }, { // Weekends
                    from: Date.UTC(2011, 9, 7, 16),
                    to: Date.UTC(2011, 9, 10, 8),
                    repeat: 7 * 24 * 36e5
                }]
            },
            series: [{
                name: 'Equity',
                type: 'area',
                data: data_Ser,
                gapSize: 5,
                tooltip: {
                    valueDecimals: 2
                },
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                threshold: null
            }]
        });


        setInterval(function () {
            updateChart2();
        }, CHART_INTERVAL_UPDATE);
    });
}
function updateChart2() {
    var data_Ser = [];
    $.getJSON(CHART_URL2+CHART2__FILTER, function (data) {


        data.forEach(function (one) {
            data_Ser.push([
                one['Time'] * 1000, one['Value']
            ]);
        });


        CHART2.series[0].setData(data_Ser, true);
    });
}



function initTable() {

    $.ajax({
        type: 'GET',
        url: TABLE_URL,
        datatype: 'json',
        success: function (data) {


            var html = $('#table tbody');
            html.html('');
            data.forEach(function (one) {

                if (one['Direction'] == 'Buy') {
                    html.append('<tr>\
                        <td style="color: green;">' + one['Direction'] + '</td>\
                        <td>' + one['Price'] + '</td>\
                        <td>' + one['SecurityCode'] + '</td>\
                        <td>' + new Date(one['Time'] * 1000) + '</td>\
                        <td>' + one['Volume'] + '</td>\
                        </tr>');

                } else {
                    html.append('<tr>\
                        <td style="color: red;">' + one['Direction'] + '</td>\
                        <td>' + one['Price'] + '</td>\
                        <td>' + one['SecurityCode'] + '</td>\
                        <td>' + new Date(one['Time'] * 1000) + '</td>\
                        <td>' + one['Volume'] + '</td>\
                        </tr>');

                }

            });


        }/* response processing function ends */
    });
    /* ajax function ends */


}
var _ = require('lodash');



module.exports = {

    getDefaultProps: function () {
        return {
            convert: true
        };
    },

    getUserHighchartOptions: function() {
        var options = {};
        if (this.props.legend === false) {
            options.legend = { enabled: false };
        }
        var type = this.props.type;
        if (type === 'stack') {
            options = _.extend(options, {
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: true,
                            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                            style: {
                                textShadow: '0 0 3px black, 0 0 3px black'
                            }
                        }
                    }
                },
            });
        }

        if (this.props.xAxis === 'datetime') {
            options = _.extend(options, {
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: { // don't display the dummy year
                        millisecond: '%H:%M:%S.%L',
                        second: '%H:%M:%S',
                        minute: '%H:%M',
                        hour: '%H:%M',
                        day: '%m-%e',
                        week: '%e. %b',
                        month: '%b \'%y',
                        year: '%Y'
                    }
                }
            });
        }
        return options;
    }
};
// Write your Javascript code.


$(document).ready(function () {
    var data = {
        operators: {
            operator1: {
                top: 80,
                left: 40,
                properties: {
                    title: 'Upstream',
                    inputs: {
                        input_1: {
                            "label": "http://localhost:5000"
                        }
                    },
                    outputs: {
                        output_1: {
                            label: '/api/get/'
                        },
                        output_2: {
                            label: '/api/post/',
                        }
                    }
                }
            },
            operator2: {
                top: 80,
                left: 360,
                properties: {
                    title: 'Downstream',
                    inputs: {
                        input_1: {
                            label: '/get',
                        },
                        input_2: {
                            label: '/post',
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'httpbin.org:80'
                        }
                    }
                }
            },
        },
        links: {
            link_1: {
                fromOperator: 'operator1',
                fromConnector: 'output_1',
                toOperator: 'operator2',
                toConnector: 'input_1'
            },
            link_2: {
                fromOperator: 'operator1',
                fromConnector: 'output_2',
                toOperator: 'operator2',
                toConnector: 'input_2'
            },
        }
    };

    // Apply the plugin on a standard, empty div...
    $('#example_5').flowchart({
        data: data,
        canUserEditLinks: false,
        canUserMoveOperators: true
    });
});
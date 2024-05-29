const appd = require('appdynamics');
appd.profile({
    controllerHostName: "<controller host>",
    controllerPort: 443,
    accountName: '<acc name>',
    accountAccessKey: '<access key>',
    controllerSslEnabled: true,
    applicationName: 'NodeFetchDemoApp',
    tierName: 'tier1',
    nodeName: 'node1',
    logging: {
        'logfiles': [{
            filename: "nodejs_agent_%N.log",
            level: 'INFO'
        }]
    }
  });

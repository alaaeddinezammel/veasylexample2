 var logPayload = {
    messageid: context.getVariable("messageid"),
    environment: context.getVariable("environment.name"),
    apiProxy: context.getVariable("apiproxy.name"),
    proxyRevision: context.getVariable("apiproxy.revision"),
    fullUrl: context.getVariable("request.url"),
    clientIp: context.getVariable("request.client.ip"),
    httpMethod: context.getVariable("request.verb"),
    userAgent: context.getVariable("request.headers.User-Agent"),
    statusCode: context.getVariable("response.status.code"),
    requestPayload: JSON.parse(context.getVariable("request.content") || "{}"),
    responsePayload: JSON.parse(context.getVariable("response.content") || "{}"),
    processingTime: context.getVariable("system.timestamp"),
    score: context.getVariable("sentimentScore"),
    publishFailed: context.getVariable("publishmessage.failed")
};

context.setVariable("formatted.logPayload", JSON.stringify(logPayload));

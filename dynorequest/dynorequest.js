var rp = require('request-promise');

const dynorequest = [] 

dynorequest.FetchData = async function(packet) {
    const FormattedResponsePacket = {
        method: packet.RequestType,
        url: packet.Domain,
        headers: packet.Headers
    };

    if (packet.UseProxies && packet.Proxy) {
        FormattedResponsePacket.proxy = packet.Proxy;
    }

    if (packet.RequestType === "POST" || packet.RequestType === "PATCH") {
        const JsonEncodedRequestData = JSON.stringify(packet.PostRequestDataPayload);
        FormattedResponsePacket.body = JsonEncodedRequestData;
    }

    try {
        const response = await rp(FormattedResponsePacket);

        if (packet.JsonEncode) {
            const JsonEncodedResponseString = JSON.stringify(response);
            const JsonEncodedResponse = JSON.parse(response);
            return JsonEncodedResponse;
        }

        return response;

    } catch (error) {
        if (packet.Debug) {
            console.log('Error: ', error, " ");
        }
        return null;
    }
}


module.exports = dynorequest;

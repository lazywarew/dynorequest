# node-dynorequest

Library to help you preform http requests.

## Installation

To install dynorequest, use [npm](http://github.com/npm/npm):

```
npm install dynorequest
```

## Usage

```javascript
const dynorequest = require("dynorequest");

async function testrequest() {
  const owo = await dynorequest.FetchData({
    //request configs
    Debug: false, // prints error message if request wasnt succesful
    JsonEncode: true, // returns json encoded response
    UseProxies: false, // uses the given proxy to preform requests
    RequestType: "POST", // GET,POST,PATCH,DELETE
    PostRequestDataPayload: {
      // data to sent if request type is POST
      hello: "world",
    },

    //request data settings
    Domain: "https://httpbin.org/post", // website url
    Proxy: "", // proxy to use when sending a request
    Headers: {
      // headers to sent when sending a request
      //some  data chunks to avoid request getting blocked
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Content-Type": "application/json",
    },
  });

  if (owo) {
    console.log("data has been received", owo);
    return true;
  }
  console.log("error occured while receiving data : ", owo); // should be null
  return false;
}

testrequest();
```

## API

`dynorequest.`

- `FetchData(options)`
- `options`
- `Debug` - prints error message if request wasnt succesful [OPTIONAL]
- `JsonEncode` - returns json encoded response [OPTIONAL]
- `UseProxies` - use proxy for sending request [OPTIONAL]
- `RequestType` - can be POST OR GET [REQUIRED]
- `PostRequestDataPayload` - payload to send when posting data [OPTIONAL]
- `Domain` - website url to send request to [REQUIRED]
- `Proxy` - proxy to use when sending request [OPTIONAL]
- `Headers` - headers to send when sending request [OPTIONAL]

## Command Line Usage

$ npm install -g dynorequest

$ dynorequest
$ FetchData options

## LICENSE

node-dynorequest is licensed under the MIT license.

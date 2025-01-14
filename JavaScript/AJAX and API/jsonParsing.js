var data = '{"time":{"updated":"Jan 13, 2025 00:45:47 UTC","updatedISO":"2025-01-13T00:45:47+00:00","updateduk":"Jan 13, 2025 at 00:45 GMT"},"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org","chartName":"Bitcoin","bpi":{"USD":{"code":"USD","symbol":"&#36;","rate":"96,879.692","description":"United States Dollar","rate_float":96879.6921},"GBP":{"code":"GBP","symbol":"&pound;","rate":"77,268.82","description":"British Pound Sterling","rate_float":77268.8204},"EUR":{"code":"EUR","symbol":"&euro;","rate":"93,172.494","description":"Euro","rate_float":93172.4938}}}';

var parsedData = JSON.parse(data);

console.log(parsedData.time);
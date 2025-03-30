import 'dotenv/config';
import axios from "axios";
import * as readline from "readline/promises";



// const authResponse = await axios({
//   url: `https://${LIGHTS_BRIDGE_IP}/api`,
//   method: 'POST',
//   data: JSON.stringify({
//     'devicetype': 'app_name#instance_name',
//     'generateclientkey': true,
//   })
// });
//
// console.log(authResponse.data);

// const response = await axios.get(`https://${config.ip}/clip/v2/resource/device`, {
//   headers: {
//     'hue-application-key': process.env.LIGHTS_BRIDGE_USERNAME
//   }
// });
//
// console.log(response.data);



const input = { r: 0, g: 0, b: 0 };
input.r = Number.parseFloat(await r1.question('R? '));
input.g = Number.parseFloat(await r1.question('G? '));
input.b = Number.parseFloat(await r1.question('B? '));

console.log(rgbToXy(input));
process.exit(0);

import whatwgetch from 'whatwg-fetch';
import config from '../../config/config.js';

const methods = ['get', 'post', 'put', 'patch', 'del'];

export function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  return 'http://' + config.host + ':' + config.port+"/api" + adjustedPath;
}

export default function fetchApi(url,options){
     url=formatUrl(url);
    options=options||{};
    options.method=options.method||'GET';
    options.credentials='same-origin';
    if(options.method.toLowerCase()=='post'){       
        if(options.rawbody){
             options.body=options.rawbody;
        }
        else {
            options.headers=options.header||{};
            options.headers['Accept']='application/json';
            options.headers['Content-Type']='application/json';
            if(typeof options.body=='object'){
               options.body=JSON.stringify(options.body);
            }
        }       
    }
    return fetch(url,options).then(function(response) {
       return response.json();
    });
} 

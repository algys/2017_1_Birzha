'use strict';

const ALLOWED_METHODS = ['POST', 'PUT', 'PATCH', 'DELETE'];

class Request {
    constructor(server) {
        this.server = server;
        this.funcs = [];

        this.baseCatch = function (error) {
            console.log('[FAIL] ', error);
        };

        this.json = null;
    }

    addResponse(_func) {
        this.funcs.push(_func);
        return this;
    }

    addJson(_params)  {
        this.json = JSON.stringify(_params);
        return this;
    }

    error(_errorCallback) {
        this.baseCatch = _errorCallback;
        return this;
    }

    request(path, data) {
        data = data || {};

        if(!(data['method'] && (data['method'] in ALLOWED_METHODS)))
            data['method'] = data['method'] || 'GET';

        data['headers'] = data['headers'] || {"Content-Type": "application/json"};
        data['credentials'] = 'include';
        data['mode'] = data['mode'] || 'CORS';
        data['cache'] = data['cache'] || 'default';

        if(this.json != "null")
            data['body'] = this.json;

        let fetchPromise = fetch(this.server + path, data);

        let me = this;
        this.funcs.map(function(el, index) {
            fetchPromise.then(el);
        });

        fetchPromise.catch(me.baseCatch); // TODO catch
    }
}

export default Request;
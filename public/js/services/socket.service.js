System.register([], function(exports_1) {
    var SocketService;
    return {
        setters:[],
        execute: function() {
            SocketService = (function () {
                function SocketService() {
                }
                SocketService.prototype.init = function () {
                    this.socket = io.connect('localhost:30200');
                    console.log('Create Connection');
                };
                SocketService.prototype.on = function (eventName, callback) {
                    this.socket.on(eventName, function (data) {
                        callback(data);
                    });
                };
                SocketService.prototype.emit = function (eventName, data, callback) {
                };
                return SocketService;
            })();
            exports_1("SocketService", SocketService);
        }
    }
});

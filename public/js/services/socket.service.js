System.register([], function(exports_1) {
    var SocketService;
    return {
        setters:[],
        execute: function() {
            SocketService = (function () {
                function SocketService() {
                    this.socket = io.connect('localhost:3000', {
                        reconnection: false
                    });
                }
                SocketService.prototype.on = function (eventName, callback) {
                    console.log(this.socket);
                    this.socket.on(eventName, function (data) {
                        console.log(data);
                        callback(data);
                    });
                };
                SocketService.prototype.getSocket = function () {
                    return this.socket;
                };
                SocketService.prototype.emit = function (eventName, data, callback) {
                };
                return SocketService;
            })();
            exports_1("SocketService", SocketService);
        }
    }
});

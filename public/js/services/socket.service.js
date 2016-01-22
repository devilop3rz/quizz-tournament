System.register([], function(exports_1) {
    var SocketService;
    return {
        setters:[],
        execute: function() {
            SocketService = (function () {
                function SocketService() {
                }
                SocketService.prototype.init = function () {
                    var _this = this;
                    this.socket = io.connect('localhost:3000');
                    window.onbeforeunload = function (e) {
                        _this.socket.disconnect();
                    };
                    return this.socket;
                };
                SocketService.prototype.on = function (eventName, callback) {
                    this.socket.on(eventName, function (data) {
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

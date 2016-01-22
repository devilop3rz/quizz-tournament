
declare var io: {
    connect(url: string): Socket;
}

interface Socket {
    on(event: string, callback: (data: any) => void);
    emit(event: string, data: any);
    disconnect();
}

export class SocketService {

    private socket:Socket;

    init() {
        this.socket = io.connect('localhost:3000');
        window.onbeforeunload = (e) => {
            this.socket.disconnect();
        };
        return this.socket
    }

    on(eventName: string, callback: (data: any) => void) {
        this.socket.on(eventName, (data) => {
            callback(data);
        })
    }

    getSocket() {
        return this.socket;
    }

    emit(eventName: string, data: any, callback: (data: any) => void) {

    }
}
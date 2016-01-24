
declare var io: {
    connect(url: string, settings:any): Socket;
}

interface Socket {
    on(event: string, callback: (data: any) => void);
    emit(event: string, data: any);
    disconnect();
}

export class SocketService {

    private socket:Socket;

    constructor() {
        this.socket = io.connect('localhost:3000', {
            reconnection: false
        });
    }

    on(eventName: string, callback: (data: any) => void) {
        console.log(this.socket)
        this.socket.on(eventName, (data) => {
            console.log(data)
            callback(data);
        })
    }

    getSocket() {
        return this.socket;
    }

    emit(eventName: string, data: any, callback: (data: any) => void) {

    }
}
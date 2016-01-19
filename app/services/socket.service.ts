import {Inject} from 'angular2/core';

declare var io: {
    connect(url: string): Socket;
}

interface Socket {
    on(event: string, callback: (data: any) => void);
    emit(event: string, data: any);
}

export class SocketService {

    public socket:Socket;

    init() {
        this.socket = io.connect('localhost:30200');
        console.log('Create Connection')
    }

    on(eventName: string, callback: (data: any) => void) {
        this.socket.on(eventName, (data) => {
            callback(data);
        })
    }

    emit(eventName: string, data: any, callback: (data: any) => void) {

    }
}
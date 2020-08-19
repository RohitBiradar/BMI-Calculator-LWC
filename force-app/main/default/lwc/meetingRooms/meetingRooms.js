import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {
    meetingRoomsInfo = [
        {roomName: 'A-01', roomCapacity: '12'},
        {roomName: 'A-02', roomCapacity: '16'},
        {roomName: 'B-01', roomCapacity: '33'},
        {roomName: 'B-02', roomCapacity: '20'},
        {roomName: 'C-01', roomCapacity: '10'}
    ];
}
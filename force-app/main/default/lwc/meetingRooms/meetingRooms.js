import { LightningElement , track} from 'lwc';

export default class MeetingRooms extends LightningElement {
    @track selectedMeetingInfo;
    meetingRoomsInfo = [
        {roomName: 'A-01', roomCapacity: '12'},
        {roomName: 'A-02', roomCapacity: '16'},
        {roomName: 'B-01', roomCapacity: '33'},
        {roomName: 'B-02', roomCapacity: '20'},
        {roomName: 'C-01', roomCapacity: '10'}
    ];

    ontileSelectHandler(event){
        const meetingRoomInfo = event.detail;
        this.selectedMeetingInfo = meetingRoomInfo.roomName;
    }
    
    constructor(){
        super();
        this.template.addEventListener('tileclick', this.ontileSelectHandler.bind(this));
    }
}
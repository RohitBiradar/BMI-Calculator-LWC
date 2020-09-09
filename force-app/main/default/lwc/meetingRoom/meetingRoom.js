import { LightningElement, api , wire } from 'lwc';
import {registerListener} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo = {roomName : 'A-01', roomCapacity : '12'};
    
    @wire(CurrentPageReference) pageReference;
    tileclickhandler(){
        const tileClicked = new CustomEvent('tileclick', {detail : this.meetingRoomInfo, bubbles : true});
        this.dispatchEvent(tileClicked);
        fireEvent(this.pageReference, 'pubsubtileclick', this.meetingRoomInfo);
    }
}
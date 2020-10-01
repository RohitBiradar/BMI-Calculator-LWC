import {CreateElement} from 'lwc';
import MeetingRooms from "c/meetingRooms";

describe('c-meetingRooms', () =>{
    afterEach(() => {
        while(document.body.firstChild){
            document.body.removeChild(document.body.firstChild);
        }
    })
});
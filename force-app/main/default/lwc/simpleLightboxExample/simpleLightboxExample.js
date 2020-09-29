import { LightningElement } from 'lwc';
import SL from '@salesforce/resourceUrl/simpleLightbox';
import {loadStyle, loadScript} from 'lightning/platformResourceLoader';

export default class SimpleLightboxExample extends LightningElement {
    slLoaded = false;
    renderedCallback(){
        if(this.slLoaded === false){
            Promise.all([
                loadStyle(this, SL+'/simpleLightbox/dist/simpleLightbox.css'),
                loadScript(this, SL+'/simpleLightbox/dist/simpleLightbox.js')
            ]).then(()=>{
                this.slLoaded = true;
            }).catch((error)=>{
                console.error('Could not initialize simple Lightbox');
            });
        }
        
    }

    openGallary(){
        SimpleLightbox.open({
            items: ['/resource/cars/van/maruti_suzuki_eeco.jpg', '/resource/cars/luxury/mercedes_benz_gls.jpg', '/resource/cars/sports/Audi_R8_V10_Plus.jpg']
        });
    }
}
import { LightningElement, api } from 'lwc';

export default class ConditionalsBasic extends LightningElement {
    @api conditions = {
        primary: false,
        secondary: false
    };

    handleButtonClick() {
        console.log('button clicked');
    }
}

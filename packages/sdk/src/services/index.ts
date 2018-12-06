import YesNoService from './yes-no/YesNoService';

export default class Services {
    
    private static yesNoService: YesNoService = null;

    public static getYesNoService() {
        if(! this.yesNoService) {
            this.yesNoService = new YesNoService();
        }
        return this.yesNoService;
    }
};  


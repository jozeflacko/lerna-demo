import * as sdk from 'sdk';

export default class TimeUtils {
    static getToday() {
        return sdk.utils.TimeUtils.getCurrentTime() + " " + sdk.utils.TimeUtils.getToday();
    }
}
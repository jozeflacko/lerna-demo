export default class TimeUtils {

    private static getDate(): Date {
        return new Date();
    }

    public static getToday(): string {
        const date: Date = this.getDate();
        const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()];
        return day + "." + month + "." + year;
    }

    public static getCurrentTime(): string {
        const date: Date = this.getDate();
        const [hours, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        return hours + ":" + minutes + ":" + seconds;
    }
}
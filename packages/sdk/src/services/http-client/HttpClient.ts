import axios, { AxiosPromise } from 'axios';

export default abstract class HttpClient {

    abstract getPrefix(): string;

    abstract getPostfix(): string;

    get<T>(what: string): AxiosPromise<T> {
        return axios.get<T>(this.getPrefix() + what + this.getPostfix());
    }
}
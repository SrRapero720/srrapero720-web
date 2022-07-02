export default class SiteConfig {
    public readonly NAME = "SrRapero720";
    public readonly URL: string;
    public readonly PATH: string;
    public readonly ERR?: Error | undefined;
    constructor(url: string, path: string, err?: Error) {
        this.URL = url;
        this.PATH = path;
        this.ERR = err;
    }
}
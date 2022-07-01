export default class SiteConfig {
    public readonly NAME = "SrRapero720";
    public readonly URL: string;
    public readonly PATH: string;
    constructor(url: string, path: string) {
        this.URL = url;
        this.PATH = path;
    }
}
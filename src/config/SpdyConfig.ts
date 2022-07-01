import { ServerOptions } from "spdy";
export default class SpdyConfig implements ServerOptions {
    
    public readonly spdy: ServerOptions["spdy"] = {
        protocols: ["h2", "spdy/3.1", "http/1.1"],
        plain: true,
        connection: {
            windowSize: 1920 * 1080,
            autoSpdy31: true
        }
    }
}
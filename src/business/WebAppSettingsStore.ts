import SubscribableValue from "../model/SubscribableValue";

const MOBILE_WIDTH = 800;
const MOBILE_HEIGHT = 20;

class WebAppSettingsStore{
    private mobileMode : SubscribableValue<boolean>;

    constructor(){
        this.mobileMode = new SubscribableValue<boolean>(false);
    }

    getMobileMode = () => this.mobileMode;

    private isMobileMode = () => {
        const w = window;
        const d = document;
        const documentElement = d.documentElement;
        const body = d.getElementsByTagName('body')[0];
        const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
        const height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;
        return width < MOBILE_WIDTH || height < MOBILE_HEIGHT;
    }

    initMobileMode = () => {
        this.mobileMode.setValue(this.isMobileMode());
        window.addEventListener("resize", 
            () => this.mobileMode.setValue(this.isMobileMode()));
    }
}

export default new WebAppSettingsStore();
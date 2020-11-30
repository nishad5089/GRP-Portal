import * as uuid from 'uuid';
import { APPLICATION_NAME, CLIENT, VERSION } from '../../constant/constant';
import { SearchParams } from './search-params';
import { AssetInfo } from '../model/asset-info';

export class Header {
    requestId = uuid.v4();
    requestClient = CLIENT;
    requestType: string;
    requestSource = APPLICATION_NAME;
    requestSourceService: string;
    requestVersion = VERSION;
    requestTime: Date = new Date();
    requestTimeoutInSeconds = 20;
    requestRetryCount = 0;
}
class Body {
    data: Data = new Data();
}

class Data {
    tempOid: string;
    assetItems: AssetInfo[];

}

export class RequestSaveAsset {
    header: Header = new Header();
    meta: Object = new Object();
    body: Body = new Body();
}

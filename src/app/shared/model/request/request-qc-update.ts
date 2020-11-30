import * as uuid from 'uuid';
import { APPLICATION_NAME, CLIENT, VERSION } from '../../constant/constant';

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
    oid: string;
    tempItemDetails: TempItemDetails[];

}

export class RequestQcUpdate {
    header: Header = new Header();
    meta: Object = new Object();
    body: Body = new Body();
}


export class TempItemDetails {
    oid: string;
    itemOid: string;
    qualifiedQuantity: number;
    disqualifiedQuantity: number;
    remarks: string;
}

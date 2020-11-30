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
    updateTempItem = new UpdateTempItem();

}

export class RequestTempItemUpdate {
    header: Header = new Header();
    meta: Object = new Object();
    body: Body = new Body();
}


export class UpdateTempItemDetails {
    itemOid: string;
    receivedQuantity: number;
    extraQuantity: number;
    remarks: string;
}

export class UpdateTempItem {
    oid: string;
    vendorOid: string;
    description: string;
    status: string;
    receivedAt: string;
    chalanNo: string;
    chalanDate: string;
    workorderNo: string;
    workorderDate: string;
    updateTempItemDetail: UpdateTempItemDetails[];
}

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
    data =  new TempItem();

}

export class RequestDraftSaveTempItem {
    header: Header = new Header();
    meta: Object = new Object();
    body: Body = new Body();
}


export class TempItem {
    chalanNo: string;
    chalanDate: string;
    receivedAt: string;
    workorderNo: string;
    workorderDate: string;
    receivedBy: string;
    createdBy: string;
    status: string;
    description: string;
    vendorOid: string;
    draftTempItemDetail: TempItemDetail[];
}

export class TempItemDetail {
    itemOid: string;
    receivedQuantity: string;
    extraQuantity: string;
    remarks: string;
}


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
    data =  new Requisition();
}

export class RequestSaveRequisition {
    header: Header = new Header();
    meta: Object = new Object();
    body: Body = new Body();
}


export class Requisition {
    remarks: string;
    declarationOid: string;
    detail: RequisitionDetail[];
}

export class RequisitionDetail {
    itemCategoryOid: string;
    itemOid: string;
    quantity: string;
    unit: string;
    specification: string;
    remarks: string;
}

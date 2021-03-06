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
    data = new UpdateRequisition();

}

export class RequestRequisitionDraftSubmit {
    header: Header = new Header();
    meta: Object = new Object();
    body: Body = new Body();
}


export class UpdateRequisitionDetail {
    itemOid: string;
    quantity: number;
    unit: string;
    remarks: string;
    specification: string;
    itemCategoryOid: string;
}

export class UpdateRequisition {
    oid: String;
    remarks: string;
    detail: UpdateRequisitionDetail[];
}

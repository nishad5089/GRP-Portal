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
    data = new UpdateConsolidateRequisition();

}

export class RequestConsolidateRequisitionUpdate {
    header: Header = new Header();
    meta: Object = new Object();
    body: Body = new Body();
}


export class UpdateConsolidateRequisitionDetail {
    oid: string;
    itemOid: string;
    requiredQuantity: number;
    approvedQuantity: number;
    remarks: string;
    consolidateRequisitionOid: string;
}

export class UpdateConsolidateRequisition {
    oid: string;
    detail: UpdateConsolidateRequisitionDetail[];
}

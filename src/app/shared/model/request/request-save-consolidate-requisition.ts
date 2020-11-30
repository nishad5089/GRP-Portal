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
    data =  new ConsolidateRequisition();

}

export class RequestSaveConsolidateRequisition {
    header: Header = new Header();
    meta: Object = new Object();
    body: Body = new Body();
}


export class ConsolidateRequisition {
    fiscalYearOid: string;
    declarationOid: string;
    detail: ConsolidateRequisitionDetail[];
}

export class ConsolidateRequisitionDetail {
    itemOid: string;
    requiredQuantity: number;
    approvedQuantity: number;
    unit: string;
    remarks: string;
    itemCetegoryOid: string;
}

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
    data = new UpdateDraftConsolidateRequisition();

}
export class RequestConsolidateRequisitionSubmitDraft {
    header: Header = new Header();
    meta: Object = new Object();
    body: Body = new Body();
}

export class UpdateDraftConsolidateRequisitionDetail {
    oid: string;
    requiredQuantity: number;
    approvedQuantity: number;
    remarks: string;
    itemOid: string;
    itemCategoryOid: string;
    consolidateRequisitionOid: string;
}

export class UpdateDraftConsolidateRequisition {
    oid: string;
    fiscalYearOid: string;
    declarationOid: string;
    detail: UpdateDraftConsolidateRequisitionDetail[];
}

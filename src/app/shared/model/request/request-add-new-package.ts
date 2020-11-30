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
    appOid: String;
    data =  new PackageDetail();
}

export class AddNewPackage {
    header: Header = new Header();
    meta: Object = new Object();
    body: Body = new Body();
}

class PackageDetail {
  
    tenderAdvertiseDate: String;
    tenderOpeningDate: String;
    tenderEvaluationDate: String;
    approvalToAwardDate: String;
    notificationOfAwardDate: String;
    signingOfContractDate: String;
    contractCompletionDay: String;
    packageTypeOid: String;
    procurementNatureOid: String;
    procurementMethodOid: String;
    packageNo: String;
    packageDescription: String;
    packageUnit: String;
    packageQuantity: String;
    procurementTypeOid: String;
    contractApprovingAuthorityOid: String;
    estimateCost: String;
    itemCategoryOid: String;
    contractSignatureDay: String;
}

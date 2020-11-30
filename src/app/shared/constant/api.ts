import {
  ASSET_URL as AST_URL, AUTH_SERVICE_URL,
  CATALOGUE_URL,
  CMN_ORGANOGRAM_URL,
  DEPLOYMENT_URL,
  HRM_PIM_URL,
  PRC_URL,
  REPORT_URL,
  SEC_URL_TEMP,
  SSO_URL,
  NOTIFICATION_URL,
  CMN_GLOBAL_URL,
  INV_URL
} from '../../../root-url';

export const SECURITY_URL = SEC_URL_TEMP;

export const GET_LIST = 'get-list';
export const GET_LIST_BY_LEASE_TYPE = 'get-list-by-lease-type';
export const GET_LIST_BY_LEASE_TYPE_AND_LEASE_AREA = 'get-list-by-area-and-type';
export const GET_LIST_BY_LEASE_ITEM_AND_LEASE_TYPE_ATTRIBUTE_MAPPING = 'get-list-by-lease-item-and-type-attribute-mapping';

export const AUTH_TOKEN_URL = 'oauth/token';
export const AUTH_LOGIN_URL = 'master/authentication/v1/login';
export const AUTH_LOGOUT_URL = 'master/authentication/v1/logout';
export const LOGIN_URL = 'login';
export const LOGOUT_URL = `${SSO_URL}logout`;
export const UPLOAD_URL = 'api/v1/uploadAttachment';
export const DOWNLOAD_URL = 'api/v1/downloadFile';
export const GET_ROLE_LIST = 'master/role/v1/get-list-by-username';
export const GET_MENU_LIST = 'master/component/v1/get-list-by-role';
export const GET_EMP_BASIC = 'asset/employee/v1/get-basic-info-by-user-name';

export const GET_ITEM_LIST = 'master/item/v1/get-list';
export const GET_ITEM_CATEGORY_LIST = 'master/item/v1/get-category-list';
export const GET_ITEMLIST_BYCATEGORYOID = 'master/item/v1/get-itemlist-bycategoryoid';
export const GET_VENDOR_LIST = 'master/vendor/v1/get-list';
export const GET_FISCAL_YEAR_LIST = 'master/fiscal-year/v1/get-list';

export const CREATE_URL = 'create';
export const UPDATE_URL = 'update';
export const DELETE_URL = 'delete';
export const GET_LIST_URL = 'get-list';
export const GET_MINISTRY_OR_DIVISION_LIST_PATH = 'get-ministry-or-division-list';
export const GET_BY_OID_URL = 'get-by-oid';
export const GET_LIST_BY_OID_SET_URL = 'get-list-by-oid-set';
export const GET_BY_OFFICE_UNIT = 'get-by-office-unit';
export const GET_BY_INSPECTION_OID_URL = 'get-by-inspection-oid';
export const SAVE_RESULT = 'save-result';
export const SAVE_TAGGED_RESULT = 'save-result-for-tagged';
export const SAVE_RESULT_FOR_UNTAGGED = 'save-result-for-untagged';
export const SET_RECEIVABLE = 'set-receivable';
export const SET_RETURN_RECEIVABLE = 'set-return-receivable';
export const SET_UNTAGGED_RETURN_RECEIVABLE = 'set-untagged-receivable';
export const SAVE_TAGGED_RECEIVABLE = 'set-tagged-receivable';
export const ASSIGNED_ASSET = 'assigned-asset';
export const FILTERED_ASSIGNED_ASSET = 'filtered-assigned-asset';
export const REQUEST_RETURN = 'request-return';
export const APPROVE_REQUEST_RETURN = 'approve-request-return';
export const RECEIVE_REQUEST_RETURN = 'receive-request-return';
export const GET_BY_STATUS_LIST_URL = 'get-by-status-list';
export const GET_SELF_LIST_URL = 'get-self-list';
export const GET_LIST_FOR_OFFICE_UNIT = 'get-list-for-office-unit';
export const GET_ISSUE_PENDING_ITEM_URL = 'get-list-pending-requisition-item';
export const GET_ISSUED_ITEM_URL = 'get-list-issued-requisition-item';
export const ISSUE_URL = 'issue';
export const SAVE_ABSTRACT_ITEM_FOR_REQUISITION = 'save-abstract-item-for-requisition';
export const CREATE_SUMMARY_URL = 'create-summary';
export const UPDATE_SUMMARY_URL = 'update-summary';
export const UPDATE_USER_ROLE_SUMMARY_URL = 'update-user-role-summary';
export const GET_REVIEW_ACTION_BY_OID = 'get-review-action-by-oid';
export const UPDATE_REVIEW_ACTION = 'update-review-action';
export const UPLOAD_FILE = 'upload-file';
export const GET_REQUISITION_REPORT_BY_EMPLOYEE = 'get-requisition-by-employee';


export const GET_BY_OFFICE_OID_URL = 'get-by-office-oid';
export const GET_EMPLOYEE_BY_OFFICE_UNIT_POST_OIDS = 'get-employee-by-office-unit-post-oids';
export const GET_OFFICE_UNIT_HEAD = 'get-office-unit-head';
export const GET_BY_STATUS = 'get-by-status';
export const GET_BY_STATUS_LIST = 'get-by-status-list';
export const GET_BY_STATUS_LIST_WITH_STORE = 'get-by-status-list-with-store';
export const GET_BY_TYPE = 'get-by-type';
export const GET_BY_TYPE_WITH_STORE = 'get-by-type-with-store';
export const GET_ACTIVE_BY_TYPE_WITH_APPROVER = 'get-active-by-type-with-approver';
export const GET_BY_STATUS_AND_STORE = 'get-by-status-and-store';
export const GET_BY_STATUS_AND_INSPECTOR = 'get-by-status-and-inspector';
export const GET_BY_LIST_OF_STATUS_AND_TYPE_AND_INSPECTOR = 'get-by-list-of-status-and-type-and-inspector';
export const GET_LIST_BY_AREA_AND_TYPE = 'get-list-by-area-and-type';
export const GET_LIST_BY_PARENT_AND_TYPE = 'get-list-by-parent-and-type';
export const GET_AVAILABLE_LIST_BY_AREA_AND_TYPE = 'get-available-list-by-area-and-type';
export const GET_AVAILABLE_LIST_BY_PARENT_AND_TYPE = 'get-available-list-by-parent-and-type';
export const GET_FILTERED_ASSETS = 'get-filtered-assets';

export const GET_POST_BY_OFFICE_UNIT_OID_URL = 'get-by-office-unit';
export const GET_CHILDS_BY_PARENT_OID_URL = 'get-childs-by-parent-oid';

export const SAVE_INSPECTOR = 'save-inspector';
export const APPROVE_ASSIGNMENT = 'approve-assignment';
export const APPROVE_STORE = 'approve-store';
export const RETURN_STORE = 'return-store';

export const GET_UPCOMING = 'upcoming';
export const GET_SUMMARY_BY_OID = 'get-summary-by-oid';
export const GET_HISTORY = 'get-history';
export const GET_SUMMARY_BY_RECEPTION_OID = 'get-summary-by-reception-oid';
export const GET_TAGGED_SUMMARY_BY_OID = 'tagged-get-summary-by-oid';
export const GET_BY_OID = 'get-by-oid';
export const GET_BY_STORE = 'get-list-by-store';
export const GET_BY_OFFICE_UNIT_POST_PATH = 'get-by-office-unit-post-oid';
export const GET_ACTIVE_BY_OFFICE_UNIT_POST_PATH = 'get-by-office-unit-post-oid-with-active';
export const GET_FOR_COURIER_CREATE = 'get-list-to-create-courier';
export const RECEIVE = 'receive';
export const GET_FOR_STORE = 'get-list-for-store';
export const GET_SUMMARY_BY_OID_FOR_STORE = 'get-summary-by-oid-for-store';
export const GET_BLOCKED_QUANTITY = 'get-block-quantity';


export const SUMMARY_PATH = 'summary/';

export const GET_LIST_BY_FILTER_URL = 'get-by-filter';

export const ASSETISE_URL = 'assetise';
export const GET_LIST_FOR_ASSIGNMENT_URL = 'get-list-for-assignment';

export const GET_BY_ITEM_GROUP_OID = 'get-by-item-group-oid';
export const GET_ITEM_GROUP_BY_OID_PATH = 'get-item-group-by-oid';
export const GET_ATTRIBUTE_LIST_PATH = 'get-attribute-list';
export const SAVE_ATTRIBUTE_PATH = 'save-attribute';
export const UPDATE_ATTRIBUTE_PATH = 'update-attribute';


export const GET_ITEM_GROUP_SUMMARY_BY_OID = 'get-item-group-summary-by-oid';

export const GET_BY_TAG_URL = 'get-by-tag';
export const GET_DEPRECIATION_BY_ASSET_TAG_URL = 'get-depreciation-by-asset-tag';
export const GET_BY_ITEMS_URL = 'get-by-items';

export const GET_ISSUABLE_ASSETS_BY_ITEM_OID_URL = 'get-issuable-assets-by-item-oid';

export const GET_ISSUABLE_ASSETS_BY_ITEM_OIDS_URL = 'get-issuable-assets-by-item-oids';

export const GET_ISSUED_VEHICLES_BY_STORE_OID_URL = 'get-issued-vehicles-by-store-oid';

export const GET_BY_USER_OID = 'get-list-role-by-oid';

export const GET_AUTHORITY_BY_USER_AND_POST = 'get-authority-by-user-and-post';

export const SELF_RETURN_URL = 'self-return';

export const SELF_RETURN_REQUEST_URL = 'self-return-request';

export const GET_EXISTING_OPENING_STOCK = 'get-existing-opening-stock';

export const GET_EXISTING_OPENING_STOCK_BY_STORE_AND_ASSIGNEE = 'get-existing-opening-stock-by-store-and-assignee';

export const GET_EXISTING_OPENING_STOCK_BY_ASSIGNEE = 'get-existing-opening-stock-by-assignee';

export const GET_ALL_EXISTING_OPENING_STOCK_BY_ASSIGNEE = 'get-all-existing-opening-stock-by-assignee';

export const SEND_FOR_APPROVING = 'send-for-approving';

export const GET_LIST_OF_TAGGING = 'get-list-of-tagging';

export const GET_REQUISITION_SUMMARY_BY_OID = 'get-requisition-summary-by-oid';

export const GET_REQUISITION_LIST_FOR_APPROVAL = 'get-requisition-list-for-approval';
export const GET_REQUISITION_BY_OID = 'get-by-requisition-oid';

export const REJECT_REQUISITION_URL = 'reject-requisition';

export const GET_ACTIVE_ENTITLEMENT = 'get-active-list';

export const DRAFT_URL = 'draft';

export const SEND_URL = 'send';

export const FILTER_URL = 'filter';

export const GET_BY_SOURCE_DETAIL_OID_PATH = 'get-by-source-detail-oid';

export const DIRECT_IN_SUMMARY_SAVE = 'draft';

export const GET_BY_DIRECT_IN_OID_URL = 'get-by-direct-in-oid/';

export const GET_ENTITLEMENT_BY_POST = 'get-entitlement-by-post';

export const GET_DECOMMISSIONED_ASSET_LIST = 'get-decommissioned-asset-list';

export const SAVE_DECOMMISSIONED_ASSET_URL = 'save-decommissioned-asset';

export const CREATE_DISPOSAL_REQUEST_PATH = 'create-disposal-request';

export const SAVE_DISPOSAL_DECISION_PATH = 'save-disposal-decision';

export const SAVE_DISPOSAL_RESULT_PATH = 'save-disposal-result';

export const GET_ASSETS_WITH_FILTER_PATH = 'get-assets-with-filter';

export const GET_ASSETS_ARRANGED_OFFICE_UNIT_WISE_PATH = 'get-assets-arranged-office-unit-wise';

export const GET_ASSETS_ARRANGED_OFFICE_UNIT_POST_WISE_PATH = 'get-assets-arranged-office-unit-post-wise';

export const GET_ASSETS_BY_STORE_PATH = 'get-assets-by-store';

export const GET_DECOMMISSIONED_ASSETS_PATH = 'get-decommissioned-assets';

export const GET_DISPOSED_ASSETS_PATH = 'get-disposed-assets';

export const GET_DIRECT_IN_ASSET_BY_STORE = 'get-direct-in-asset-by-store';

export const GET_DIRECT_OUT_ASSET_BY_STORE = 'get-direct-out-asset-by-store';

export const GET_ITEM_WISE_ISSUED_ASSET = 'get-item-wise-issued-asset';

export const GET_EMPLOYEE_AND_UNIT_WISE_ISSUED_ASSET = 'get-employee-and-unit-wise-issued-asset';

export const INSERTING_ISSUE_INFORMATION = 'inserting-issue-information';

export const GET_ASSETS_DEPRECIATION_PATH = 'get-assets-depreciation';

export const GET_CURRENT_RENT_LIST_PATH = 'get-current-rent-list';

export const GET_ALL_RENT_LIST_PATH = 'get-all-rent-list';

export const SAVE_RENT_PATH = 'save-rent';

export const CONTRACT_RENEW_PATH = 'contract-renew';

export const CONTRACT_MODIFICATION_PATH = 'contract-modification';

export const GET_RENT_LIST_WITH_FILTER_PATH = 'get-rent-list-with-filter';

export const CHECKING_CHILD_LEASE_BY_PARENT = 'checking-child-lease-by-parent';

export const GET_ASSETS_TRANSACTION_HISTORY_PATH = 'get-assets-transaction-history';

export const GET_LEASE_ITEM_LIST_PATH = 'get-lease-item-list';

/**************************** <SECURITY> ***************************/

export const RETURN_BASE_URL = SSO_URL + LOGIN_URL + '?returnUrl=' + DEPLOYMENT_URL;

/**************************** <ASSET> ****************************/

export const MATERIAL_RECEPTION_CURRENT_VERSION = 'v1';
export const MATERIAL_RECEPTION_URL = `${AST_URL}material-reception/${MATERIAL_RECEPTION_CURRENT_VERSION}/`;

export const MATERIAL_RECEPTION_ITEM_CURRENT_VERSION = 'v1';
export const MATERIAL_RECEPTION_ITEM_URL = `${AST_URL}material-reception-item/${MATERIAL_RECEPTION_ITEM_CURRENT_VERSION}/`;

export const MATERIAL_RECEPTION_SUMMARY_CURRENT_VERSION = 'v1';
export const MATERIAL_RECEPTION_SUMMARY_URL = `${AST_URL}material-reception-summary/${MATERIAL_RECEPTION_CURRENT_VERSION}/`;

export const ASSET_CURRENT_VERSION = 'v1';
export const ASSET_URL = `${AST_URL}asset/${ASSET_CURRENT_VERSION}/`;

export const ROLE_CURRENT_VERSION = 'v1';
export const ROLE_URL = `${AST_URL}new-role/${ROLE_CURRENT_VERSION}/`;

export const ASSIGNMENT_CURRENT_VERSION = 'v1';
export const ASSIGNMENT_URL = `${AST_URL}asset-assignment/${ASSIGNMENT_CURRENT_VERSION}/`;

export const RETURN_CURRENT_VERSION = 'v1';
export const RETURN_URL = `${AST_URL}return/${RETURN_CURRENT_VERSION}/`;

export const INSPECTION_CURRENT_VERSION = 'v1';
export const INSPECTION_URL = `${AST_URL}inspection/${INSPECTION_CURRENT_VERSION}/`;

export const OPENING_STOCK_CURRENT_VERSION = 'v1';
export const OPENING_STOCK_URL = `${AST_URL}opening-stock/${OPENING_STOCK_CURRENT_VERSION}/`;

export const OPENING_STOCK_ITEMS_CURRENT_VERSION = 'v1';
export const OPENING_STOCK_ITEMS_URL = `${AST_URL}opening-stock-items/${OPENING_STOCK_ITEMS_CURRENT_VERSION}/`;

export const OPENING_STOCK_STORE_SUMMARY_CURRENT_VERSION = 'v1';
export const OPENING_STOCK_STORE_SUMMARY_URL = `${AST_URL}opening-stock-store-summary/${OPENING_STOCK_CURRENT_VERSION}/`;

export const ABSTRACT_ITEM_CURRENT_VERSION = 'v1';
export const ABSTRACT_ITEM_URL = `${AST_URL}abstract-item/${ABSTRACT_ITEM_CURRENT_VERSION}/`;

export const STORE_CURRENT_VERSION = 'v1';
export const STORE_URL = `${AST_URL}store/${STORE_CURRENT_VERSION}/`;

export const MAINTENANCE_COMMITTEE_ASSIGNMENT_CURRENT_VERSION = 'v1';
export const MAINTENANCE_COMMITTEE_ASSIGNMENT_URL = `${AST_URL}maintenance-committee-assignment/${MAINTENANCE_COMMITTEE_ASSIGNMENT_CURRENT_VERSION}/`;

export const MAINTENANCE_CURRENT_VERSION = 'v1';
export const MAINTENANCE_URL = `${AST_URL}maintenance/${MAINTENANCE_CURRENT_VERSION}/`;

export const MAINTENANCE_ITEM_CURRENT_VERSION = 'v1';
export const MAINTENANCE_ITEM_URL = `${AST_URL}maintenance-item/${MAINTENANCE_ITEM_CURRENT_VERSION}/`;

export const SCHEDULE_MAINTENANCE_CURRENT_VERSION = 'v1';
export const SCHEDULE_MAINTENANCE_URL = `${AST_URL}schedule-maintenance/${SCHEDULE_MAINTENANCE_CURRENT_VERSION}/`;

export const DISPOSAL_CURRENT_VERSION = 'v1';
export const DISPOSAL_URL = `${AST_URL}disposal/${DISPOSAL_CURRENT_VERSION}/`;

export const DISPOSAL_ITEM_CURRENT_VERSION = 'v1';
export const DISPOSAL_ITEM_URL = `${AST_URL}disposal-item/${DISPOSAL_ITEM_CURRENT_VERSION}/`;

export const DISPOSAL_RECORD_CURRENT_VERSION = 'v1';
export const DISPOSAL_RECORD_URL = `${AST_URL}disposal-record/${DISPOSAL_RECORD_CURRENT_VERSION}/`;

export const LEASE_CURRENT_VERSION = 'v1';
export const LEASE_URL = `${AST_URL}lease-item/${LEASE_CURRENT_VERSION}/`;

export const LEASE_TYPE_CURRENT_VERSION = 'v1';
export const LEASE_TYPE_URL = `${AST_URL}lease-type/${LEASE_TYPE_CURRENT_VERSION}/`;

export const LEASE_AREA_CURRENT_VERSION = 'v1';
export const LEASE_AREA_URL = `${AST_URL}lease-area/${LEASE_AREA_CURRENT_VERSION}/`;

export const RENT_CURRENT_VERSION = 'v2';
export const RENT_URL = `${AST_URL}rent/${RENT_CURRENT_VERSION}/`;

export const RENT_ITEMS_CURRENT_VERSION = 'v2';
export const RENT_ITEMS_URL = `${AST_URL}rent-items/${RENT_ITEMS_CURRENT_VERSION}/`;

export const RATE_TYPE_CURRENT_VERSION = 'v2';
export const RATE_TYPE_URL = `${AST_URL}rate-type/${RATE_TYPE_CURRENT_VERSION}/`;

export const ASSET_TAGGING_CURRENT_VERSION = 'v1';
export const ASSET_TAGGING_URL = `${AST_URL}asset-tagging/${ASSET_TAGGING_CURRENT_VERSION}/`;

export const PENDING_APPROVAL = 'pending-approval';
export const APPROVE = 'approve';
export const DECOMMISSION = 'decommission';
export const REJECT = 'reject';
export const REQUEST = 'request';
export const SEND_ASSETS = 'send-assets';
export const GET_ASSETS = 'get-assets';
export const GET_ISSUABLE_ASSETS = 'get-issuable-assets';
export const ASSIGN_ITEMS = 'assign-items';
export const REMOVE_ASSIGNMENT = 'remove-assignment';
export const GET_SUMMARY_BY_COMMITTEE_OID = 'get-summary-by-committee-oid';


export const DIRECT_OUT_SUMMARY_CURRENT_VERSION = 'v1';
export const DIRECT_OUT_URL = `${AST_URL}direct-out/${DIRECT_OUT_SUMMARY_CURRENT_VERSION}/`;
export const CREATE_DIRECT_OUT_URL = 'create-direct-out';
export const APPROVE_DIRECT_OUT = 'approve-direct-out';

export const STORE_TRANSFER_CURRENT_VERSION = 'v1';
export const STORE_TRANSFER_URL = `${AST_URL}store-transfer/${STORE_TRANSFER_CURRENT_VERSION}/`;
export const CREATE_STORE_TRANSFER_URL = 'create-store-transfer';

export const COURIER_CURRENT_VERSION = 'v1';
export const COURIER_URL = `${AST_URL}courier/${COURIER_CURRENT_VERSION}/`;
export const CREATE_COURIER_URL = 'create-courier';

export const STORE_TRANSFER_RECEIVE_CURRENT_VERSION = 'v1';
export const STORE_TRANSFER_RECEIVE_URL = `${AST_URL}store-transfer-receive/${STORE_TRANSFER_RECEIVE_CURRENT_VERSION}/`;

export const VEHICLE_STORE_MAPPING_CURRENT_VERSION = 'v1';
export const VEHICLE_STORE_MAPPING_URL = `${AST_URL}vehicle-store-mapping/${VEHICLE_STORE_MAPPING_CURRENT_VERSION}/`;
export const UPDATE_STORE_VEHICLE_STORE_MAPPING_URL = 'update-vehicle-store-mapping';
export const GET_VEHICLE_CATAGORY_OIDS =  'get-vehicle-catagory-oids';

export const VEHICLE_ADD_CURRENT_VERSION = 'v1';
export const VEHICLE_ADD_URL = `${AST_URL}vehicle-add/${VEHICLE_ADD_CURRENT_VERSION}/`;
export const CREATE_VEHICLE_ADD_SUMMARY_URL = 'vehicle-add-summary';
export const VEHICLE_ADD_SUMMARY_FOR_ASSET_PATH = 'vehicle-add-summary-for-asset';
export const VEHICLE_INACTIVE_PATH = 'vehicle-in-active';
export const VEHICLE_AVAILABLE_ASSET_V1_RESOURCE = 'vehicle-available-asset/v1/';

export const VEHICLE_REQUISITION_CURRENT_VERSION = 'v1';
export const VEHICLE_REQUISITION_URL = `${AST_URL}vehicle-requisition/${VEHICLE_REQUISITION_CURRENT_VERSION}/`;
export const CREATE_VEHICLE_REQUISITION = 'create-vehicle-requisition-summary';


export const VEHICLE_CURRENT_VERSION = 'v1';
export const VEHICLE_URL = `${AST_URL}vehicle/${VEHICLE_CURRENT_VERSION}/`;
export const GET_BY_STORE_WITH_DESCRIPTION_URL = 'get-by-store-with-description';

export const VEHICLE_ASSIGNMENT_CURRENT_VERSION = 'v1';
export const VEHICLE_ASSIGNMENT_URL = `${AST_URL}vehicle-assignment/${VEHICLE_ASSIGNMENT_CURRENT_VERSION}/`;
export const VEHICLE_RETURN_URL = 'return';
export const GET_ALL_VEHICLE = 'get-all-vehicles';
export const GET_ALL_VEHICLE_BY_ITEM_AND_STORE = 'get-all-vehicles-by-store-and-item';
export const GET_ASSIGNMENT_BY_VEHICLE_REQUISITION_OID = 'get-assignment-by-vehicle-requisition-oid';
export const GET_VEHICLE_COUNT_BY_STORE = 'get-vehicle-count-by-store';
export const GET_VEHICLE_TAGS = 'get-vehicle-tags';
export const AVAILABLE_DRIVER = 'available-driver';
export const CANCEL_ASSIGNMENT = 'cancel-assignment';



export const VEHICLE_CASE_CURRENT_VERSION = 'v1';
export const VEHICLE_CASE_URL = `${AST_URL}vehicle-case/${VEHICLE_CASE_CURRENT_VERSION}/`;
export const CREATE_VEHICLE_CASE = 'create-vehicle-case';
export const UPDATE_VEHICLE_CASE = 'update-vehicle-case';

export const VEHICLE_REPORT_CURRENT_VERSION = 'v1';
export const VEHICLE_REPORT_URL = `${AST_URL}vehicle-report/${VEHICLE_REPORT_CURRENT_VERSION}/`;
export const GET_CASE_REPORT = 'get-case-report';
export const GET_ISSUE_REPORT = 'get-issue-report';
export const GET_REQ_BY_EMPLOYEE_REPORT = 'get-req-by-employee-report';

export const APPROVE_FOR_STORE_CURRENT_VERSION = 'v1';
export const APPROVE_FOR_STORE_URL = `${AST_URL}approve-for-store/${APPROVE_FOR_STORE_CURRENT_VERSION}/`;

export const STOCK_LOT_CURRENT_VERSION = 'v1';
export const STOCK_LOT_URL = `${AST_URL}stock-lot/${STOCK_LOT_CURRENT_VERSION}/`;

export const UNTAGGED_INSPECTION_ITEM_CURRENT_VERSION = 'v1';
export const UNTAGGED_INSPECTION_ITEM_URL = `${AST_URL}untagged-inspection-item/${UNTAGGED_INSPECTION_ITEM_CURRENT_VERSION}/`;

export const TRANSACTION_CURRENT_VERSION = 'v1';
export const TRANSACTION_URL = `${AST_URL}transaction/${TRANSACTION_CURRENT_VERSION}/`;

export const ASSET_DESCRIPTION_CURRENT_VERSION = 'v1';
export const ASSET_DESCRIPTION_URL = `${AST_URL}asset-description/${ASSET_DESCRIPTION_CURRENT_VERSION}/`;

export const ITEM_GROUP_ATTRIBUTE_MAPPING_CURRENT_VERSION = 'v1';
export const ITEM_GROUP_ATTRIBUTE_MAPPING_ITEM_URL = `${AST_URL}item-group-attribute/${ITEM_GROUP_ATTRIBUTE_MAPPING_CURRENT_VERSION}/`;

export const GET_BY_INSPECTION_URL = 'get-by-inspection-assignment-oid/';
export const GET_BY_MATERIAL_RECEPTION_URL = 'get-by-direct-in-create-oid/';

export const EXISTING_ISSUE_CURRENT_VERSION = 'v1';
export const EXISTING_ISSUE_URL = `${AST_URL}opening-stock-existing-issue/${EXISTING_ISSUE_CURRENT_VERSION}/`;
export const EXISTING_ISSUE_GET_LIST_URL = EXISTING_ISSUE_URL + 'get-list';

export const REQUISITION_CURRENT_VERSION = 'v1';
export const REQUISITION_URL = `${AST_URL}requisition/${REQUISITION_CURRENT_VERSION}/`;

export const ENTITLEMENT_CURRENT_VERSION = 'v1';
export const ENTITLEMENT_URL = `${AST_URL}entitlement/${ENTITLEMENT_CURRENT_VERSION}/`;

export const REQUISITION_SUMMARY_CURRENT_VERSION = 'v1';
export const REQUISITION_SUMMARY_URL = `${AST_URL}requisition-summary/${REQUISITION_SUMMARY_CURRENT_VERSION}/`;

export const REQUISITION_APPROVAL_SUMMARY_CURRENT_VERSION = 'v1';
export const REQUISITION_APPROVAL_SUMMARY_URL = `${AST_URL}requisition-approval-summary/${REQUISITION_APPROVAL_SUMMARY_CURRENT_VERSION}/`;

export const DIRECT_IN_CURRENT_VERSION = 'v1';
export const DIRECT_IN_URL = `${AST_URL}direct-in/${DIRECT_IN_CURRENT_VERSION}/`;

export const DIRECT_IN_ITEM_CURRENT_VERSION = 'v1';
export const DIRECT_IN_ITEM_URL = `${AST_URL}direct-in/${DIRECT_IN_ITEM_CURRENT_VERSION}/`;

export const DIRECT_IN_SUMMARY_CURRENT_VERSION = 'v1';
export const DIRECT_IN_SUMMARY_URL = `${AST_URL}direct-in-summary/${DIRECT_IN_SUMMARY_CURRENT_VERSION}/`;

export const REQUISITION_APPROVAL_CURRENT_VERSION = 'v1';
export const REQUISITION_APPROVAL_URL = `${AST_URL}requisition-approval/${REQUISITION_APPROVAL_CURRENT_VERSION}/`;

export const REVIEW_ACTION_CURRENT_VERSION = 'v1';
export const REVIEW_ACTION_URL = `${AST_URL}review-action/${REVIEW_ACTION_CURRENT_VERSION}/`;

export const REQUISITION_PURPOSE_CURRENT_VERSION = 'v1';
export const REQUISITION_PURPOSE_URL = `${AST_URL}requisition-purpose/${REQUISITION_PURPOSE_CURRENT_VERSION}/`;

export const REQUISITION_CARRIER_CURRENT_VERSION = 'v1';
export const REQUISITION_CARRIER_URL = `${AST_URL}requisition-carrier/${REQUISITION_CARRIER_CURRENT_VERSION}/`;

export const ASSET_REPORT_CURRENT_VERSION = 'v1';
export const ASSET_REPORT_URL = `${AST_URL}asset-report/${ASSET_REPORT_CURRENT_VERSION}/`;

/**************************** </ASSET> ****************************/

/**************************** </HRM-PIM> ****************************/

export const EMPLOYEE_CURRENT_VERSION = 'v1';
export const EMPLOYEE_URL = `${HRM_PIM_URL}employee/${EMPLOYEE_CURRENT_VERSION}/`;



/**************************** </HRM-PIM> ****************************/

/**************************** </PRC-CORE-PROCURE> ****************************/

export const PURCHASE_ORDER_CURRENT_VERSION = 'v1';
export const PURCHASE_ORDER_URL = `${PRC_URL}core-procure/purchase-order/${PURCHASE_ORDER_CURRENT_VERSION}/`;
export const GET_OPM_LIST_PURCHASE_ORDER_URL = 'get-opm-list-by-item-setup-types';
export const GET_OPM_LIST_BY_STORE_PURCHASE_ORDER_URL = 'get-opm-list-by-store';
export const GET_RECEIVED_PURCHASE_ORDER_LIST_BY_STORE_PATH_URL = 'get-received-opm-list-by-store';
export const GET_OPM_BY_OID_PURCHASE_ORDER_URL = 'get-by-opm-oid-by-item-setup-types';

export const MATERIAL_RECEIVED_CURRENT_VERSION = 'v1';
export const MATERIAL_RECEIVED_URL = `${PRC_URL}core-procure/material-received/${MATERIAL_RECEIVED_CURRENT_VERSION}/`;
export const GET_MATERIAL_RECEIVED_LIST_BY_STORE_AND_FISCAL_YEAR_URL = 'get-material-received-list-by-store-and-fiscal-year-oid';
export const CREATE_MATERIAL_RECEIVED_URL = 'create';

export const INVOICE_CURRENT_VERSION = 'v1';
export const INVOICE_URL = `${PRC_URL}core-procure/purchase-order-receive-detail/${INVOICE_CURRENT_VERSION}/`;
export const GET_INVOICE_LIST_BY_STORE_AND_PURCHASE_ORDER_URL = 'get-by-opm-and-store';

/**************************** </PRC-CORE-PROCURE> ****************************/

/**************************** </CATALOGUE> ****************************/

export const ITEM_CATEGORY_URL = `${CATALOGUE_URL}category/getByItemSetupType`;
export const ITEM_CATEGORY_WITH_MAPPING_URL = `${CATALOGUE_URL}category/getByItemSetupTypeWithMapping`;
export const ITEM_GROUP_URL = `${CATALOGUE_URL}itemSetup/`;
export const ITEM_URL = `${CATALOGUE_URL}item/`;
export const UOM_URL = `${CATALOGUE_URL}unit/`;

/**************************** </CATALOGUE> ****************************/

/**************************** </HRM-EMP> ****************************/

export const EMPLOYEE_OFFICE_CURRENT_VERSION = 'v1';
export const EMPLOYEE_OFFICE_URL = `${HRM_PIM_URL}employee-office/${EMPLOYEE_CURRENT_VERSION}/`;

/**************************** </HRM-EMP> ****************************/

/**************************** <CMN-ORGANOGRAM> ****************************/

export const GET_BY_OFFICE_URL = 'get-by-office-oid';

export const GET_SUMMARY_BY_OFFICE_UNIT_URL = 'get-summary-by-office-unit-oid';

export const OFFICE_CURRENT_VERSION = 'v1';
export const OFFICE_URL = `${CMN_ORGANOGRAM_URL}office/${OFFICE_CURRENT_VERSION}/`;

export const GET_BY_ROOT_AND_LAYER_URL = 'get-by-root-and-layer';
export const GET_ROOTS_URL = 'get-roots';

export const OFFICE_LAYER_CURRENT_VERSION = 'v1';
export const OFFICE_LAYER_URL = `${CMN_ORGANOGRAM_URL}office-layer/${OFFICE_LAYER_CURRENT_VERSION}/`;

export const OFFICE_UNIT_POST_CURRENT_VERSION = 'v1';
export const OFFICE_UNIT_POST_URL = `${CMN_ORGANOGRAM_URL}office-unit-post/${OFFICE_UNIT_POST_CURRENT_VERSION}/`;

export const OFFICE_UNIT_CURRENT_VERSION = 'v1';
export const OFFICE_UNIT_URL = `${CMN_ORGANOGRAM_URL}office-unit/${OFFICE_UNIT_CURRENT_VERSION}/`;


/**************************** </CMN-ORGANOGRAM> ****************************/

/**************************** </AUTH_SERVICE> ****************************/

export const USER_MANAGEMENT_CURRENT_VERSION = 'v1';
export const USER_MANAGEMENT_URL = `${AUTH_SERVICE_URL}user-management/${USER_MANAGEMENT_CURRENT_VERSION}/`;

/**************************** </HRM-EMP> ****************************/


/**************************** </CMN-NOTIFICATION> ****************************/

export const GET_ALL_NOTIFICATION_URL = `${NOTIFICATION_URL}get-all-notification`;
export const CHANGE_STATUS_URL = `${NOTIFICATION_URL}notification/change-status`;
export const GET_COUNT_URL = `${NOTIFICATION_URL}get-notification-count`;

/**************************** </CMN-NOTIFICATION> ****************************/

/**************************** </BCC-INVENTORY> ****************************/

export const STORE_GET_LIST = `${INV_URL}store`;
export const STORE_ITEM_MAPPING = `${INV_URL}store-item-mapping/`;
export const ITEM_STORE_MAPPINGS_URL = `${INV_URL}store-item-mapping/getMappedItemByStore`;
export const ITEM_SETUP_BY_STORE_URL = `${INV_URL}store-item-mapping/getMappedItemSetupByStore`;
export const STORE_BY_EMPLOYEE_OID_GET_LIST = `${INV_URL}employee/store-by-employee/`;
export const STORE_BY_OFFICE_OID_GET_LIST = `${INV_URL}store/office/`;
export const STORE_BY_ITEM_SET_UP_ID = `${INV_URL}store/getStoresByItemSetupId/`;

/**************************** </BCC-INVENTORY> ****************************/

/**************************** </BCC-INVENTORY-ENTITLEMENT> ****************************/

export const ISSUED_ENTITLEMENT_CURRENT_VERSION = 'v1';
export const GET_ISSUED_ENTITLEMENT = `${AST_URL}issued-entitlement/${ISSUED_ENTITLEMENT_CURRENT_VERSION}/`;

/**************************** </BCC-INVENTORY-ENTITLEMENT> ****************************/


/**************************** </CMN-GLOBAL> ****************************/
const COMMITTEE_BASE_URL = `${CMN_GLOBAL_URL}committee/v1/`;
const COMMITTEE_MEMBER_BASE_URL = `${CMN_GLOBAL_URL}committee-member/v1/`;
export const FISCAL_YEAR_VERSION = `v1`;
const FISCAL_YEAR_BASE_URL = `${CMN_GLOBAL_URL}fiscal-year/${FISCAL_YEAR_VERSION}/`;
export const COMMITTEE_LIST_URL = `${COMMITTEE_BASE_URL}get-by-module-name-office-oid`;
export const COMMITTEE_BY_OID_URL = `${COMMITTEE_BASE_URL}get-by-oid`;
export const FISCAL_YEAR_LIST_URL = `${FISCAL_YEAR_BASE_URL}get-list`;
export const COMMITTEE_MEMBER_LIST_URL = `${COMMITTEE_MEMBER_BASE_URL}get-list`;
export const PARTY_CURRENT_VERSION = 'v1';
export const PARTY_BASE_URL = `${CMN_GLOBAL_URL}party-facility/${PARTY_CURRENT_VERSION}/`;
export const GET_BY_PARTY_ROLE_OID_URL = `${PARTY_BASE_URL}get-by-party-role-oid`;
export const PARTY_TYPE_COURIER = '7601e522-9821-4aaf-bae9-3bd39769ccd3';
export const PARTY_TYPE_LEASER = '7601e523-9821-4aaf-bae9-3bd39769ccd4';


/**************************** </CMN-GLOBAL> ****************************/


/**************************** <REPORT> ****************************/
export const MATERIAL_RECEPTION_REPORT_URL = `${REPORT_URL}ast/material-reception/`;

export const GET_QR_REPORT = 'asset-list-for-tagging-QR';

export const GET_QR_REPORT_VERSION = 'v1';
export const GET_QR_REPORT_URL = `${MATERIAL_RECEPTION_REPORT_URL}asset-tag/${GET_QR_REPORT_VERSION}/`;
export const REQUISITION_SUMMERY_REPORT = `${AST_URL}report/v1/requisition-summary/`;
export const APPROVED_REQUISITION_SUMMERY_REPORT = `${AST_URL}report/v1/approved-requisition-summary/`;
export const ISSUED_REQUISITION_SUMMERY_REPORT = `${AST_URL}report/v1/issued-requisition-summary/`;
export const REQUISITION_BY_EMPLOYEE_REPORT = `${AST_URL}report/v1/requisition-by-employee/`;


export const GET_ITEM_TRACKING = 'item-tracking/';
export const GET_ITEM_TRACKING_VERSION = 'v1';
export const GET_ITEM_TRACKING_URL = `${AST_URL}report/${GET_QR_REPORT_VERSION}/`;

export const GET_TRACKING_HISTORY = 'tracking-history/';
export const GET_TRACKING_HISTORY_VERSION = 'v1';
export const GET_TRACKING_HISTORY_URL = `${AST_URL}report/${GET_TRACKING_HISTORY_VERSION}/`;

export const GET_TRACKING_POSSESSIONS = 'tracking-possessions/';
export const GET_TRACKING_POSSESSIONS_VERSION = 'v1';
export const GET_TRACKING_POSSESSIONS_URL = `${AST_URL}report/${GET_TRACKING_POSSESSIONS_VERSION}/`;

export const GET_ASSET_TAGGING = 'asset-qr-code/';
export const GET_ASSET_TAGGING_VERSION = 'v1';
export const GET_ASSET_TAGGING_URL = `${AST_URL}report/${GET_ASSET_TAGGING_VERSION}/`;

export const GET_RETURN_REQUEST = 'return-request/';
export const GET_RETURN_REQUEST_VERSION = 'v1';
export const GET_RETURN_REQUEST_URL = `${AST_URL}report/${GET_RETURN_REQUEST_VERSION}/`;

export const GET_LEDGER_SUMMARY_REQUEST = 'ledger-summary';
export const GET_LEDGER_SUMMARY_REQUEST_VERSION = 'v1';
export const GET_LEDGER_SUMMARY_REQUEST_URL = `${AST_URL}report/${GET_LEDGER_SUMMARY_REQUEST_VERSION}/`;

export const GET_ASSET_ALL_FILTER_REQUEST = 'get-filtered-assets-with-reception-type';
export const GET_ASSET_ALL_FILTER_REQUEST_VERSION = 'v1';
export const GET_ASSET_ALL_FILTER_REQUEST_URL = `${AST_URL}asset/${GET_ASSET_ALL_FILTER_REQUEST_VERSION}/`;

export const GET_LEDGER_SUMMARY_REPORT = 'ledger-summary-report/';
export const GET_LEDGER_SUMMARY_REPORT_VERSION = 'v1';
export const GET_LEDGER_SUMMARY_REPORT_URL = `${AST_URL}report/${GET_LEDGER_SUMMARY_REPORT_VERSION}/`;

export const GET_LEDGER_DETAIL_REQUEST = 'ledger-details';
export const GET_LEDGER_DETAIL_REQUEST_VERSION = 'v1';
export const GET_LEDGER_DETAIL_REQUEST_URL = `${AST_URL}report/${GET_LEDGER_DETAIL_REQUEST_VERSION}/`;

export const GET_LEDGER_DETAIL_REPORT = 'ledger-details-report/';
export const GET_LEDGER_DETAIL_REPORT_VERSION = 'v1';
export const GET_LEDGER_DETAIL_REPORT_URL = `${AST_URL}report/${GET_LEDGER_DETAIL_REPORT_VERSION}/`;

export const GET_ALL_ASSET_FILTER_REPORT = 'get-asset-all-filter-report/';
export const GET_ALL_ASSET_FILTER_REPORT_VERSION = 'v1';
export const GET_ALL_ASSET_FILTER_REPORT_URL = `${AST_URL}report/${GET_ALL_ASSET_FILTER_REPORT_VERSION}/`;

export const GET_DIRECT_IN_REPORT = 'direct-in/';
export const GET_DIRECT_OUT_REPORT = 'direct-out/';
export const GET_ITEM_WISE_ISSUED_ASSET_REPORT = 'item-wise-issued-asset-report/';
export const GET_EMPLOYEE_AND_UNIT_WISE_ISSUED_ASSET_REPORT = 'employee-and-unit-wise-issued-asset-report/';
export const DISPOSED_ASSET_REPORT = 'disposed-asset-report/';
export const ASSET_LIST_REPORT = 'asset-list-report/';
export const ASSET_LIST_BY_STORE_REPORT = 'asset-list-by-store-report/';
export const GET_ASSETS_ARRANGED_OFFICE_UNIT_WISE_REPORT = `${GET_ASSETS_ARRANGED_OFFICE_UNIT_WISE_PATH}/`;
export const GET_ASSETS_ARRANGED_OFFICE_UNIT_POST_WISE_REPORT = `${GET_ASSETS_ARRANGED_OFFICE_UNIT_POST_WISE_PATH}/`;
export const GET_REPORT_VERSION = 'v1';
export const GET_REPORT_URL = `${AST_URL}report/${GET_REPORT_VERSION}/`;

export const GET_ASSET_DECOMMISSIONED_REPORT = 'asset-decommissioned-report/';
export const GET_ASSET_DECOMMISSIONED_REPORT_VERSION = 'v1';
export const GET_ASSET_DECOMMISSIONED_REPORT_URL = `${AST_URL}report/${GET_ASSET_DECOMMISSIONED_REPORT_VERSION}/`;

export const GET_ASSET_DEPRECIATION_REPORT = 'asset-depreciation-report/';
export const GET_ASSET_DEPRECIATION_REPORT_VERSION = 'v1';
export const GET_ASSET_DEPRECIATION_REPORT_URL = `${AST_URL}report/${GET_ASSET_DEPRECIATION_REPORT_VERSION}/`;

export const GET_ASSET_DEPRECIATION_BY_TAG_REPORT = 'asset-depreciation-by-tag-report/';
export const GET_ASSET_DEPRECIATION_BY_TAG_REPORT_VERSION = 'v1';
export const GET_ASSET_DEPRECIATION_BY_TAG_REPORT_URL = `${AST_URL}report/${GET_ASSET_DEPRECIATION_BY_TAG_REPORT_VERSION}/`;

export const GET_ALL_RENT_REPORT = 'get-all-rent-report/';
export const GET_ALL_RENT_REPORT_VERSION = 'v1';
export const GET_ALL_RENT_REPORT_URL = `${AST_URL}report/${GET_ALL_RENT_REPORT_VERSION}/`;

export const GET_CURRENT_RENT_REPORT = 'get-current-rent-report/';
export const GET_CURRENT_RENT_REPORT_VERSION = 'v1';
export const GET_CURRENT_RENT_REPORT_URL = `${AST_URL}report/${GET_CURRENT_RENT_REPORT_VERSION}/`;

export const GET_VEHICLE_REQUISITION_REPORT = 'get-vehicle-requisition-report/';
export const GET_VEHICLE_REQUISITION_REPORT_VERSION = 'v1';
export const GET_VEHICLE_REQUISITION_REPORT_URL = `${AST_URL}report/${GET_VEHICLE_REQUISITION_REPORT_VERSION}/`;

export const GET_VEHICLE_ISSUE_REPORT = 'get-vehicle-issue-report/';
export const GET_VEHICLE_ISSUE_REPORT_VERSION = 'v1';
export const GET_VEHICLE_ISSUE_REPORT_URL = `${AST_URL}report/${GET_VEHICLE_ISSUE_REPORT_VERSION}/`;

export const GET_VEHICLE_CASE_REPORT = 'get-vehicle-case-report/';
export const GET_VEHICLE_CASE_REPORT_VERSION = 'v1';
export const GET_VEHICLE_CASE_REPORT_URL = `${AST_URL}report/${GET_VEHICLE_CASE_REPORT_VERSION}/`;

export const GET_MY_ASSET_DETAIL_REPORT = 'get-my-asset-detail/';
export const GET_MY_ASSET_DETAIL_REPORT_VERSION = 'v1';
export const GET_MY_ASSET_DETAIL_REPORT_URL = `${AST_URL}report/${GET_MY_ASSET_DETAIL_REPORT_VERSION}/`;

export const GET_LEASE_ITEM_REPORT = 'get-lease-item-report/';
export const GET_LEASE_ITEM_REPORT_VERSION = 'v1';
export const GET_LEASE_ITEM_REPORT_URL = `${AST_URL}report/${GET_LEASE_ITEM_REPORT_VERSION}/`;

export const GET_ASSET_DETAILS_REPORT = 'get-asset-details-report/';
export const GET_ASSET_DETAILS_REPORT_VERSION = 'v1';
export const GET_ASSET_DETAILS_REPORT_URL = `${AST_URL}report/${GET_ASSET_DETAILS_REPORT_VERSION}/`;

export const GET_OPENING_STOCK_REPORT = 'get-opening-stock-report/';
export const GET_OPENING_STOCK_REPORT_VERSION = 'v1';
export const GET_OPENING_STOCK_REPORT_URL = `${AST_URL}report/${GET_OPENING_STOCK_REPORT_VERSION}/`;

export const GET_OPENING_STOCK_FOR_STORE_REPORT = 'get-opening-stock-for-store-report/';
export const GET_OPENING_STOCK_REPORT_FOR_STORE_VERSION = 'v1';
export const GET_OPENING_STOCK_FOR_STORE_REPORT_URL = `${AST_URL}report/${GET_OPENING_STOCK_REPORT_FOR_STORE_VERSION}/`;

/**************************** </REPORT> ****************************/


/************************* </LEASE>******************************/
export const GET_LIST_LEASE_TYPE_URL = `${LEASE_TYPE_URL}${GET_LIST}`;
export const CREATE_LEASE_TYPE_URL = `${LEASE_TYPE_URL}${CREATE_URL}`;
export const EDIT_LEASE_TYPE_URL = `${LEASE_TYPE_URL}${UPDATE_URL}`;
export const DELETE_LEASE_TYPE_URL = `${LEASE_TYPE_URL}${DELETE_URL}`;
export const DETAIL_LEASE_TYPE_URL = `${LEASE_TYPE_URL}${GET_BY_OID_URL}`;

export const GET_LIST_LEASE_AREA_URL = `${LEASE_AREA_URL}${GET_LIST}`;
export const CREATE_LEASE_AREA_URL = `${LEASE_AREA_URL}${CREATE_URL}`;
export const EDIT_LEASE_AREA_URL = `${LEASE_AREA_URL}${UPDATE_URL}`;
export const DELETE_LEASE_AREA_URL = `${LEASE_AREA_URL}${DELETE_URL}`;
export const DETAIL_LEASE_AREA_URL = `${LEASE_AREA_URL}${GET_BY_OID_URL}`;

export const LEASE_ATTRIBUTE_URL = `${AST_URL}lease-attribute/v1/`;
export const GET_LIST_LEASE_ATTRIBUTE_URL = `${LEASE_ATTRIBUTE_URL}${GET_LIST}`;
export const CREATE_LEASE_ATTRIBUTE_URL = `${LEASE_ATTRIBUTE_URL}${CREATE_URL}`;
export const EDIT_LEASE_ATTRIBUTE_URL = `${LEASE_ATTRIBUTE_URL}${UPDATE_URL}`;
export const DELETE_LEASE_ATTRIBUTE_URL = `${LEASE_ATTRIBUTE_URL}${DELETE_URL}`;
export const DETAIL_LEASE_ATTRIBUTE_URL = `${LEASE_ATTRIBUTE_URL}${GET_BY_OID_URL}`;

export const LEASE_TYPE_LEASE_ATTRIBUTE_MAPPING_URL = `${AST_URL}lease-type-lease-attribute-mapping/v1/`;
export const GET_LIST_LEASE_TYPE_LEASE_ATTRIBUTE_MAPPING_URL = `${LEASE_TYPE_LEASE_ATTRIBUTE_MAPPING_URL}${GET_LIST}`;
export const GET_LIST_LEASE_TYPE_LEASE_ATTRIBUTE_MAPPING_BY_LEASE_TYPE_URL = `${LEASE_TYPE_LEASE_ATTRIBUTE_MAPPING_URL}${GET_LIST_BY_LEASE_TYPE}`;
export const CREATE_LEASE_TYPE_LEASE_ATTRIBUTE_MAPPING_URL = `${LEASE_TYPE_LEASE_ATTRIBUTE_MAPPING_URL}${CREATE_URL}`;
export const DELETE_LEASE_TYPE_LEASE_ATTRIBUTE_MAPPING_URL = `${LEASE_TYPE_LEASE_ATTRIBUTE_MAPPING_URL}${DELETE_URL}`;
export const DETAIL_LEASE_TYPE_LEASE_ATTRIBUTE_MAPPING_URL = `${LEASE_TYPE_LEASE_ATTRIBUTE_MAPPING_URL}${GET_BY_OID_URL}`;

export const LEASE_ITEM_URL = `${AST_URL}lease-item/v1/`;
export const GET_LIST_LEASE_ITEM_URL = `${LEASE_ITEM_URL}${GET_LIST}`;
export const GET_LIST_LEASE_ITEM_BY_LEASE_TYPE_AND_LEASE_AREA_URL = `${LEASE_ITEM_URL}${GET_LIST_BY_LEASE_TYPE_AND_LEASE_AREA}`;
export const CREATE_LEASE_ITEM_URL = `${LEASE_ITEM_URL}${CREATE_URL}`;
export const EDIT_LEASE_ITEM_URL = `${LEASE_ITEM_URL}${UPDATE_URL}`;
export const DELETE_LEASE_ITEM_URL = `${LEASE_ITEM_URL}${DELETE_URL}`;
export const DETAIL_LEASE_ITEM_URL = `${LEASE_ITEM_URL}${GET_BY_OID_URL}`;


export const LEASE_ATTRIBUTE_VALUE_URL = `${AST_URL}lease-attribute-value/v1/`;
export const GET_LIST_LEASE_ATTRIBUTE_VALUE_BY_LEASE_ITEM_AND_MAPPING_URL = `${LEASE_ATTRIBUTE_VALUE_URL}${GET_LIST_BY_LEASE_ITEM_AND_LEASE_TYPE_ATTRIBUTE_MAPPING}`;
export const CREATE_LEASE_ATTRIBUTE_VALUE_URL = `${LEASE_ATTRIBUTE_VALUE_URL}${CREATE_URL}`;
export const DETAIL_LEASE_ATTRIBUTE_VALUE_URL = `${LEASE_ATTRIBUTE_VALUE_URL}${GET_BY_OID_URL}`;


export const GET_FILE_LIST_BY_SOURCE_TABLE_AND_REFERENCE = 'get-file-list-by-source-table-and-reference';
export const VERSION_V1 = 'v1';
export const FILE_URL = `${AST_URL}file/${VERSION_V1}/`;

export const DRIVER_URL = `${AST_URL}driver/${VERSION_V1}/`;
export const GET_LIST_DRIVER_URL = `${DRIVER_URL}${GET_LIST}`;
export const CREATE_DRIVER_URL = `${DRIVER_URL}${CREATE_URL}`;
export const EDIT_DRIVER_URL = `${DRIVER_URL}${UPDATE_URL}`;
export const DETAIL_DRIVER_URL = `${DRIVER_URL}${GET_BY_OID_URL}`;

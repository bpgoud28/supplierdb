/**
 * ms-supplier-search
 * Supplier Search Microservice
 *
 * OpenAPI spec version: 1.0.0-SNAPSHOT
 * Contact: destimo-dev@lists.tui.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { EnvelopeSupplierSearchResult } from '../model/envelopeSupplierSearchResult';


import { Configuration } from '../configuration';


export interface SupplierSearchControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;


    /**
    * Perform a search for a supplier
    * This can only be done by an authenticated user. Example for parameter term: HOTEL
    * @param accommodationChain Accommodation Chain (not supported yet)
    * @param accommodationId Accommodation ID (partially supported)
    * @param accommodationName Accommodation Name (partially supported)
    * @param complianceStatus Compliance Check Status
    * @param geolocation geolocation (now only country supported)
    * @param negotiationGroupLabel Negotiation Group Label
    * @param page which page should be deliviered (default 0 first)
    * @param pageSize page size of intended result (default 50)
    * @param supplierId Supplier Reference Number
    * @param supplierName Supplier Name
    * @param supplierStatus Supplier Status
    */
// tslint:disable-next-line:max-line-length
searchSuppliersUsingGET(accommodationChain?: string, accommodationId?: string, accommodationName?: string, complianceStatus?: 'NOT_CHECKED' | 'CLEAR' | 'IN_PROGRESS' | 'UNDER_REVIEW' | 'UNDER_INVESTIGATION' | 'CONDITIONAL_ACCEPTANCE' | 'REJECTED', geolocation?: string, negotiationGroupLabel?: string, page?: number, pageSize?: number, supplierId?: string, supplierName?: string, supplierStatus?: 'DRAFT' | 'VALID' | 'ACCEPTED' | 'UNDER_INVESTIGATION' | 'NONVIABLE' | 'DO_NOT_USE', extraHttpRequestParams?: any): Observable<EnvelopeSupplierSearchResult>;

}
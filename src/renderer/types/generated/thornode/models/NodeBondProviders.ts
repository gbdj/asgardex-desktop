// tslint:disable
/**
 * Thornode API
 * Thornode REST API.
 *
 * The version of the OpenAPI document: 1.89.0
 * Contact: devs@thorchain.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    NodeBondProvider,
} from './';

/**
 * @export
 * @interface NodeBondProviders
 */
export interface NodeBondProviders {
    /**
     * @type {string}
     * @memberof NodeBondProviders
     */
    node_address?: string;
    /**
     * @type {string}
     * @memberof NodeBondProviders
     */
    node_operator_fee?: string;
    /**
     * @type {NodeBondProvider}
     * @memberof NodeBondProviders
     */
    providers?: NodeBondProvider;
}

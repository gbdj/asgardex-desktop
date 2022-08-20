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
    Coin,
} from './';

/**
 * @export
 * @interface TxOutItem
 */
export interface TxOutItem {
    /**
     * @type {string}
     * @memberof TxOutItem
     */
    chain: string;
    /**
     * @type {string}
     * @memberof TxOutItem
     */
    to_address: string;
    /**
     * @type {string}
     * @memberof TxOutItem
     */
    vault_pub_key?: string;
    /**
     * @type {Coin}
     * @memberof TxOutItem
     */
    coin: Coin;
    /**
     * @type {string}
     * @memberof TxOutItem
     */
    memo?: string;
    /**
     * @type {Array<Coin>}
     * @memberof TxOutItem
     */
    max_gas: Array<Coin>;
    /**
     * @type {number}
     * @memberof TxOutItem
     */
    gas_rate?: number;
    /**
     * @type {string}
     * @memberof TxOutItem
     */
    in_hash?: string;
    /**
     * @type {string}
     * @memberof TxOutItem
     */
    out_hash?: string;
    /**
     * @type {number}
     * @memberof TxOutItem
     */
    height: number;
}

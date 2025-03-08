import React from "react";

import freighterApi from "@stellar/freighter-api";
import Payment from "./paymentPage";
const ConnectWallet = async () => {

    const isAppConnected = await freighterApi.isConnected();
    console.log({ isAppConnected });
    Payment.nameEmailSave


    if (isAppConnected.isConnected) {
        const isAppAllowed = await freighterApi.isAllowed();
        if (!isAppAllowed.isAllowed) {
            await freighterApi.setAllowed();
        }
        if (isAppAllowed.isAllowed) {
            const retrievePublicKey = async () => {
                const addressObj = await freighterApi.getAddress();

                if (addressObj.error) {
                    return addressObj.error;
                } else {
                    return addressObj.address;
                }
            };

            const result = await retrievePublicKey();
            console.log(result);

        }
        const retrieveNetwork = async () => {
            const networkObj = await freighterApi.getNetwork();
          
            if (networkObj.error) {
              return networkObj.error;
            } else {
              return {
                network: networkObj.network,
                networkPassphrase: networkObj.networkPassphrase,
              };
            }
          };
          
          const result = retrieveNetwork();
    }

}

export default ConnectWallet;

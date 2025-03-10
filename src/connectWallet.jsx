import React from "react";

import freighterApi from "@stellar/freighter-api";

const CheckWalletConnect =async ()=>{
        const isAppAvailable = await freighterApi.isConnected();
        if (isAppAvailable.isConnected) {
            const isAppAllowed = await freighterApi.isAllowed();
            if(isAppAllowed.isAllowed){
                console.log(isAppAllowed.isAllowed);
                
                return true;
            }  
    
    }}
    const ConnectWallet = async () => {
        const isAppAvailable = await freighterApi.isConnected();
        console.log({ isAppAvailable });
    
        if (isAppAvailable.isConnected) {
            const isAppAllowed = await freighterApi.isAllowed();
            
            if (!isAppAllowed.isAllowed) {
                const allowed =  await freighterApi.setAllowed();
     
            if (allowed.isAllowed) {
              return true;
            }
    }
    }
    
    }

export  {CheckWalletConnect, ConnectWallet};

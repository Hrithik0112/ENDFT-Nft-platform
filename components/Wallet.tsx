import React from "react";

const Wallet = () => {
  return (
    <div className="flex flex-col justify-center max-w-[1100px] h-56 mt-14 mx-auto gap-8">
      {/* upeer */}
      <div className="h-20 flex justify-between items-center">
        <img src="/wallets/MetaMask.png" alt="metamask" width={285} height={80} />
        <img src="/wallets/TrustWallet.png" alt="TrustWallet" width={257} height={76} />
        <img src="/wallets/WalletConnect.png" alt="WalletConnect" width={318} height={53} />
      </div>
      {/* lower */}
      <div className="h-16 flex justify-around ">
        <img src="/wallets/Exodus.png" alt="Exodus" width={285} height={58} />
        <img src="/wallets/Safepal.png" alt="Safepal" width={210} height={60} />
      </div>
    </div>
  );
};

export default Wallet;

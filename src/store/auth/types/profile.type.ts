interface GetUserProfile {
    _id: string;
    idDetails: {
      type: string;
      documentNo: string;
      dateOfIssue: string;
      dateOfExpiry: string;
      countryOfIssue: string;
    };
    fx: {
      isDemo: boolean;
      isClient: boolean;
      isIb: boolean;
      liveAcc: any[];
      demoAcc: any[];
      ibMT5Acc: any[];
      ibMT4Acc: any[];
    };
    crypto: {
      isDemo: boolean;
      isClient: boolean;
      isIb: boolean;
    };
    gold: {
      isClient: boolean;
    };
    mm: {
      isClient: boolean;
    };
    corporateInfo: {
      purpose: any[];
      directors: any[];
      shareholders: any[];
    };
    settings: {
      twoFactorAuthEnabled: boolean;
      withdrawType: string;
    };
    city: string;
    state: string;
    callStatus: string;
    passwordUpdated: boolean;
    activated2fa: boolean;
    referral: string;
    language: string;
    stages: {
      kycUpload: boolean;
      kycApproved: boolean;
      kycRejected: boolean;
      madeDeposit: boolean;
      emailVerified: boolean;
      phoneVerified: boolean;
      startTrading: boolean;
      individual: {
        submitProfile: boolean;
      };
      ib: {
        submitProfile: boolean;
        ibQuestionnaire: boolean;
        partnershipAgreement: boolean;
      };
    };
    fatca: string;
    politicallyExposed: string;
    workedInCrypto: string;
    customerType: string;
    isLead: boolean;
    isCorporate: boolean;
    isActive: boolean;
    isBlocked: boolean;
    isDeleted: boolean;
    declarations: string[];
    usCitizen: string;
    profileAvatar: string;
    defaultPortal: string;
    defaultSubPortal: string;
    hasDepositAddress: boolean;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    country: string;
    createdBy: string;
    category: any[];
    source: string;
    tradingFeeId: {
      _id: string;
      isPercentage: boolean;
      isDefault: boolean;
      isActive: boolean;
      title: string;
      wallets: {
        BNB: WalletFees;
        TRX: WalletFees;
        ETH: WalletFees;
        USDT: WalletFees;
      };
      createdBy: string;
      createdAt: string;
      updatedAt: string;
      recordId: number;
      __v: number;
    };
    experience: {
      jobTitle: string;
      employer: string;
    };
    createdAt: string;
    updatedAt: string;
    recordId: number;
    __v: number;
    lastLogin: string;
    twoFactorSecret: {
      ascii: string;
      hex: string;
      base32: string;
      otpauth_url: string;
    };
  }
  
  export interface WalletFees {
    value: string;
    minValue: string;
    minWithdrawal: string;
    maxWithdrawal: string;
  }

  export type { GetUserProfile };

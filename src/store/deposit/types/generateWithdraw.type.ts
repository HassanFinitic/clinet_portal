interface GenerateWithdrawRequest {
  address: string;
  amount: string;
  feePriority: string;
  network: string;
  note: string;
  walletId: string;
  walletType: string;
  customerId: string;
  currency: string;
}
interface GenerateWithdrawalResponse {
  _id: string;
  status: string;
  walletModel: string;
  amount: DecimalValue;
  totalPaid: DecimalValue;
  paid: DecimalValue;
  frozenAmount: DecimalValue;
  currency: string;
  testnet: boolean;
  isApproving: boolean;
  confirmations: number;
  crypto: boolean;
  customerId: CustomerId;
  walletId: WalletInfo;
  walletType: string;
  network: string;
  address: string;
  note: string;
  fee: FeeDetail;
  onChainFee: FeeDetail;
  type: string;
  mFeeGroup: MFeeGroup;
  mFee: MFee;
  createdAt: string;
  updatedAt: string;
  recordId: number;
  __v: number;
  processedBy: string | null;
  transactionRequestId: string;
}

 interface DecimalValue {
  $numberDecimal: string;
}

 interface CustomerId {
  _id: string;
  firstName: string;
  lastName: string;
  category: string;
}

 interface WalletInfo {
  _id: string;
  amount: number;
  freezeAmount: number;
  asset: string;
  assetId: AssetId;
}

 interface AssetId {
  _id: string;
  symbol: string;
  image: string | null;
}

 interface FeeDetail {
  currency: string;
  cost: DecimalValue;
}

 interface MFeeGroup {
  value: DecimalValue;
  isPercentage: boolean;
  minValue: DecimalValue;
  maxValue: DecimalValue;
}

 interface MFee {
  cost: DecimalValue;
  currency: string;
}

export type { GenerateWithdrawRequest, GenerateWithdrawalResponse };

interface Withdrawal {
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
  customerId: Customer;
  walletId: string;
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
  transactionRequestId: string;
  wallet: Wallet;
  asset: Asset;
  feeDetails: FeeDetails;
}

interface DecimalValue {
  $numberDecimal: string;
}

interface Customer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
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

interface Wallet {
  _id: string;
  active: boolean;
  amount: number;
  isCrypto: boolean;
  freezeAmount: number;
  testnet: boolean;
  networks: string[]; // You can type this if you have network structure
  pk: string | null;
  puk: string | null;
  xpub: string | null;
  tatumVirtualId: string | null;
  mnemonic: string | null;
  belongsTo: string;
  asset: string;
  assetId: string;
  recordId: number;
  chainId: string;
  chain: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Asset {
  _id: string;
  disabled: {
    deposit: boolean;
    withdrawal: boolean;
  };
  isCrypto: boolean;
  links: string[]; // You can type this if needed
  active: boolean;
  token: boolean;
  name: string;
  symbol: string;
  description: string;
  markup: string;
  fee: {
    deposit: string;
    withdrawal: string;
  };
  explorerLink: string;
  minAmount: {
    deposit: string;
    withdrawal: string;
  };
  networks: AssetNetwork[];
  createdAt: string;
  updatedAt: string;
  recordId: number;
  __v: number;
  createdBy: string;
  image: string | null;
}

interface AssetNetwork {
  _id: string;
  chainId: string;
  name: string;
}

interface FeeDetails {
  fee: DecimalValue;
  onChainfee: DecimalValue;
}

export type Withdrawals = Withdrawal[];

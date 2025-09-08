interface Chain {
    _id: string;
    name: string;
    isActive: boolean;
    isDeleted: boolean;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
    recordId: number;
    __v: number;
}

export type Chains = Chain[]

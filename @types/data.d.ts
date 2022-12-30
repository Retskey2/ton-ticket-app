type NftCollection = {
    address: string;
    metadata?: any,
    next_item_index: number,
    owner?: {
        address: string;
        icon: string;
        is_scam: boolean;
        name: string;
    },
    raw_collection_content?: string;
}
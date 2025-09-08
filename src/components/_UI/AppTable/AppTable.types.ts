export interface TableColumn<T> {
    key: keyof T | string;
    label: string;
    render?: (row: T) => React.ReactNode;
    align?: "left" | "right" | "center";
    width?: string | number;
}

export interface DataTableProps<T> {
    title?: string | undefined;
    columns: TableColumn<T>[];
    data: T[] | undefined;
    loading?: boolean;
    pagination?: {
        currentPage: number | undefined;
        pageSize: number;
        total: number | undefined;
        onPageChange: (page: number) => void;
    };
}
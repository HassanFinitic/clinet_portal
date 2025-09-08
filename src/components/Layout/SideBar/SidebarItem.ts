export interface SidebarItem {
    page: string;
    link: string;
    icon: React.ReactNode;
    activeIconLight?: React.ReactNode;
    activeIconDark?: React.ReactNode;
    tooltip?: string;
    dropDown?: SidebarItem[];
}

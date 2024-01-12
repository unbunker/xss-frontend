

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: 'Home' },
    {
        title: 'Dashboard',
        icon: "mdi-view-dashboard",
        to: '/dashboard'
    },
    {
        title: 'Blogs',
        icon: "mdi-comment-text",
        to: '/blogs'
    },
    {
        title: 'Transfer funds',
        icon: "mdi-cash",
        to: '/transfer-money'
    }
];

export default sidebarItem;

export const PRODUCT_CATEGORIES = [
    {
        label : "Rooms",
        value :"rooms" as const,
        featured:[
            {
                name:"Featured Spots",
                href: "#",
                imageSrc: "/nav/ui-kits/mixed.jpg"
            },
            {
                name:"La Spots",
                href: "#",
                imageSrc: "/nav/ui-kits/blue.jpg"
            },
            {
                name:"Living Room Spots",
                href: "#",
                imageSrc: "/nav/ui-kits/purple.jpg"
            },
        ]
    },
    {
        label : "Shared Rooms",
        value :"icons" as const,
        featured:[
            {
                name:"Editor Picks",
                href: "#",
                imageSrc: "/nav/icons/picks.jpg"
            },
            {
                name:"New Picks",
                href: "#",
                imageSrc: "/nav/icons/new.jpg"
            },
            {
                name:"New idk",
                href: "#",
                imageSrc: "/nav/icons/bestsellers.jpg"
            },
        ]
    },
]
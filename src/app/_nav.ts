export const navItems = [
    {
        title: true,
        name: 'Components'
    },
    {
        name: 'User',
        url: '/',
        icon: 'icon-people',
        children: [
            {
                name: 'Ajouter un employée',
                url: '/add',
                icon: 'icon-user-follow'
            },
            {
                name: 'Liste des employées',
                url: '/users',
                icon: 'icon-list'
            }
        ]
    },
    {
        name: 'Service',
        url: '/',
        icon: 'icon-star',
        children: [
            {
                name: 'Ajouter un service',
                url: '/addpole',
                icon: 'icon-cursor'
            },
            {
                name: 'Liste des services',
                url: '/poles',
                icon: 'icon-list'
            }
        ]
    },
    {
        name: 'Recherche',
        url: '/',
        icon: 'icon-loop',
        children: [
            {
                name: 'Recherche par nom',
                url: '/findnom',
                icon: 'icon-cursor'
            },
            {
                name: 'Recherche avancé',
                url: '/find',
                icon: 'icon-cursor'
            }
        ]
    }

];
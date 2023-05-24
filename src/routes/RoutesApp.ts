import {IRoute} from "../interfaces/Routes";

class RoutesApp {
    private routes:IRoute[] = [
        {title: 'О сервисе', path: '/about-service', isNavigation: true},
        {title: 'Контакты', path: '/contacts', isNavigation: true},
        {title: 'Обратная связь', path: '/feedback', isNavigation: true},
        {title: 'Политика конфиденциальности', path: '/policy', isNavigation: true}
    ];

    get() {
        return this.routes;
    }

    getNavList() {
        return this.routes.filter((route:IRoute) => {
            if(route.isNavigation) return route;
        })
    }
}

export default new RoutesApp();
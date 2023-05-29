export default function createRouter() {
    const routes = [];
    return {
        addRoute(fragment, component) {
            routes.push({fragment, component});
            return this;
        },
        start() {
            const checkRoutes = () => {
                const currentRoute = routes.find(route => route.fragment === window.location.hash);
                if (currentRoute) {
                    currentRoute.component();
                }
            }
            window.addEventListener("hashchange", checkRoutes);
            checkRoutes();
        },
        navigate(fragment) {
            window.location.hash = fragment;
        }
    };
}
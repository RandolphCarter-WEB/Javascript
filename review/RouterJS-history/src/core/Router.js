export default function createRouter() {
    const routes = [];
    return {
        addRoute(path, { id, data,  component }) {
            routes.push({ path, component, stateData : {id: id, data : data} });
            return this;
        },
        start() {
            const checkRoutes = () => {
                const path = window.location.pathname;
                const currentRoute = routes.find(route => route.path === path);
                if (currentRoute) {
                    currentRoute.component();
                }
            };
            window.addEventListener("popstate", checkRoutes);
            checkRoutes();
        },
        navigate(path) {
            const currentRoute = routes.find(route => route.path === path);
            window.history.pushState(currentRoute.stateData, "", path);
            console.log(currentRoute.stateData);
            this.start();
        }
    };
}
const resolveRoutes = (route) => {
    console.log(route)

    if (route.length <= 10) {
        let validRoute = route === '/' ? route : '/:id';
        console.log(validRoute)
        return validRoute;

    }

    console.log(route)

    return `/${route}`;
    
};

export default resolveRoutes;
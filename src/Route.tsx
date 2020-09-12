import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

// const
import { HOME_ROUTE, PHOTO_ROUTE } from "consts/route";

// components
const Home = lazy(() => import("containers/Home"));
const Photo = lazy(() => import("containers/Photo"));
const NotFound = lazy(() => import("containers/NotFound"));

function RootRoute() {
	return (
		<Switch>
			<Route path={HOME_ROUTE.path} exact component={Home} />
			<Route path={PHOTO_ROUTE.path} component={Photo} />
			<Route component={NotFound} />
		</Switch>
	);
}

export default RootRoute;

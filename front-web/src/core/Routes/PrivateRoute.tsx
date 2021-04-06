import React from 'react';
import { isAllowedByRole, isAuthenticated, Role } from 'core/utils/auth';
import { Redirect, Route } from 'react-router-dom';

type Props = {
	children: React.ReactNode;
	path: string;
	allowedRoutes?: Role[];
	exact?: boolean;
}

const PrivateRoute = ({ children, path, allowedRoutes, exact }: Props) => {
	return (
		<Route
			path={path}
			exact={exact}
			render={({ location }) => {
				if (!isAuthenticated()) {
					return (
						<Redirect
							to={{
								pathname: "/",
								state: { from: location }
							}}
						/>
					)
				} else if (isAuthenticated() && !isAllowedByRole(allowedRoutes)) {
					return (
						<Redirect to={{ pathname: "/movies" }} />
					)
				}

				return children;
			}}
		/>
	);
}

export default PrivateRoute;
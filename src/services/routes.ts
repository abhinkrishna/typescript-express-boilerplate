import { Route } from '../types/route';
import authRoute from './auth/auth.routes';
import pingRoute from './ping/ping.routes';
import userRoute from './users/users.routes';

const allRoutes: Route[] = [
    ...pingRoute,
    ...userRoute,
    ...authRoute,
]

export default allRoutes;
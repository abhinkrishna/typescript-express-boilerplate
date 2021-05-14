import { Route } from '../types/route';
import pingRoute from './ping/ping.routes';

const allRoutes: Route[] = [
    ...pingRoute,
]

export default allRoutes;
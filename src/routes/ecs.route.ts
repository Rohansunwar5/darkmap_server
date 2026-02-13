import { Router } from 'express';
import { asyncHandler } from '../utils/asynchandler';
import isAdminLoggedIn from '../middlewares/isAdminLoggedIn.middleware';
import {
    deleteInfrastructure,
    createInfrastructure,
    startServices,
} from '../controllers/ecs.controller';

const ecsRouter = Router();

// All routes protected by admin middleware
ecsRouter.post('/delete', isAdminLoggedIn, asyncHandler(deleteInfrastructure));
ecsRouter.post('/create', isAdminLoggedIn, asyncHandler(createInfrastructure));
ecsRouter.post('/start-services', isAdminLoggedIn, asyncHandler(startServices));

export default ecsRouter;

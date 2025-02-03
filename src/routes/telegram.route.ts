import { Router } from 'express';
import { asyncHandler } from '../utils/asynchandler';

import isLoggedIn from '../middlewares/isLoggedIn.middleware';
import { additionalChannel, searchChannels, startFirstServices, startSecondServices,  } from '../controllers/telegram.controller';

const telegramRouter = Router();

telegramRouter.post('/search-channels', isLoggedIn, asyncHandler(searchChannels));
telegramRouter.post('/additional-channel', isLoggedIn, asyncHandler(additionalChannel));
telegramRouter.post('/channel-messages', isLoggedIn, asyncHandler(additionalChannel));
telegramRouter.post('/start-services1', isLoggedIn, asyncHandler(startFirstServices));
telegramRouter.post('/start-services2', isLoggedIn, asyncHandler(startSecondServices));

export default telegramRouter;

import { Router } from 'express';
import { asyncHandler } from '../utils/asynchandler';
import isLoggedIn from '../middlewares/isLoggedIn.middleware';

import { additionalChannel, analyzeChannel, channelMessages, searchChannels, startFirstServices, startSecondServices } from '../controllers/telegram.controller';

const telegramRouter = Router();

telegramRouter.post('/search-channels', isLoggedIn, asyncHandler(searchChannels));
telegramRouter.post('/additional-channel', isLoggedIn, asyncHandler(additionalChannel));
telegramRouter.post('/channel-messages', isLoggedIn, asyncHandler(channelMessages));
telegramRouter.post('/start-services1',  asyncHandler(startFirstServices));
telegramRouter.post('/start-services2', asyncHandler(startSecondServices));
telegramRouter.post('/analyze-channel', isLoggedIn, asyncHandler(analyzeChannel));

export default telegramRouter;

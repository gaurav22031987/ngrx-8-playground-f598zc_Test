import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LoggerState } from './logger.state';

const featureLogger = createFeatureSelector<LoggerState>('logger');

export const infoMessage = createSelector(
  featureLogger,
  logger => logger.infoMessages
);
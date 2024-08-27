/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestApplication, NestFactory } from '@nestjs/core';
import { Logger, VersioningType } from '@nestjs/common';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app: NestApplication = await NestFactory.create(AppModule, {
    abortOnError: false,
  });
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`==========================================================`);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(`==========================================================`);
}

bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,POST',
  });
  await app.listen(environment.PORT);
}
bootstrap();

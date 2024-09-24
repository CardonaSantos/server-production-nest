import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);
  app.enableCors();

  //CAMBIAR EL PUERTO PARA PRODUCCCION
  // await app.listen(3000);
  await app.listen(port);
}
bootstrap();

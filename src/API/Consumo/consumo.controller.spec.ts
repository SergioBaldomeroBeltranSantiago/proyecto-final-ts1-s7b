import { Test, TestingModule } from '@nestjs/testing';
import { ConsumoController } from './consumo.controller';

describe('ConsumoController', () => {
  let controller: ConsumoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsumoController],
    }).compile();

    controller = module.get<ConsumoController>(ConsumoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

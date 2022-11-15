import { Test, TestingModule } from '@nestjs/testing';
import { PagoControllerController } from './pago-controller.controller';

describe('PagoControllerController', () => {
  let controller: PagoControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PagoControllerController],
    }).compile();

    controller = module.get<PagoControllerController>(PagoControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

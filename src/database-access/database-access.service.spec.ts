import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseAccessService } from './database-access.service';

describe('DatabaseAccessService', () => {
  let service: DatabaseAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseAccessService],
    }).compile();

    service = module.get<DatabaseAccessService>(DatabaseAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

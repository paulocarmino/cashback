
import { Program } from '@prisma/client';
import { subtractWithPercentage, calculeCashbackHandler } from './cashbackUtils'

it('deve fazer a subtração com porcentagem corretamente', () => {
  const value = 100;
  const percentage = 20;

  const result = subtractWithPercentage(value, percentage)

  expect(result).toEqual(80);
});

it('deve retornar o valor do cashback corretamente', () => {
  const program: Program = {
    id: 1,
    productIdentifier: "cashback-iphone-100",
    value: 20,
    status: "ENABLED",
    type: "VALUE",
    startDate: new Date('2022-07-30T03:00:00.000Z'),
    endDate: new Date('2022-07-30T03:00:00.000Z'),
    createdAt: new Date('2022-07-30T03:00:00.000Z')
  }

  const result = calculeCashbackHandler(program, 1000)

  expect(result).toEqual(20)
});

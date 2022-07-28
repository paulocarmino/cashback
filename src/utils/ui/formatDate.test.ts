import formatDate from './formatDate'

it('deve trazer a data formatada corretamente', () => {
  const date = new Date('2022-07-30T03:00:00.000Z')
  const formattedDate = formatDate(date)

  expect(formattedDate).toEqual('30/07/2022');
});

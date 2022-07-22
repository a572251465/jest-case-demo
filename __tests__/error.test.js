const genError = () => {
  throw new Error('test')
}
describe('Test Error', () => {
  test('error', () => {
    expect(genError).toThrow()
  })
})

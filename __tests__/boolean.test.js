describe('Test boolean', () => {
  test('case 1', () => {
    expect(true).toBeTruthy()
  })

  test('case 2', () => {
    expect(false).toBeFalsy()
  })

  test('case 3 not', () => {
    expect(false).not.toBeTruthy()
  })
})

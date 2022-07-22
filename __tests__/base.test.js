describe('base', () => {
  test('null', () => {
    expect(null).toBeNull()
  })

  test('undefined', () => {
    expect(undefined).toBeUndefined()
  })

  test('match number', () => {
    expect(1).toBe(1)
  })
})

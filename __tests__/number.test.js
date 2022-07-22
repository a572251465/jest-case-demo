describe('Test Number', () => {
  // 表示数字相关 大的处理
  test('toBeGreaterThan', () => {
    expect(10).toBeGreaterThan(9)
  })

  // >= 相关处理
  test('toBeGreaterThanOrEqual', () => {
    expect(10).toBeGreaterThanOrEqual(10)
  })

  // <
  test('toBeLessThan', () => {
    expect(10).toBeLessThan(11)
  })

  // <=
  test('', () => {
    expect(10).toBeLessThanOrEqual(10)
  })

  // 进行浮点类型计算
  test('toBeCloseTo', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3)
  })
})

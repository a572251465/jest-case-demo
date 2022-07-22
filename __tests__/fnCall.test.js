import { runCallback } from '../src/runCallback'

describe('Test Fn Call', () => {
  test('fn called', () => {
    // 生成mock 函数
    const cb = jest.fn()
    runCallback(cb)
    expect(cb).toBeCalled()
  })

  test('Fn Multiple calls', () => {
    const cb = jest.fn()

    runCallback(cb)
    runCallback(cb)
    expect(cb.mock.calls.length).toBe(2)
  })

  test('Fn call params', () => {
    const cb = jest.fn()

    runCallback(cb)
    expect(cb.mock.calls).toContainEqual(['123'])
  })

  test('Fn Call Returns', () => {
    const cb = jest.fn()
    cb.mockReturnValueOnce('123')

    runCallback(cb)
    expect(cb.mock.results[0].value).toBe('123')
  })
})

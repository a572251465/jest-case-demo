import { fetchData, fetchData1, fetchData2 } from '../src/getData'

describe('async', (done) => {
  // test('case 1 fn', () => {
  //   fetchData((data) => {
  //     expect(data).toEqual({ success: true })
  //     done()
  //   })
  // })

  test('case 2 promise', async () => {
    // return fetchData1().then((data) => {
    //   expect(data.data).toEqual({ success: true })
    // })
    // return expect(fetchData1()).resolves.toMatchObject({
    //   data: { success: true }
    // })
    await expect(fetchData1()).resolves.toMatchObject({
      data: { success: true }
    })
  })

  test('test 404', () => {
    // 表示至少执行一次
    // expect.assertions(1)
    // return fetchData2().catch((e) => {
    //   expect(e.toString().indexOf('404') > -1).toBe(true)
    // })

    return expect(fetchData2()).rejects.toThrow()
  })
})

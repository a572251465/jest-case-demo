import { getData } from '../src/demo'
import axios from 'axios'

jest.mock('axios')
describe('Test Req', () => {
  test('Async Fn', async () => {
    axios.get.mockResolvedValue({ data: 'hello' })
    await getData().then((res) => {
      expect(res).toEqual('hello')
    })
  })
})

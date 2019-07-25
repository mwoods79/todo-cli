import {expect, test} from '@oclif/test'

describe('list todos', () => {
  test
    .stdout()
    .nock('https://jsonplaceholder.typicode.com', api => {
      api.get('/todos?userId=1').reply(200,
        [
          {
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false
          },
          {
            userId: 1,
            id: 2,
            title: 'quis ut nam facilis et officia qui',
            completed: true
          }
        ]
      )
    })
    .command(['list', '--user=1'])
    .it('outputs the todos for a user', ctx => {
      expect(ctx.stdout).to.contain('Completed Title')
      expect(ctx.stdout).to.contain('❌        delectus aut autem')
      expect(ctx.stdout).to.contain('✅        quis ut nam facilis et officia qui')
    })
})

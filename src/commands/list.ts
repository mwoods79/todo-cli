import {Command, flags} from '@oclif/command'
import axios from 'axios'
import {cli} from 'cli-ux'
import * as inquirer from 'inquirer'

type UserResponse = {
  id: number,
  name: string
}

type TodoResponse = {
  id: number,
  title: string,
  completed: boolean
}

export default class List extends Command {
  static description = 'describe the command here'

  static examples = [
    `todo list --user=1
Completed Title
❌        delectus aut autem
✅        quis ut nam facilis et officia qui`
  ]

  static flags = {
    ...cli.table.flags(),
    user: flags.integer({description: 'id of the user you want todos for'})
  }

  async run() {
    const {flags} = this.parse(List)

    let userId = flags.user

    if (!userId) {
      const {data: users} = await axios.get<UserResponse[]>('https://jsonplaceholder.typicode.com/users')
      const choices = users.map(user => {
        return user.name
      })

      let responses: any = await inquirer.prompt([{
        name: 'userName',
        message: 'select a user',
        type: 'list',
        choices
      }])
      const user = users.find(user => responses.userName === user.name)
      userId = user && user.id
    }

    const {data: todos} = await axios.get<TodoResponse[]>(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)

    cli.table(todos, {
      id: {
        header: 'ID',
        extended: true
      },
      completed: {
        get: todo => todo.completed ? '✅' : ' '
      },
      title: {
        minWidth: 7,
      }
    },
      {
        printLine: this.log,
        ...flags
      }
    )
  }
}

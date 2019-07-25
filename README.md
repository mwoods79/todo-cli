todo
====

Easiest todo

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todo.svg)](https://npmjs.org/package/todo)
[![CircleCI](https://circleci.com/gh/mwoods79/todo/tree/master.svg?style=shield)](https://circleci.com/gh/mwoods79/todo/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/todo.svg)](https://npmjs.org/package/todo)
[![License](https://img.shields.io/npm/l/todo.svg)](https://github.com/mwoods79/todo/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todo
$ todo COMMAND
running command...
$ todo (-v|--version|version)
todo/0.0.0 darwin-x64 node-v10.16.0
$ todo --help [COMMAND]
USAGE
  $ todo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todo hello [FILE]`](#todo-hello-file)
* [`todo help [COMMAND]`](#todo-help-command)
* [`todo list`](#todo-list)

## `todo hello [FILE]`

describe the command here

```
USAGE
  $ todo hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ todo hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/mwoods79/todo/blob/v0.0.0/src/commands/hello.ts)_

## `todo help [COMMAND]`

display help for todo

```
USAGE
  $ todo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_

## `todo list`

describe the command here

```
USAGE
  $ todo list

OPTIONS
  -x, --extended     show extra columns
  --columns=columns  only show provided columns (comma-separated)
  --csv              output is csv format
  --filter=filter    filter property by partial string matching, ex: name=foo
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --sort=sort        property to sort by (prepend '-' for descending)
  --user=user        id of the user you want todos for

EXAMPLE
  $ todo list
  ✅Do your work!
  ❌Do some more work!
```

_See code: [src/commands/list.ts](https://github.com/mwoods79/todo/blob/v0.0.0/src/commands/list.ts)_
<!-- commandsstop -->

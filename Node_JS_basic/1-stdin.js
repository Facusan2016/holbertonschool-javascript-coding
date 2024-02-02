console.log('Welcome to Holberton School, what is your name?')
process.stdin.setEncoding('utf8');
process.stdin.on('readable', (stream) => {
  let name = process.stdin.read()
  if (name !== null)
    console.log(`Your name is: ${name.trim()}`)
})

process.on('exit', () => {
  console.log('This important software is now closing')
})


void async function() {
    const {test} = await import('./module')

    console.log('hello %s', test)
}()

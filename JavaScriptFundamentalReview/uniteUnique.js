function uniteUnique(...args) {
  let results = [];

  for (let i=0; i<args.length; i++) {
    const subArg = args[i];

    for(let j=0; j<subArg.length; j++) {
      if(!results.includes(subArg[j])) {
        results.push(subArg[j]);
      }
    }
  }

  return results;
}

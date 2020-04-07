const typewriter = (sentence) => {
  let times = 0;
  for (const char of sentence) {
    times += 1;
    setTimeout(() => process.stdout.write(char),  (times * 50));
  }
};
const sentence = "hello there from lighthouse labs\n";
typewriter(sentence);

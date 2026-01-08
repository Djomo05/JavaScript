const regex = /^first/im;

const multiStr = `First line
Second line
Third line
Fourth line
Fifth line
First line again
`;

console.log(multiStr.match(regex));
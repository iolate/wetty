import { createInterface } from 'readline';

ask('Example: user@host[:22 or -p 22]\nConnect to');

export default function ask(question: string): Promise<string> {
  const r = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise(resolve => {
    r.question(`${question}: `, answer => {
      r.close();
      resolve(answer);
    });
  });
}

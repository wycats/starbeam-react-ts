import { Cell } from "@starbeam/universal";

export class CounterData {
  readonly #counter = Cell(0);
  readonly label: string;

  constructor(label: string) {
    this.label = label;
  }

  increment = () =>
    this.#counter.update((i) => i + 1);

  reset = () => this.#counter.set(0);

  get count(): number {
    return this.#counter.current;
  }
}

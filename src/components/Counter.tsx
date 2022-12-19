import { Component, use } from "@starbeam/react";
import "./Counter.css";
import { CounterData } from "../lib/counter";

export function Counter(): JSX.Element {
  return Component(() => {
    const counters = {
      first: new CounterData("first"),
      second: new CounterData("second"),
    };

    const total = () => {
      const { first, second } = counters;
      return first.count + second.count;
    };

    return () => {
      const { first, second } = counters;

      return (
        <>
          <pre>
            <span>{first.label}</span> +{" "}
            <span>{second.label}</span> ={" "}
            <span>total</span>
          </pre>
          <pre>
            <span>{first.count}</span> +{" "}
            <span>{second.count}</span> ={" "}
            <span>{total()}</span>
          </pre>
          <h3 className="count1">
            {first.label}
          </h3>
          <div className="buttons">
            <button onClick={first.increment}>
              increment
            </button>
            <button onClick={first.reset}>
              reset
            </button>
          </div>
          <h3 className="count2">
            {second.label}
          </h3>
          <div className="buttons">
            <button onClick={second.increment}>
              increment
            </button>
            <button onClick={second.reset}>
              reset
            </button>
          </div>
        </>
      );
    };
  });
}

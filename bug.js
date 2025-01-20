```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. The function passed to setInterval does not capture the latest value of count.
    const intervalId = setInterval(() => {
      console.log(count); // Always logs 0
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```
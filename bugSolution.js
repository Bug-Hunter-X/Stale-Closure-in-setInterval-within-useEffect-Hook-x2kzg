```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Use functional update to access the latest count value
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```
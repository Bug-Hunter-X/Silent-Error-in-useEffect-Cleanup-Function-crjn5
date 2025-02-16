To prevent silent errors, wrap the cleanup logic in a `try...catch` block:

```javascript
useEffect(() => {
  const subscription = someAsyncOperation().subscribe(data => { ... });

  return () => {
    try {
      subscription.unsubscribe();
    } catch (error) {
      console.error('Error in useEffect cleanup:', error);
      // Optionally, add more robust error handling here, such as logging to a service
    }
  };
}, []);
```

This improved version catches and logs any error during cleanup, providing valuable information for debugging.
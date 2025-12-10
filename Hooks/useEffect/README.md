useEffect()=
React Hook that tells React Do some code when (pick one):
1. This component re-renders
2. This component mounts
3. The state of a value

useEffect(function,[dependencies])
1. useEffect(()=>{}) //Runs after every re-renders
2. useEffect(()=>{},[]) //Runs only on mount
3. useEffect(()=>{},[value]) //Runs on mount + when value changes

USES
1. Event Listeners
2. DOM manipulation
3. Subscriptions (real-time updates)
4. Fetching Data from an API
5. Clean up when a component unmounts


https://youtu.be/L-1sP3Ljhsg?si=I0EAYLJN8PSWPgxB

// Import the useSWR hook from the 'swr' library
import useSWR from 'swr';

// Define a fetcher function to handle data fetching
const fetcher = async function(url) {
  // Fetch data from the specified URL
  const data = await fetch(url);

  // Parse the response as JSON
  const json = await data.json();

  // Return the parsed JSON data
  return json;
};

// Example component using the useSWR hook
function Profile() {
  // Use the useSWR hook to fetch data from the specified URL
  const { data, error, isLoading } = useSWR('<https://sum-server.100xdevs.com/todos>', fetcher);

  // Handle different states: loading, error, and successful data fetch
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  // Render the component with the fetched data
  return <div>Hello, you have {data.todos.length} todos!</div>;
}
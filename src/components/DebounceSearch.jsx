import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

function DebounceSearch() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts() {
      if (!debouncedSearch.trim()) {
        setPosts([]);
        setLoading(false);
        setError(null);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();

        const filteredPosts = data.filter((post) =>
          post.title.toLowerCase().includes(
            debouncedSearch.toLowerCase()
          )
        );

        setPosts(filteredPosts);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchPosts();

    return () => controller.abort();
  }, [debouncedSearch]);

  return (
    <div className="space-y-4 p-6">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search post titles..."
        className="border p-2 rounded w-full"
      />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading &&
        !error &&
        posts.map((post) => (
          <article key={post.id} className="border p-3 rounded">
            <h3 className="font-semibold">{post.title}</h3>
          </article>
        ))}

      {!loading && !error && debouncedSearch.trim() && posts.length === 0 && (
        <p>No posts found.</p>
      )}
    </div>
  );
}

export default DebounceSearch;
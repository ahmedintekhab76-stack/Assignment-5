import { useEffect, useState } from "react";

/**
 * Loads the technology catalogue from /data/technologies.json.
 *
 * We use useEffect here (rather than fetching at render time) because
 * fetching is a side effect: it happens once when the component first
 * mounts, not on every render. useState tracks the three states the
 * UI needs to represent: loading, error, and the loaded data.
 */
export default function useTechnologies() {
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch("/data/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technology data");
        }
        return response.json();
      })
      .then((data) => {
        if (isMounted) {
          setTechnologies(data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { technologies, isLoading, error };
}

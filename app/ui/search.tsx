"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams(),
    pathname = usePathname(),
    { replace } = useRouter(),
    handleSearch = useDebouncedCallback((term) => {
      const params = new URLSearchParams(searchParams); // {page: '1', query: 'Delba de Oliveira'}
      params.set("page", "1"); //?page=1 Default to the first page when the user searches for a new term.
      term ? params.set("query", term) : params.delete("query"); //?page=1&query=Delba+de+Oliveira
      console.info("search term", term);
      console.info("params.toString()", params.toString());

      replace(`${pathname}?${params.toString()}`); // ${pathname}?${params.toString()} => /dashboard/invoices?query=Delba+de+Oliveira
    }, 300);
  // useSearchParams- Allows you to access the parameters of the current URL. For example, the search params for this URL /dashboard/invoices?page=1&query=pending would look like this: {page: '1', query: 'pending'}.

  // URLSearchParams is a Web API that provides utility methods for manipulating the URL query parameters. Instead of creating a complex string literal, you can use it to get the params string like ?page=1&query=a

  // As the user types into the search bar, params.toString() translates this input into a URL-friendly format.
  // replace(${pathname}?${params.toString()}) updates the URL with the user's search data. For example, /dashboard/invoices?query=lee if the user searches for "Lee".

  // How Debouncing Works:
  // Trigger Event: When an event that should be debounced (like a keystroke in the search box) occurs, a timer starts.
  // Wait: If a new event occurs before the timer expires, the timer is reset.
  // Execution: If the timer reaches the end of its countdown, the debounced function is executed.
  return (
    <div className="relative flex flex-1 shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()} // searchParams.get("query")?.toString() => Delba de Oliveira It keeps the search term in the input field when the user navigates back to the page.
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}

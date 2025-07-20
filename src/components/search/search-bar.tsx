"use client";

import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { cn } from "@/utils/cn";
import { openSearchModal } from "@/utils/open-search";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Поиск по разделам...",
  className,
}) => {
  const [query, setQuery] = useState("");

  return (
    <div className={cn("relative w-full max-w-xl", className)}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            openSearchModal(query)
          }
        }}
        placeholder={placeholder}
        variant="search"
        size="lg"
        leftIcon={<SearchIcon className="h-5 w-5" />}
        className="rounded-full"
      />
    </div>
  );
}; 
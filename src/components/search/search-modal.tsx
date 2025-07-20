'use client';

import { useEffect, useState, useRef } from 'react';
import { searchNavigation } from '@/lib/navigation';
import { NavigationItem } from '@/types';
import Link from 'next/link';
import { Search as SearchIcon, X } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<NavigationItem[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Keyboard shortcut Ctrl/Cmd + K
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'i';
      if (isCmdK) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Listen to external openSearch event
  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<string>
      setOpen(true)
      if (custom.detail) {
        setQuery(custom.detail)
      }
    }
    window.addEventListener('openSearch', handler as EventListener)
    return () => window.removeEventListener('openSearch', handler as EventListener)
  }, [])

  // Focus input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [open]);

  // Perform search
  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      return;
    }
    const res = searchNavigation(query.trim());
    setResults(res);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/40 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-strong ring-1 ring-gray-200">
        {/* Header */}
        <div className="flex items-center px-6 pt-6">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Начните вводить запрос..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-sm"
            />
          </div>
          <button
            className="ml-4 text-gray hover:text-dark"
            onClick={() => setOpen(false)}
            aria-label="Закрыть поиск"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto mt-4">
          {results.length === 0 && query && (
            <p className="px-6 py-8 text-center text-gray">Ничего не найдено</p>
          )}
          {results.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 hover:bg-light transition-colors"
            >
              <div className="font-medium text-dark">{item.title}</div>
              {item.description && (
                <div className="text-sm text-gray mt-1">{item.description}</div>
              )}
            </Link>
          ))}
        </div>

        <div className="px-6 py-3 border-t text-xs text-gray-500 flex justify-between items-center">
          <span>Нажмите Esc для закрытия</span>
          <span className="flex items-center gap-1 bg-light px-2 py-1 rounded border text-gray-600">
            {navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'} K
          </span>
        </div>
      </div>
    </div>
  );
} 
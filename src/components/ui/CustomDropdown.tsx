"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface DropdownOption {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function CustomDropdown({
  value,
  options,
  onChange,
  placeholder = "Select...",
  icon,
  className = "",
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full h-11 px-3.5 rounded-xl solid-input text-xs font-medium flex items-center justify-between gap-2.5 hover:border-neutral-700 transition-colors text-left bg-neutral-950 border border-neutral-800"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 truncate">
          {icon && <span className="text-neutral-400 shrink-0">{icon}</span>}
          <span className="text-white truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-white" : ""
          }`}
        />
      </button>

      {/* Floating Menu Popover */}
      {isOpen && (
        <div
          className="absolute left-0 right-0 top-full mt-1.5 z-50 p-1.5 rounded-xl bg-neutral-950 border border-neutral-800 shadow-2xl max-h-64 overflow-y-auto no-scrollbar"
          role="listbox"
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSelect(option.value);
                }}
                onClick={() => handleSelect(option.value)}
                className={`w-full px-3 py-2.5 rounded-lg text-xs flex items-center justify-between text-left transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-neutral-900 text-white font-semibold"
                    : "text-neutral-300 hover:text-white hover:bg-neutral-900/80"
                }`}
                role="option"
                aria-selected={isSelected}
              >
                <span className="truncate">{option.label}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-white shrink-0 ml-2" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

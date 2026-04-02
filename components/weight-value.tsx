"use client"

import { useUnit } from "@/lib/unit-context"

interface WeightValueProps {
  grams: number
  className?: string
}

export function WeightValue({ grams, className = "" }: WeightValueProps) {
  const { formatWeight, mounted } = useUnit()

  if (!mounted) {
    return (
      <span className={`inline-block bg-muted animate-pulse rounded ${className}`}>
        <span className="invisible">{grams} g</span>
      </span>
    )
  }

  return <span className={className}>{formatWeight(grams)}</span>
}

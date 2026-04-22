'use client'

import { useMemo, useState } from 'react'

import { GearList } from '@/components/gear-list'
import { SummaryMicroBars } from '@/components/summary-micro-bars'
import { gearLists } from '@/lib/gear-data'

export function GearListSwitcher() {
  const [selectedListName, setSelectedListName] = useState(gearLists[0].name)

  const selectedList = useMemo(
    () => gearLists.find((list) => list.name === selectedListName) ?? gearLists[0],
    [selectedListName]
  )

  return (
    <>
      <div>
        <label
          htmlFor="gear-list-select"
          className="text-muted-foreground mb-2 block font-mono text-[10px] tracking-widest uppercase"
        >
          List
        </label>
        <select
          id="gear-list-select"
          value={selectedList.name}
          onChange={(event) => setSelectedListName(event.target.value)}
          className="border-border bg-background text-foreground focus:border-foreground w-full rounded-none border px-3 py-2 font-mono text-xs tracking-wider uppercase focus:outline-none"
        >
          {gearLists.map((list) => (
            <option key={list.name} value={list.name}>
              {list.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8">
        <SummaryMicroBars categories={selectedList.categories} />
      </div>

      <div className="mt-12">
        <GearList categories={selectedList.categories} />
      </div>
    </>
  )
}

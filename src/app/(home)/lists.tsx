'use client'

import { useCallback } from 'react'
import type { GetListsResponse } from '@/app/api/lists/route'
import { useLists } from '@/lib/api/hooks/lists'

type ListsProps = {
  initialLists: GetListsResponse
}

export function Lists({ initialLists }: ListsProps) {
  const { addList } = useLists(initialLists)

  const handleClick = useCallback(() => {
    addList({
      name: 'test',
      description: 'test description',
      public: false,
    })
  }, [addList])

  return (
    <div>
      <ListsTable initialLists={initialLists} />
      <button onClick={handleClick}>Create</button>
    </div>
  )
}

function ListsTable({ initialLists }: ListsProps) {
  const { data, isLoading, error } = useLists(initialLists)

  if (isLoading && !data) return <div>Loading...</div>

  if (error || !data) return <div>{error?.message}</div>

  if (!data.length) return <div>No lists yet</div>

  return (
    <ul>
      {data.map((list) => (
        <li key={list.id}>{list.name}</li>
      ))}
    </ul>
  )
}

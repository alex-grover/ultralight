'use client'

import useSWR from 'swr'
import type { GetListsError, GetListsResponse } from '@/app/api/lists/route'

export function Lists() {
  const { data } = useSWR<GetListsResponse, GetListsError>('/api/lists')

  if (!data) return <div>Loading...</div>

  if (!data.length) return <div>No lists yet</div>

  return (
    <ul>
      {data.map((list) => (
        <li key={list.id}>{list.name}</li>
      ))}
    </ul>
  )
}

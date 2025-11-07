import { useCallback } from 'react'
import useSWR from 'swr'
import type {
  CreateListInput,
  CreateListResponse,
  GetListsResponse,
} from '@/app/api/lists/route'
import { authClient } from '@/lib/auth/client'
import type { ListId, UserId } from '@/lib/db/schema'

const LISTS_API_URL = '/api/lists'

export function useLists() {
  const { data: session } = authClient.useSession()
  const { data, isLoading, isValidating, error, mutate } = useSWR<
    GetListsResponse,
    Error
  >(session && LISTS_API_URL)

  const addList = useCallback(
    (input: CreateListInput) => {
      async function execute() {
        try {
          await mutate(
            async (data) => {
              const res = await fetch(LISTS_API_URL, {
                method: 'POST',
                body: JSON.stringify(input),
              })

              if (!res.ok) {
                const message = 'Error creating list'
                alert(message)
                throw new Error(message) // eslint-disable-line no-restricted-syntax
              }

              const created = (await res.json()) as CreateListResponse

              return data ? [created, ...data] : [created]
            },
            {
              optimisticData: (data) => {
                const optimisticList = {
                  ...input,
                  id: 0 as ListId,
                  slug: 'temp',
                  userId: 'temp' as UserId,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  deletedAt: null,
                }

                return data ? [optimisticList, ...data] : [optimisticList]
              },
              revalidate: false,
            },
          )
        } catch {
          // No need to handle the error
        }
      }

      void execute()
    },
    [mutate],
  )

  return { data, isLoading, isValidating, error, mutate, addList }
}

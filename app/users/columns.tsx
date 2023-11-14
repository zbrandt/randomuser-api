"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  gender: string,
  name: string,
  email: string,
  picture: string
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const item = row.original
 
      return (
        <Avatar>
            <AvatarImage src={item.picture} />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )
    },
  },
]

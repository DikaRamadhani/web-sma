import { useState } from "react"
import { Trash2Icon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button"

type Props = {
    onDelete: () => Promise<void> | void
}

export function AlertDialogDestructive({ onDelete }: Props) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <AlertDialog open={open} onOpenChange={(v) => { if (!isLoading) setOpen(v) }}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" onClick={() => setOpen(true)}>Delete</Button>
      </AlertDialogTrigger>

      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>

          <AlertDialogTitle>Delete?</AlertDialogTitle>

          <AlertDialogDescription>
            Data yang dihapus tidak bisa dikembalikan.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel variant="outline" disabled={isLoading}>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            variant="destructive"
            disabled={isLoading}
            onClick={async (e) => {
              e.preventDefault()
              setIsLoading(true)
              try {
                await onDelete()
              } finally {
                setIsLoading(false)
                setOpen(false)
              }
            }}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Menghapus...
              </span>
            ) : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
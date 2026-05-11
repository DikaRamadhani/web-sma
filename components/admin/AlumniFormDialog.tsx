"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

type AlumniFormDialogProps = {
  open: boolean;
  isEdit: boolean;
  nama: string;
  universitas: string;
  tahun: string;
  onOpenChange: (open: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
  onNamaChange: (value: string) => void;
  onUniversitasChange: (value: string) => void;
  onTahunChange: (value: string) => void;
  onJabatanChange: (value: string) => void;
  onFotoChange: (file: File | null) => void;
};

export default function AlumniFormDialog({
  open,
  isEdit,
  nama,
  universitas,
  tahun,
  onOpenChange,
  onSubmit,
  onNamaChange,
  onUniversitasChange,
  onTahunChange,
  onFotoChange,
}: AlumniFormDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-[32px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {isEdit ? "Edit Alumni" : "Tambah Alumni"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Masukkan Nama..."
            value={nama}
            onChange={(e) => onNamaChange(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Masukkan Universitas..."
            value={universitas}
            onChange={(e) => onUniversitasChange(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Masukkan Tahun Lulus..."
            value={tahun}
            onChange={(e) => onTahunChange(e.target.value)}
          />
            
          <Input
            type="file"
            onChange={(e) => onFotoChange(e.target.files?.[0] || null)}
          />

          <DialogFooter>
            <Button type="button" onClick={() => onOpenChange(false)} variant="outline">
              Batal
            </Button>

            <Button type="submit" className="bg-brand-primary">
              {isEdit ? "Update" : "Simpan"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
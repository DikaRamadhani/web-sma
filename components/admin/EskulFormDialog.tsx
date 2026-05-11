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
import TextEditor from "../text-editor";

type EskulFormDialogProps = {
  open: boolean;
  isEdit: boolean;
  nama: string;
  pembina: string;
  tujuan: string;
  prestasi: string;
  jadwal: string;
  onOpenChange: (open: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
  onNamaChange: (value: string) => void;
  onPembinaChange: (value: string) => void;
  onTujuanChange: (value: string) => void;
  onPrestasiChange: (value: string) => void;
  onJadwalChange: (value: string) => void;
  onFotoChange: (file: File | null) => void;
};

export default function EskulFormDialog({
  open,
  isEdit,
  nama,
  pembina,
  tujuan,
  prestasi,
  jadwal,
  onOpenChange,
  onSubmit,
  onNamaChange,
  onPembinaChange,
  onTujuanChange,
  onPrestasiChange,
  onJadwalChange,
  onFotoChange,
}: EskulFormDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl rounded-2xl p-0 overflow-hidden">
        <DialogHeader className="p-6 border-b">
          <DialogTitle className="text-xl font-bold text-slate-800">
            {isEdit ? "Edit Ekskul" : "Tambah Ekskul"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={onSubmit} className="flex flex-col max-h-[80vh]">
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600">Nama Ekskul</label>
                <Input
                  value={nama}
                  onChange={(e) => onNamaChange(e.target.value)}
                  placeholder="Contoh: Basket"
                  className="rounded-lg border-slate-200 focus:ring-brand-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600">Pembina</label>
                <Input
                  value={pembina}
                  onChange={(e) => onPembinaChange(e.target.value)}
                  placeholder="Nama Guru Pembina"
                  className="rounded-lg border-slate-200"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600">Jadwal</label>
                <Input
                  value={jadwal}
                  onChange={(e) => onJadwalChange(e.target.value)}
                  placeholder="Hari & Jam Latihan"
                  className="rounded-lg border-slate-200"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600">Foto Utama</label>
                <Input
                  type="file"
                  onChange={(e) => onFotoChange(e.target.files?.[0] || null)}
                  className="rounded-lg border-slate-200"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-slate-600">Tujuan & Deskripsi</label>
                <div className="min-h-[200px] resize-y overflow-auto border border-slate-200 rounded-lg p-1">
                  <TextEditor value={tujuan} onChange={onTujuanChange} />
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-slate-600">Prestasi</label>
                <div className="min-h-[200px] resize-y overflow-auto border border-slate-200 rounded-lg p-1">
                  <TextEditor value={prestasi} onChange={onPrestasiChange} />
                </div>
              </div>

            </div>
          </div>

          <DialogFooter className="p-6 border-t bg-white mt-auto">
            <Button
              type="button"
              onClick={() => onOpenChange(false)}
              variant="outline"
              className="rounded-lg px-6 cursor-pointer"
            >
              Batal
            </Button>
            <Button type="submit" className="bg-brand-primary hover:bg-brand-primary/90 rounded-lg px-8 cursor-pointer">
              {isEdit ? "Update Data" : "Simpan Data"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

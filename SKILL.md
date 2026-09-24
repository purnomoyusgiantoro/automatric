---
name: automatric-memory-sync
description: "Aturan wajib untuk repositori Automatric: Setiap perubahan kode, arsitektur, atau fitur harus dicatat dan diperbarui ke dalam MEMORY.md."
---

# Automatric Memory Sync Skill

## Gambaran Umum (Overview)
Skill ini mengatur standar pencatatan riwayat dan memori proyek di repositori `automatric`. Setiap kali ada perubahan (fitur baru, refaktor, perbaikan bug, penyesuaian paket harga, atau pembaruan konfigurasi), agent atau pengembang **WAJIB** memperbarui file `MEMORY.md` di root repositori.

## Aturan Utama (Rules)
1. **Wajib Sinkronisasi ke MEMORY.md**:
   - Setelah menyelesaikan tugas atau modifikasi kode, catat ringkasan perubahannya ke bagian `## Change Log / Riwayat Perubahan` di `MEMORY.md`.
   - Format entri log:
     ```markdown
     ### [YYYY-MM-DD HH:mm] - <Judul Singkat Perubahan>
     - **Tipe**: (Fitur / Desain / Bugfix / Config / Telemetri)
     - **File Terkait**: `path/to/file`
     - **Detail**: Penjelasan singkat apa yang diubah dan dampaknya.
     ```

2. **Menjaga Integritas State Proyek**:
   - Bagian `## Status Terkini Proyek` di `MEMORY.md` harus selalu mencerminkan kondisi riil repositori (stack yang aktif, daftar komponen yang sudah dibuat, dan link penting).

3. **Tech Stack Contract**:
   - Framework: **React 19 + TypeScript**
   - Styling: **Tailwind CSS 3** (Obsidian Black `#050505` + Matte Solid Surfaces)
   - Telemetry: Background Observability terstruktur tanpa bloat.

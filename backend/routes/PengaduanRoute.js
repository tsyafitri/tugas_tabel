import express from "express";
import {
    deletePengaduan,
    getPengaduan, 
    getPengaduanById,
    savePengaduan,
    updatePengaduan,
} from "../controllers/PengaduanControllers.js";

const router = express.Router();

router.get('/pengaduan', getPengaduan);
router.get('/pengaduan/:id_pengaduan', getPengaduanById);
router.post('/pengaduan', savePengaduan);
router.patch('/pengaduan:id_pengaduan', updatePengaduan);
router.delete('/pengaduan/:id_pengaduan', deletePengaduan);

export default router;
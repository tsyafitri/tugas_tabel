import { error } from "console";
import path from "path";
import pengaduan from "../models/pengaduan.js";

export const getPengaduan= async(req, res)=>{
    console.log(req.body)
    try {
        const response = await pengaduan.findAll();
        res.json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const savePengaduan = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const  tgl_pengaduan= req.body.tgl_pengaduan;
    const nik = req.body.nik;
    const isi_laporan = req.body.isi_laporan;
    const foto= req.files.foto;
    const status = "proses";
    const ext = path.extname(foto.name);
    const fileName = foto.md5 + ext;
    const allowedType = ['.png','.jpg','.jpeg'];
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg:"Invalid Images"});

    foto.mv (`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg:"err message"});
        try {
            await pengaduan.create({tgl_pengaduan: tgl_pengaduan, nik: nik, isi_laporan: isi_laporan, foto: fileName, status: status, url: url});
            res.status(201).json({msg: "Pengaduan Created Successfuly"});
        } catch (err) {
            console.log(error.message);
        }
    })
}

export const getPengaduanById = async(req, res)=>{
    try {
        const response = await pengaduan.findOne({
            where:{
                id_pengaduan : req.params.id_pengaduan
            }
        });
        res.json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const updatePengaduan = async (req, res)=>{

}

export const deletePengaduan = async (req, res)=>{
    
}
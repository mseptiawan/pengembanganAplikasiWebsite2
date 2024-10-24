const mongoose = require("mongoose");

const bukuSchema = new mongoose.Schema({
    judul : {type : String, required : true},
    penulis : {type : String, required : true},
    genre : [{type : String, required : true}]
});

module.exports = mongoose.model("Buku", bukuSchema);

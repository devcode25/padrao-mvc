const mongoose = require ("mongoose");

const empreendedoraSchema = new mongoose.Schema(
    {
        nomeDaEmpreendedora: { type: String, required: true },
        nomeDoEmpreendimento: { type: String, required: true },
        cpfCnpj: { type: String, required: true },
        redeSocial: { type: Array },
        site: { type: String },
        whatsapp: { type: String, required: true },
        email: { type: String, required: true },
        nicho: { type: Array, required: true },
        categoria: { type: Array, required: true },
        tag: { type: Array, required: true },
        endereco: { type: Object, required: true },
        descricao: { type: String, required: true },
        youLiked: { type: Boolean }
    }
)

const empreendedoras = mongoose.model('empreendedoras', empreendedoraSchema);

module.exports = empreendedoras;


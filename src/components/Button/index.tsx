import React from 'react';

function sendWhatsapp(nome, email, mensagem) {
    const text = `nome:${nome}, meu e-mail:${email}, minha mensagem é:${mensagem}`;
    const whatsNumber = "5583981471674"
    const URL = `https://wa.me/${whatsNumber}?text=${text}`
    window.open(URL, "_blank");
}

function WhatsappButton({ nome, email, mensagem }) {
    return (
        <button className='botao' onClick={() => sendWhatsapp(nome, email, mensagem)}>Enviar</button>
    );
}

export default WhatsappButton;

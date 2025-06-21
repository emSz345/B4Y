import React from 'react';
import './Cidades.css';
import sp from '../../../../assets/img-sp.png';
import rj from '../../../../assets/img-rj.png';
import mg from '../../../../assets/img-mg.png';

const Cidades = () => {
    const cidades = [
        { nome: "São Paulo", img: sp },
        { nome: "Rio de Janeiro", img: rj },
        { nome: "Minas Gerais", img: mg },
        { nome: "Bahia", img: rj },
        { nome: "Paraná", img: sp },
        { nome: "Santa Catarina", img: sp },
    ];

    return (
        <div className="cidades-container">
            <h3 className="title">Estados com mais shows</h3>
            <div className="cidades-grid">
                {cidades.map((cidade, index) => (
                    <div key={index} className="cidade-card">
                        <div className="imagem-container">
                            <img src={cidade.img} alt={cidade.nome} />
                            <h3 className="texto-sobre-imagem">{cidade.nome}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cidades;

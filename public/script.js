function mostrarRanking() {
  
    const selecoes = [
        { nome: "França", pontos: 1877.32 },
        { nome: "Espanha", pontos: 1876.40 },
        { nome: "Argentina", pontos: 1874.81 },
        { nome: "Inglaterra", pontos: 1825.97 },
        { nome: "Portugal", pontos: 1763.83 },
        { nome: "Brasil", pontos: 1761.16 },
        { nome: "Holanda", pontos: 1757.87 },
        { nome: "Bélgica", pontos: 1734.71 },
        { nome: "Alemanha", pontos: 1730.37 },
        { nome: "Croácia", pontos: 1717.07 }
    ];

    
    selecoes.sort((a, b) => b.pontos - a.pontos);

    
    let htmlResultado = "<h3>Ranking Oficial FIFA - Top 10</h3><ol>";

    selecoes.forEach((selecao, index) => {
        htmlResultado += `<li><strong>${selecao.nome}</strong>: ${selecao.pontos.toFixed(2)} pontos</li>`;
    });

    htmlResultado += "</ol>";

    
    document.getElementById("resultado").innerHTML = htmlResultado;
}
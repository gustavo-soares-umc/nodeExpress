
const dadosFifa = [
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

const rankingOrdenado = dadosFifa.sort((a, b) => b.pontos - a.pontos);

function renderizarBotoes() {
    const containerBotoes = document.getElementById("botoes-ranking");
    
    
    rankingOrdenado.forEach((selecao, index) => {
        const btn = document.createElement("button");
        btn.innerHTML = `<strong>${index + 1}º</strong> ${selecao.nome}`;
        btn.style.margin = "5px";
        btn.onclick = () => mostrarPlacarGeral();
        containerBotoes.appendChild(btn);
    });
}

function mostrarPlacarGeral() {
    let html = "<h3>Ranking Oficial FIFA - Top 10</h3><hr>";
    
    rankingOrdenado.forEach((sel, i) => {
        
        const destaque = sel.nome === "Brasil" ? "color: green; font-weight: bold;" : "";
        
        html += `<div style="${destaque}">
                    <strong>${i + 1}º ${sel.nome}</strong> — ${sel.pontos.toFixed(2)} pts
                 </div>`;
    });

    document.getElementById("resultado").innerHTML = html;
}


renderizarBotoes();
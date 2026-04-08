function mostrarPlacar() {
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

            let display = "<h3>Classificação Detalhada</h3>";
            
            selecoes.forEach((sel, index) => {
                display += `
                    <div class="item-ranking">
                        <span class="nome-selecao">${index + 1}º ${sel.nome}</span>
                        <span class="pontos-selecao">${sel.pontos.toFixed(2)} pts</span>
                    </div>`;
            });

            const divResultado = document.getElementById("resultado");
            divResultado.innerHTML = display;
            divResultado.style.display = "block";
        }
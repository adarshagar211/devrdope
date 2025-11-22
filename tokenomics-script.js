const tokenomicsData = [
    { label: 'Future CEX Listing & Liquidity', percentage: 35, tokens: 350000000, color: '#8b5cf6' },
    { label: 'Community & Ecosystem Fund', percentage: 20, tokens: 200000000, color: '#06f58f' },
    { label: 'Initial Liquidity (Raydium DEX)', percentage: 15, tokens: 150000000, color: '#00e5ff' },
    { label: 'Team Allocation', percentage: 15, tokens: 150000000, color: '#ff9900' },
    { label: 'Marketing & Promotion', percentage: 10, tokens: 100000000, color: '#ff006e' },
    { label: 'Treasury / Operations', percentage: 5, tokens: 50000000, color: '#2979ff' },
];

const formatNumber = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

window.onload = () => {

    /* PIE CHART */
    const ctx = document.getElementById('tokenomicsChart').getContext('2d');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: tokenomicsData.map(d => `${d.label} (${d.percentage}%)`),
            datasets: [{
                data: tokenomicsData.map(d => d.percentage),
                backgroundColor: tokenomicsData.map(d => d.color),
                borderColor: '#0d1117',
                borderWidth: 4,
                hoverOffset: 15
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            responsive: true
        }
    });

    /* ALLOCATION CARDS */
    const legend = document.getElementById('legendContainer');

    tokenomicsData.forEach(item => {
        legend.innerHTML += `
                    <div class="p-4 rounded-lg shadow-xl border-l-4 neon-glow-effect"
                         style="border-color:${item.color}; background-color:rgba(12,12,20,0.88)">
                        
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl font-bold text-cyan-400"
                                style="text-shadow: 0 0 6px rgba(0,255,255,0.35);">
                                ${item.label}
                            </h3>

                            <span class="text-2xl font-extrabold"
                                style="color:${item.color}; text-shadow:0 0 8px ${item.color}55;">
                                ${item.percentage}%
                            </span>
                        </div>

                        <p class="text-sm text-blue-200 mt-2">
                            Tokens: ${formatNumber(item.tokens)}
                        </p>
                    </div>
                `;
    });
};
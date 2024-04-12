window.addEventListener("DOMContentLoaded", async () => {
    const local = JSON.parse(localStorage.getItem("visitorCount"));
    if (local) {
        const date = new Date();
        local.count++;
        local.lastVisit = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}, ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

        const formattedLastVisit = new Intl.DateTimeFormat("pt-BR", {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);

        window.localStorage.setItem("visitorCount", JSON.stringify(local));

        const span = document.createElement('span');
        span.id = "count";
        span.innerHTML = `Esta página foi visitada ${local.count} vezes. A última visita foi: ${formattedLastVisit}`;

        const footer = document.getElementById("footer");

        footer.appendChild(span);
    } else {
        window.localStorage.setItem("visitorCount", JSON.stringify({ count: 0, lastVisit: '' }));
    }
});

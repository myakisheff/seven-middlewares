const stats = {};

function getStats(req, res, next) {
    let agent = req.headers['user-agent'];

    if (agent)
        stats[agent] = (stats[agent] || 0) + 1;

        let html = '<table border="1"><thead><tr><th>User-Agent</th><th>Requests</th></tr></thead><tbody>';
        for(let key in stats)
            html += `<tr><td>${key}</td><td>${stats[key]}</td></tr>`;

        html += '</tbody></table>';
        res.send(html);
}
    
module.exports = getStats;
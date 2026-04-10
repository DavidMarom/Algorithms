// ─── Chat — talks to Claude via the Anthropic Messages API ───────────────────
// Route: POST https://api.anthropic.com/v1/messages
//
// Your API key is stored in localStorage so you only enter it once.
// Clear it any time by running: localStorage.removeItem('anthropic_key')

const SYSTEM_PROMPT = `You are an expert algorithms tutor specialising in graph algorithms and Dijkstra's shortest-path algorithm. The user is studying a JavaScript implementation that uses:
- A min-heap priority queue (PriorityQueue class with enqueue/dequeue)
- A weighted undirected graph (WeightedGraph class with adjacency list)
- dijkstra(start, end) that returns { distance, path }

The demo graph has vertices A–F with the following weighted edges:
  A-B:4  A-C:2  B-E:3  C-D:2  C-F:4  D-E:3  D-F:1  E-F:1
Shortest path A→E is A→C→D→F→E with total weight 6.

Answer questions clearly, reference the code when relevant, and suggest improvements or related topics where helpful. Keep answers concise.`;

const API_URL = 'https://api.anthropic.com/v1/messages';

function getApiKey() {
    let key = localStorage.getItem('anthropic_key');
    if (!key) {
        key = prompt('Enter your Anthropic API key (stored locally, never sent anywhere except api.anthropic.com):');
        if (key) localStorage.setItem('anthropic_key', key);
    }
    return key || null;
}

function appendMessage(role, text) {
    const log = document.getElementById('chat-log');
    const div = document.createElement('div');
    div.className = 'chat-message chat-' + role;
    div.textContent = (role === 'user' ? 'You: ' : 'Agent: ') + text;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
}

function setStatus(msg) {
    document.getElementById('chat-status').textContent = msg;
}

async function sendMessage() {
    const input = document.getElementById('chat-input');
    const userText = input.value.trim();
    if (!userText) return;

    const apiKey = getApiKey();
    if (!apiKey) { setStatus('No API key — enter one to continue.'); return; }

    input.value = '';
    appendMessage('user', userText);
    setStatus('Thinking…');

    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'anthropic-dangerous-client-side-api-key-exposure': 'true'
            },
            body: JSON.stringify({
                model: 'claude-opus-4-6',
                max_tokens: 1024,
                system: SYSTEM_PROMPT,
                messages: [{ role: 'user', content: userText }]
            })
        });

        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(err.error?.message || `HTTP ${res.status}`);
        }

        const data = await res.json();
        const reply = data.content.find(b => b.type === 'text')?.text || '(no text response)';
        appendMessage('agent', reply);
        setStatus('');
    } catch (e) {
        setStatus('Error: ' + e.message);
    }
}

document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') sendMessage();
});

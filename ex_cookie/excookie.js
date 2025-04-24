document.addEventListener('DOMContentLoaded', () => {
    const c = document.cookie.match(/saveur_preferee=([^;]+)/);
    const div = document.createElement('div');
    document.body.appendChild(div);
  
    if (c) {
      div.innerHTML = `
        <p>Ta saveur préférée est : ${decodeURIComponent(c[1])} !</p>
        <button id="reset">Oublier ma saveur ❌</button>
      `;
      document.getElementById('reset').onclick = () => {
        document.cookie = 'saveur_preferee=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
        location.reload();
      };
    } else {
      div.innerHTML = `
        <form>
          <label>Ta saveur préférée : <input name="saveur" required></label>
          <button>OK</button>
        </form>
      `;
      div.querySelector('form').onsubmit = e => {
        e.preventDefault();
        const s = e.target.saveur.value;
        const d = new Date(Date.now() + 3600 * 1000).toUTCString();
        document.cookie = `saveur_preferee=${encodeURIComponent(s)}; expires=${d}; path=/`;
        location.reload();
      };
    }
  });
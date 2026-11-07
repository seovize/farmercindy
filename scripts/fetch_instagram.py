import urllib.request
import re
import json

urls = [
    'https://imginn.com/iamfarmercindy_/',
    'https://picuki.com/profile/iamfarmercindy_'
]

for url in urls:
    print(f"Trying {url}...")
    try:
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        })
        with urllib.request.urlopen(req, timeout=12) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            print(f"Success {url}, len: {len(html)}")
            
            # Save raw HTML for analysis
            with open("scripts/insta_raw.html", "w", encoding="utf-8") as f:
                f.write(html[:100000])
                
            # Extract descriptions
            matches = re.findall(r'class="desc">(.*?)</div>', html, re.DOTALL)
            print("Found desc matches:", len(matches))
            for i, m in enumerate(matches[:5]):
                clean = re.sub(r'<[^>]+>', '', m).strip()
                print(f"Post {i}: {clean[:150]}")
            break
    except Exception as e:
        print(f"Failed {url}: {e}")

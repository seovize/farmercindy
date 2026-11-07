import urllib.request
import os

images = {
    "avatar.jpg": "https://scontent.cdninstagram.com/v/t51.2885-19/424868877_1170730163898970_4219153696937724766_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=102&ig_cache_key=GA38UhlaCozbxSgEAF7Lv_7ucY06bkULAAAB1501500j-ccb7-5&ccb=7-5&_nc_sid=669407&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=hz6xFnGHTP8Q7kNvwGODuJl&_nc_oc=AdqLD_c0Ygmpnef9uTG9oS1VxhHaeCVisp3QfB9ML0G3jWJc6xbCfcNCmjyP8Q3hi4o&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_ss=7ba8c&oh=00_AQRtjFZXNWCr61vHRuNP-_ndXTVQ_X_vpX5fep9to-gqaA&oe=6AF56811",
    "post_nov06.jpg": "https://scontent.cdninstagram.com/v/t51.82787-15/890717012_17988568410076014_7561610166293446164_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=q_A8w_cxv5AQ7kNvwF8Ioi7&_nc_oc=AdpR5P-A7ZEdqCZySdxfnhBiRPPfcVkOdLP3eaHe-4BzxjMBCwYu_4r-R45ugJGra6U&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=0diOcJMoNH0KH2RPduAu_w&_nc_ss=7ba8c&oh=00_AQQYXYBS5A_oYj3dAiALRdWFUp0GT12eUSKfYYCNdjAz9w&oe=6AF56986",
    "post_nov04.jpg": "https://scontent.cdninstagram.com/v/t51.82787-15/888619517_17988359142076014_7228612937867149701_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=z7IuTp4TBBMQ7kNvwHw4DcF&_nc_oc=AdqsUzhIb_CdcQYQJSRkRsN6CoXeYcKvp3zsRXVt77weZ_janXZHQOOmsbI19I3tjos&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=0diOcJMoNH0KH2RPduAu_w&_nc_ss=7ba8c&oh=00_AQSry-EXeUQRLdL3NMapqnE0Sjcvh8TzucgG15SipF4q5w&oe=6AF5659F",
    "post_nov03.jpg": "https://scontent.cdninstagram.com/v/t51.82787-15/884844684_17988227982076014_6213609158764250872_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=DQ6WcmpKAyEQ7kNvwHTUarH&_nc_oc=Adqoow-cj-aYubtjz4xkMnMIZ5fj_Or1EqWPL279wckJwkuR9uW4AsabQ5dJ9YcazTM&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=0diOcJMoNH0KH2RPduAu_w&_nc_ss=7ba8c&oh=00_AQSFzuayXaKe6LI_OdRVGO38FbS0W7RLiwLKlePLPa7pBw&oe=6AF5519E",
    "post_nov03_b.jpg": "https://scontent.cdninstagram.com/v/t51.82787-15/890716665_17988181068076014_6688559970281201181_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=7r5JqTcUtbsQ7kNvwHSKILF&_nc_oc=AdqwSM5BLhYxw9CaEfwtxbJgM92XGlVjzec_rtUlFI9IkNgOE1W9mZ7446xdQxQoAQc&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=0diOcJMoNH0KH2RPduAu_w&_nc_ss=7ba8c&oh=00_AQQS7UIMlkh2AvWWbrh8vqrUxdR-D89A8qrBfsWQU_g23A&oe=6AF54EEB",
    "post_nov02.jpg": "https://scontent.cdninstagram.com/v/t51.82787-15/884708166_17988036348076014_6027756903980444554_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=GR_3If0tJWEQ7kNvwE6Dw6t&_nc_oc=AdrJQ_qfn_rVwZEHzK39B983XJCkRtMpyx4rAFU3twas_iPKohY9_KAsA-cM9PY_nqQ&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=0diOcJMoNH0KH2RPduAu_w&_nc_ss=7ba8c&oh=00_AQS4jItG5n_n718O30Jb2ivGoHjbTFnein5c8yWlVfSnsw&oe=6AF55F6F",
    "reel_oct17.jpg": "https://scontent.cdninstagram.com/v/t51.71878-15/856091596_1093780943438624_8489815989567807566_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=-Ll4DPfvwQMQ7kNvwFLbdL-&_nc_oc=AdoN3qRsjDxOVWCLtSzRSUvaeRMsEbR0ePMHWy3yt1OGDr4fihCuhUv3RIBV8Fa-SVY&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=0diOcJMoNH0KH2RPduAu_w&_nc_ss=7ba8c&oh=00_AQQefUaLSvvFgf6GEsKcXefIueWlNutDwycoeK4fBy2U6g&oe=6AF553B7",
    "reel_oct12.jpg": "https://scontent.cdninstagram.com/v/t51.71878-15/842935188_1101990739376430_1183819490664500025_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=JX_EfiVMKeAQ7kNvwGtelwi&_nc_oc=Adoo2UOSpzDXpDDPBmLn_GKk8QXkG7vPFzjfCzAqrwzm-x3Hm42vLI-eU6H-k5av20c&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=0diOcJMoNH0KH2RPduAu_w&_nc_ss=7ba8c&oh=00_AQStyDIYsFAgfITOzoO8fqL_9bIY52C4VVlGrZoBhitfSA&oe=6AF56011",
    "reel_oct08.jpg": "https://scontent.cdninstagram.com/v/t51.71878-15/838593268_2140896633188259_899962722026558307_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=x7K12kqca2IQ7kNvwEyKk5_&_nc_oc=AdqpvQ2K50wj_WbRKKxDbdraYS4Ty82lOnmyv6TrxN639kFD7j4vP543t4kte69Oqlg&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=0diOcJMoNH0KH2RPduAu_w&_nc_ss=7ba8c&oh=00_AQQOjI-y5WZPNiUhzhoQjL1Mrd4Z5nZO91SJreDSy-1uNA&oe=6AF562C3"
}

out_dir = r"d:\farmer cendy\public\images\instagram"
os.makedirs(out_dir, exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for name, url in images.items():
    dest = os.path.join(out_dir, name)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            with open(dest, "wb") as f:
                f.write(data)
            print(f"Downloaded {name}: {len(data)} bytes")
    except Exception as e:
        print(f"Error {name}: {e}")

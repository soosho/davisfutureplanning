import os
import requests

url = "https://i0.wp.com/davisfutureplanning.com/wp-content/uploads/2021/01/Untitled-design-16.png?resize=300%2C300&ssl=1"
output_path = "public/images/footer_logo_v2.png"

try:
    response = requests.get(url)
    response.raise_for_status()
    with open(output_path, 'wb') as f:
        f.write(response.content)
    print(f"Successfully downloaded to {output_path}")
except Exception as e:
    print(f"Error: {e}")

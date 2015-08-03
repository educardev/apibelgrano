import requests
import json

hostname = 'https://labs.educ.ar'
path 	 = '/1.0/videos/' 
app_key  = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
fields   = [
	'id', 
	'titulo', 
	'video_sd', 
	'video_hd',
	'autores'
]
filters  = { 
	'autor': 'Educ.ar',
	'apto_web': True
}
limit = 10

params 	 = { 'app_key' : app_key, 'fields' : fields, 'filters' : filters, 'limit': limit }

query = json.dumps(params)

url = hostname + path + query

r = requests.get(url)
print r.json()

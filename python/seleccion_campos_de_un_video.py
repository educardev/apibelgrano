import requests
import json

hostname = 'https://preprod-apibelgrano.educ.ar'
path 	 = '/1.0/videos/' 
app_key  = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
id       = '40373'
fields   = [
	'id',
	'titulo',
	'video_sd',
	'video_hd',
	'canales',
	'autores'
]
filters  = []
limit = 10

params 	 = { 'app_key' : app_key, 'fields' : fields, 'filters' : filters, 'limit': limit }

query = json.dumps(params)

url = hostname + path + id + '/' + query

r = requests.get(url)
print r.json()

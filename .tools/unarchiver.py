import os
import re

import pprint
import requests
import yaml
from bs4 import BeautifulSoup as bs


pp = pprint.PrettyPrinter(indent=1)
urls = [
    'https://web.archive.org/web/20201111195636/https://eic.network/projects/malta-files',
    'https://web.archive.org/web/20210307091845/https://eic.network/projects/toxic-valley',
    'https://web.archive.org/web/20210307091845/https://eic.network/projects/tax-evader-radar',
    'https://web.archive.org/web/20210307091845/https://eic.network/projects/jersey-offshore',
    'https://web.archive.org/web/20210307091845/https://eic.network/projects/billions-for-borders',
    'https://web.archive.org/web/20210307091845/https://eic.network/projects/football-leaks-continues',
    'https://web.archive.org/web/20210307091845/https://eic.network/projects/europe%20on%20coke',
    'https://web.archive.org/web/20210307091845/https://eic.network/projects/court-secrets',
    'https://web.archive.org/web/20210307091845/https://eic.network/projects/arms',
    'https://web.archive.org/web/20210307091845/https://eic.network/projects/football-leaks',
    'https://web.archive.org/web/20210307091845/https://eic.network/projects/malta-files',
    'https://web.archive.org/web/20210307091845/https://eic.network/projects/ballet'
]


def get_bs(url):
    page = requests.get(url)
    return bs(page.text, 'html.parser')

def unarchive_link(url):
    regex = re.compile('(^http.*)(?=http[s]*\://.*)')
    new_link = regex.sub('', url)
    return new_link

def get_publications(soup):
    result = list()
    newspapers = soup.find(
        'section', id='publications'
    ).find('div', class_='col-md-6').findChildren('div', recursive=False)

    for newspaper in newspapers:
        h5 = newspaper.find('h5')
        newspaper_dict = {
            'name': h5.a.text.strip(),
            'lang': h5.text.replace(h5.a.text, '').strip()
        }
        newspaper.find('h5').decompose()
        links = newspaper.find_all('a')
        newspaper_dict['links'] = [
            {
                'name': l.text.strip(),
                'url': unarchive_link(l.attrs['href'])
            } for l in links
        ]
        result.append(newspaper_dict)
    return result

def to_yaml(publications):
    return yaml.dump(publications, indent=2)

for url in urls:
    try:
        soup = get_bs(url)
        publications = get_publications(soup)
        yml = to_yaml(publications)
        print(yml)
        print(url)
    except Exception as e:
        print('ERR! RrrRRrR!')
        print(e)
    import ipdb; ipdb.set_trace()

import csv
from BeautifulSoup import BeautifulSoup
pws = {}
reader = csv.reader(open('countyCount.csv'), delimiter=",")
for row in reader:
    try:
        count = float( row[3].strip() )
        pws[row[2]] = count
    except:
        pass
svg = open('mocounties.svg', 'r').read()
soup = BeautifulSoup(svg, selfClosingTags=['defs','sodipodi:namedview'])
paths = soup.findAll('path')
colors = ['#fee5d9','#fcbba1','#fc9272','#fb6a4a','#de2d26','#a50f15']
path_style = 'fill:#d0d0d0;fill-rule:nonzero;stroke:#000000;stroke-width:0.178287;fill:'
for p in paths:
    
    if p['id'] not in ["State_Lines", "separator"]:
        
        try:
            count = pws[p['id']]
        except:
            continue
        if count > 105:
            color_class = 5
        elif count > 75:
            color_class = 4
        elif count > 45:
            color_class = 3
        elif count > 15:
            color_class = 2
        elif count >= 1:
            color_class = 1
        else:
            color_class = 0


        color = colors[color_class]
        p['style'] = path_style + color

print soup.prettify()
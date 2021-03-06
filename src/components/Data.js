import { SiCplusplus, SiCss3, 
    SiReact, SiPython, 
    SiJavascript, SiJava
 } from "react-icons/si";


const Data = {
    'intro':"Intro",
    'experience': [{
            'id' : 1,
            'company' : "Seclore Technology",
            'location' : 'Mumbai, India',
            'work' : [{
                    'id' : 1,
                    'role' : 'Product Engineer (Windows C++ developer)',
                    'duration' : 'Jan 2021 - now',
                    'about': "Nice job aye!"
                }, {
                    'id' : 2,
                    'role' : 'Trainee Product Engineer (Windows C++ developer)',
                    'duration' : 'Jul 2020 - Dec 2020',
                    'about': "Nice job aye!"
                }
            ]
        }, {
            'id' : 2,
            'company' : "Tata Consultancy Services",
            'location' : 'Mumbai, India',
            'work' : [{
                'id' : 1,
                'role' : 'Software Developer Intern (React native)',
                'duration' : 'Jul 2019 - Aug 2019',
                'about': "Nice job aye!"
            }
        ]
        }
    ],
    'projects': [{
        'id' : 1,
        'name' : 'Visual Sorting',
        'company' : 'Personal',
        'duration' : 'Jan 2021 - now',
        'technology' : 'React',
        'description': "Nice job aye!"
    }, {
        'id' : 2,
        'name' : 'Fake News Detector Telegram Bot',
        'company' : 'Personal',
        'duration' : 'Jul 2020 - Dec 2020',
        'technology' : 'Python Flask, Telegram API',
        'description': "Nice job aye!"
    }
    ],
    'skills':[{
        'id': 1,
        'name':'C++',
        'icon': SiCplusplus,
        'experience': '2 years',
        'rating':4,
        'outOf':5,
        'projects':[{
            'name':'Spreadsheet App',
            'link': 'https://www.google.com/'
        },{
            'name': 'Modern IPMSG',
            'link': 'https://www.google.com/'
        },{
            'name':'Spreadsheet App',
            'link': 'https://www.google.com/'
        },{
            'name': 'Modern IPMSG',
            'link': 'https://www.google.com/'
        }]
    },{
        'id': 2,
        'name':'Python',
        'icon': SiPython,
        'experience': '3 years',
        'rating':4.5,
        'outOf':5,
        'projects':[{
            'name':'Spreadsheet App',
            'link': 'https://www.google.com/'
        },{
            'name': 'Modern IPMSG',
            'link': 'https://www.google.com/'
        },{
            'name':'Spreadsheet App',
            'link': 'https://www.google.com/'
        },{
            'name': 'Modern IPMSG',
            'link': 'https://www.google.com/'
        }]
    },{
        'id': 3,
        'name':'React',
        'icon': SiReact,
        'experience': '1 years',
        'rating':4,
        'outOf':5,
        'projects':[{
            'name':'Spreadsheet App',
            'link': 'https://www.google.com/'
        },{
            'name': 'Modern IPMSG',
            'link': 'https://www.google.com/'
        },{
            'name':'Spreadsheet App',
            'link': 'https://www.google.com/'
        },{
            'name': 'Modern IPMSG',
            'link': 'https://www.google.com/'
        }]
    },{
        'id': 4,
        'name':'JavaScript',
        'icon': SiJavascript,
        'experience': '2 years',
        'rating':4,
        'outOf':5,
        'projects':[{
            'name':'Spreadsheet App',
            'link': 'https://www.google.com/'
        },{
            'name': 'Modern IPMSG',
            'link': 'https://www.google.com/'
        },{
            'name':'Spreadsheet App',
            'link': 'https://www.google.com/'
        },{
            'name': 'Modern IPMSG',
            'link': 'https://www.google.com/'
        }]
    },{
        'id': 5,
        'name':'CSS',
        'icon': SiCss3,
        'experience': '3 years',
        'rating':3,
        'outOf':5,
        'projects':[{
            'name':'Spreadsheet App',
            'link': 'https://www.google.com/'
        },{
            'name': 'Modern IPMSG',
            'link': 'https://www.google.com/'
        },{
            'name':'Spreadsheet App',
            'link': 'https://www.google.com/'
        },{
            'name': 'Modern IPMSG',
            'link': 'https://www.google.com/'
        }]
    },{
        'id': 6,
        'name':'Java',
        'icon': SiJava,
        'experience': '3 years',
        'rating':3.5,
        'outOf':5,
        'projects':[{
            'name':'Spreadsheet App',
            'link': 'https://www.google.com/'
        },{
            'name': 'Modern IPMSG',
            'link': 'https://www.google.com/'
        },{
            'name':'Spreadsheet App',
            'link': 'https://www.google.com/'
        },{
            'name': 'Modern IPMSG',
            'link': 'https://www.google.com/'
        }]
    }]
}

export default Data;
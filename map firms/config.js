var config = {
    style: 'mapbox://styles/catherine-y/cl66ohvo5001q15oakxw0ibzk',
    accessToken: 'pk.eyJ1IjoiY2F0aGVyaW5lLXkiLCJhIjoiY2w1ZW4xMDRxMG9tMDNpbXgyaDczN2N5ZSJ9.hjtcgntjG0aeXAZRlPTctA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Data Visualization - Firms',
    //subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    //byline: 'By a Digital Storyteller',
    //footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'canada',
            alignment: 'left',
            hidden: false,
            title: 'Canada',
            //image: './path/to/image/source.png',
            description: '',
            location: {
                center: [-104.12783, 55.03328],
                zoom: 5.62,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '15-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Perkins&Will',
            //image: './path/to/image/source.png',
            description: 'Participant: Alexander Stewart',
            location: {
                center: [-79.37872, 43.65011],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Lemay',
            //image: './path/to/image/source.png',
            description: 'Participant: Niloufar Makaremi',
            location: {
                center: [-79.37571, 43.65155],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '20-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Dtah',
            //image: './path/to/image/source.png',
            description: 'Participant: Elnaz Sanati',
            location: {
                center: [-79.38471, 43.67313],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '21-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Janet Rosenberg & Studio',
            //image: './path/to/image/source.png',
            description: 'Participant: Colin Berman',
            location: {
                center: [-79.42423, 43.68747],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '24-identifier',
            alignment: 'left',
            hidden: false,
            title: 'thinc design',
            //image: './path/to/image/source.png',
            description: 'Participant: Mike Tocher',
            location: {
                center: [-79.41861, 43.63852],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '32-identifier',
            alignment: 'left',
            hidden: false,
            title: 'DIALOG',
            //image: './path/to/image/source.png',
            description: 'Participant: Khatereh Baharikhoob',
            location: {
                center: [-79.38882, 43.64483],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '33-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Brook McIlroy',
            //image: './path/to/image/source.png',
            description: 'Participant: Andrea Mantin',
            location: {
                center: [-79.39569, 43.64837],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '16-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Seferian Design Group',
            //image: './path/to/image/source.png',
            description: 'Participant: Mike Flint',
            location: {
                center: [-79.80811, 43.33328],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '30-identifier',
            alignment: 'right',
            hidden: false,
            title: 'O2 Planning and Design',
            //image: './path/to/image/source.png',
            description: 'Participant: Chris Hardwicke',
            location: {
                center: [-114.07900, 50.98995],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'usa',
            alignment: 'left',
            hidden: false,
            title: 'USA',
            //image: './path/to/image/source.png',
            description: '',
            location: {
                center: [-98.04325, 39.20681],
                zoom: 5.52,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '22-identifier',
            alignment: 'left',
            hidden: false,
            title: 'WXY',
            //image: './path/to/image/source.png',
            description: 'Participant: Shurui Zhang',
            location: {
                center: [-74.00911, 40.71310],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '23-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Martha Schwartz Partners',
            //image: './path/to/image/source.png',
            description: 'Participant: Mary Hughes',
            location: {
                center: [-73.94759, 40.82454],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '31-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Hargreaves Jones Landscape Architecture',
            //image: './path/to/image/source.png',
            description: 'Participant: Megan Esopenko',
            location: {
                center: [-74.01170, 40.70627],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '28-identifier',
            alignment: 'left',
            hidden: false,
            title: 'LANDAU Design+Technology',
            //image: './path/to/image/source.png',
            description: 'Participant: Chris Landau',
            location: {
                center: [-75.14675, 39.95068],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '27-identifier',
            alignment: 'left',
            hidden: false,
            title: 'University of Florida',
            //image: './path/to/image/source.png',
            description: 'Participant: Karla Saldana Ochoa',
            location: {
                center: [-82.34827, 29.64746],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '29-identifier',
            alignment: 'right',
            hidden: false,
            title: 'SCAPE',
            //image: './path/to/image/source.png',
            description: 'Participant: Nans Voron',
            location: {
                center: [-114.36503, 43.68086],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '25-identifier',
            alignment: 'right',
            hidden: false,
            title: 'SE Group',
            //image: './path/to/image/source.png',
            description: 'Participant: Anita Manitius',
            location: {
                center: [-111.82409, 40.67075],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '14-identifier',
            alignment: 'right',
            hidden: false,
            title: '2.ink Studio',
            //image: './path/to/image/source.png',
            description: 'Participant: Jonathan Beaver',
            location: {
                center: [-122.65936, 45.52419],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '34-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Fletcher Studiios',
            //image: './path/to/image/source.png',
            description: 'Participant: David Flether',
            location: {
                center: [-122.38802, 37.76013],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'switzerland',
            alignment: 'left',
            hidden: false,
            title: 'Switzerland',
            //image: './path/to/image/source.png',
            description: '',
            location: {
                center: [8.10224, 46.85392],
                zoom: 7.93,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '17-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Verzone Woods Architectes',
            //image: './path/to/image/source.png',
            description: 'Participant: Craig Verzone',
            location: {
                center: [6.84393, 46.46393],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'netherlands',
            alignment: 'right',
            hidden: false,
            title: 'The Netherlands',
            //image: './path/to/image/source.png',
            description: '',
            location: {
                center: [5.59374, 52.00288],
                zoom: 8.49,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '18-identifier',
            alignment: 'left',
            hidden: false,
            title: 'West 8',
            //image: './path/to/image/source.png',
            description: 'Participant: PR West 8',
            location: {
                center: [4.48748, 51.90200],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'austria',
            alignment: 'right',
            hidden: false,
            title: 'Austria',
            //image: './path/to/image/source.png',
            description: '',
            location: {
                center: [14.02948, 47.68514],
                zoom: 6.85,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '26-identifier',
            alignment: 'right',
            hidden: false,
            title: 'City Intelligence Lab, Austrian Institute of Technology',
            //image: './path/to/image/source.png',
            description: 'Participant: Angelos Chronis',
            location: {
                center: [16.42694, 48.26910],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

    ]
};
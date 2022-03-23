const ListRendering = {
    data() {
        return {
            skills:[
                {text: 'Microsoft Excel'},
                {text: 'Microsoft Powerpoint'},
                {text: 'Microsoft Word'},
                {text: 'Adobe Photoshop'},
                {text: 'Adobe Premiere Pro'},
                {text: 'Open Broadcast Software'},
                {text: 'Digital Drawing'},
                {text: 'HTML, CSS, Javascript, PHP'},
                {text: 'Java, Python, MySQL'}
            ]
        }
    }
}

Vue.createApp(ListRendering).mount('#skills')
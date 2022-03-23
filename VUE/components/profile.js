const profile = Vue.createApp({
    data(){
        return {
            birthDay: "December 18, 2001",
            birthPlace: "Angeles City, Philippines",
            age: "20 years old",
            sex: "Male",
            height:	"174cm",
            religion: "Roman Catholic",
            civilStatus: "Single",
            fatherName: "Freddie T. Miclat",
            motherName: "Almeida M. Miclat",
            language: "English, Filipino, and Kapampangan"
        }
    }
});

profile.mount('#profile')
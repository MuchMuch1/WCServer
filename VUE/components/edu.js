const edu = Vue.createApp({
    data(){
        return {
            // Elementary
            elemSchool: "Great Shepherd Christian Academy",
            elemAddress: "Mauaque Resettlement Center, Mabalacat City",
            elemYear: "S.Y. 2008-2014",
            // Junior High
            jhsSchool: "Mawaque High School",
            jhsAddress: "Mauaque Resettlement Center, Mabalacat City",
            jhsYear: "S.Y. 2014-2018",
            // Senior High
            shsSchool: "Clark College of Science and Technology",
            shsAddress: "Dau, Mabalacat City",
            shsYear: "S.Y. 2018-2020"
        }
    }
});

edu.mount('#edu')
const training = Vue.createApp({
    data(){
        return {
            //1
            train1: "Science and Technology Engineering Research Work Seminar",
            organization1: "Mauaque High School",
            address1: "Mauaque Resettlement, Mabalacat City",
            date1: "2017-2018",
            //2
            train2: "Seminar on Cause and Effect of HIV Disease Awareness",
            organization2: "Clark College of Science and Technology",
            address2: "Dau, Mabalacat City",
            date2: "July, 2019",
            //3
            train3: "Student Immersion Program",
            organization3: "Kassa Media Group Inc.",
            address3: "Dau, Mabalacat City",
            date3: "December, 2019",
            //4
            train4: "Driving Course Training",
            organization4: "Land Transportation Office",
            address4: "Mabalacat City, Pampanga",
            date4: "March, 2021",
        }
    }
});

training.mount('#training')